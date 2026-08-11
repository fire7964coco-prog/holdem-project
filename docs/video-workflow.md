# 영상 다루기 (ffmpeg 프레임 추출 → Read)

> CLAUDE.md §18에서 분리(2026-08-11). 영상 임베드 작업할 때만 읽는다.

## 18. 영상 다루기 (영상 임베드·분석)

클로드는 영상을 재생하지 못하지만, **ffmpeg으로 프레임을 뽑아 이미지로 Read하면 내용 파악이 가능하다**(클로드는 이미지를 읽을 수 있음). yt-dlp로 영상을 받고 → ffmpeg으로 프레임 추출 → PNG를 Read.

> **도구 확인 필수**: 세션 시작 시 `Get-Command ffmpeg,ffprobe,yt-dlp`(PowerShell)로 설치 여부 확인. **없으면 설치**: `winget install Gyan.FFmpeg` + `winget install yt-dlp.yt-dlp` (또는 yt-dlp는 `pip install yt-dlp`). ⚠️ 2026-07-22 확인 시 이 로컬 머신엔 미설치(winget은 사용 가능). "영상 작업 클로드"가 됐다면 도구가 깔린 다른 환경일 수 있음.

- 영상 받기: `yt-dlp -f "bv*[height<=720]+ba/b[height<=720]" -o 영상.mp4 "URL"`
- 특정 시점 확인: `ffmpeg -ss 30 -i 영상.mp4 -frames:v 1 -vf scale=800:-1 f.png` → PNG를 Read로 읽기
- 여러 시점 한눈에: 프레임 여러 장 뽑아 `hstack`/`vstack`으로 격자 합성 → 읽기 1회로 8~15개 확인
- 대사·소리 위치: `ffmpeg -ss N -t 0.5 -i 영상.mp4 -af volumedetect -f null -` 로 구간별 음량 측정
- 영상 스펙: `ffprobe -v error -show_entries stream=width,height,r_frame_rate -show_entries format=duration ...`

주의: 라이브 방송 소스는 잡음이 계속 깔려 있어 `silencedetect`로 무음 구간이 안 잡힌다. 음량 스캔(volumedetect)을 쓸 것.

> 용도: 자체 유튜브 영상(포커 하이라이트 등)을 포스팅에 임베드(`:::youtube:::` lite-facade, `docs/video-embed-playbook.md`)하기 전, 프레임 분석으로 **장면·타임스탬프·핸드를 확인**해 정확한 분석글을 쓰고 정밀 배치한다.
