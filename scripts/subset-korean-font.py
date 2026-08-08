# -*- coding: utf-8 -*-
"""
Noto Sans KR 자체 서브셋 생성 — @font-face 373개를 weight당 1개로 줄인다.

■ 왜 하는가 (2026-08-08 실측)
  next/font/google은 구글 CDN 방식 그대로 한글을 unicode-range 124조각으로 쪼갠다.
  그 결과 빌드 산출물의 @font-face가 373개(= weight 3 x 124)가 되고, 이 선언 더미가
  **렌더 차단 CSS 235KB**를 차지한다. 브라우저는 페이지의 모든 텍스트를 이 373개의
  unicode-range와 대조해야 하므로 Style & Layout이 761~929ms까지 부풀었다.

  라이브 A/B(CPU 4x, Slow 4G, n=4 중앙값):
      현재(438개)          FCP 홈 1,980ms / 블로그 1,748ms
      Noto CSS 제거        FCP 홈 1,300ms / 블로그 1,056ms   (-34% / -40%)
  즉 FCP의 3분의 1이 «폰트 선언 파싱»이었다. 서브셋 1개로 바꾸면 글꼴을 유지한 채
  그 이득을 가져온다.

■ 글자 집합
  KS X 1001 완성형 2,350자 + 사이트에 실제로 등장하는 한글 + 라틴/숫자/기호.
  사이트가 쓰는 1,161자 중 완성형 밖은 단 2자였다 → 완성형이 사실상 전부 덮는다.
  커버리지 밖 글자는 그 글자만 시스템 폰트로 폴백된다(문서 전체가 아니라 글자 단위).

■ 실행
      pip install fonttools brotli
      python scripts/subset-korean-font.py
  결과: app/fonts/noto-sans-kr-{400,700,900}.woff2  (각 ~157KB)

■ 언제 다시 돌리나
  새 언어를 추가하거나 본문에 새 글자군(예: 한자·키릴)을 쓰기 시작했을 때.
  평소 새 포스트 정도로는 다시 돌릴 필요가 없다 — 완성형이 이미 덮고 있다.
"""
import os
import re
import subprocess
import sys
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONT_DIR = os.path.join(ROOT, "app", "fonts")
WEIGHTS = ["400", "700", "900"]
UA_OLD = "Mozilla/4.0"  # 구형 UA로 요청해야 woff2 조각 대신 «통짜 TTF» URL이 온다


def fetch_ttf_urls():
    """Google Fonts CSS API에서 weight별 원본 TTF URL을 얻는다(버전 하드코딩 회피)."""
    url = "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@" + ";".join(WEIGHTS)
    req = urllib.request.Request(url, headers={"User-Agent": UA_OLD})
    css = urllib.request.urlopen(req).read().decode("utf-8")
    out = {}
    for block in css.split("@font-face"):
        w = re.search(r"font-weight:\s*(\d+)", block)
        u = re.search(r"url\((https://[^)]+\.ttf)\)", block)
        if w and u:
            out[w.group(1)] = u.group(1)
    missing = [w for w in WEIGHTS if w not in out]
    if missing:
        sys.exit("TTF URL을 못 찾은 weight: %s" % missing)
    return out


def ks_x_1001():
    """EUC-KR 0xB0A1~0xC8FE = KS X 1001 완성형 2,350자."""
    s = set()
    for hi in range(0xB0, 0xC9):
        for lo in range(0xA1, 0xFF):
            try:
                s.add(bytes([hi, lo]).decode("euc-kr"))
            except UnicodeDecodeError:
                pass
    return {c for c in s if "가" <= c <= "힣"}


def site_hangul():
    """레포 소스에 실제로 등장하는 한글 음절을 긁는다."""
    exts = {".ts", ".tsx", ".md", ".json"}
    skip = {"node_modules", ".next", ".git", "public", ".cursor", "app/fonts"}
    found = set()
    for base, dirs, files in os.walk(ROOT):
        dirs[:] = [d for d in dirs if d not in skip]
        for f in files:
            if os.path.splitext(f)[1] not in exts:
                continue
            try:
                txt = open(os.path.join(base, f), encoding="utf-8").read()
            except (UnicodeDecodeError, OSError):
                continue
            found.update(c for c in txt if "가" <= c <= "힣")
    return found


def common_chars():
    s = set(chr(c) for c in range(0x20, 0x7F))            # ASCII
    s |= set(chr(c) for c in range(0x3131, 0x3164))       # 낱자 자모 (ㄱ ㄴ ㄷ …)
    s |= set(chr(c) for c in range(0xFF01, 0xFF5F))       # 전각
    s |= set("…—–·※★☆♠♥♦♣→←↑↓「」『』【】《》〈〉°％±×÷≤≥≠∞‘’“”₩€£¥©®™")
    return s


def main():
    os.makedirs(FONT_DIR, exist_ok=True)
    chars = ks_x_1001() | site_hangul() | common_chars()
    print("서브셋 글자 수: %d (완성형 %d + 사이트 %d + 기호)"
          % (len(chars), len(ks_x_1001()), len(site_hangul())))

    txt_path = os.path.join(FONT_DIR, "_subset-chars.txt")
    open(txt_path, "w", encoding="utf-8").write("".join(sorted(chars)))

    urls = fetch_ttf_urls()
    total = 0
    for w in WEIGHTS:
        src = os.path.join(FONT_DIR, "_src-%s.ttf" % w)
        if not os.path.exists(src):
            print("  원본 내려받는 중 weight %s …" % w)
            urllib.request.urlretrieve(urls[w], src)
        dst = os.path.join(FONT_DIR, "noto-sans-kr-%s.woff2" % w)
        r = subprocess.run(
            [sys.executable, "-m", "fontTools.subset", src,
             "--text-file=" + txt_path, "--flavor=woff2", "--output-file=" + dst,
             "--layout-features=*", "--no-hinting", "--desubroutinize"],
            capture_output=True, text=True)
        if r.returncode != 0:
            sys.exit("서브셋 실패(weight %s): %s" % (w, r.stderr[:400]))
        kb = os.path.getsize(dst) / 1024
        total += kb
        print("  weight %s → %.1f KB  (원본 %.0f KB)" % (w, kb, os.path.getsize(src) / 1024))
        os.remove(src)  # 6MB 원본은 레포에 남기지 않는다
    os.remove(txt_path)
    print("합계 %.1f KB — 이전 방식은 @font-face 373개 + 실제 전송 397KB였다" % total)


if __name__ == "__main__":
    main()
