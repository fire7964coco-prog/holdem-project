/**
 * `/tr/hand-chart` FAQ — 화면 아코디언과 서버 page.tsx의 FAQPage 스키마가 같은 배열을 쓴다.
 * ★2026-10-06 신설(tr 회차 2). 뜻 정본 = ko `app/hand-chart/faq.ts`(4번은 «타입 %42 vs 콤보 %35,4» 판) · 문안 = ms 판과 같은 명제.
 */
export const HAND_CHART_FAQ_TR: { q: string; a: string }[] = [
  {
    q: "Başlangıç eli tablosuna harfiyen uymalı mıyım?",
    a: "Tablo bir başlangıç noktasıdır. 6-max masada her pozisyonun range'ini 9 kişilik masaya göre bir iki adım gevşet (bir sonraki geç pozisyon gibi oyna). Ante varsa range'in tamamını %5–8 genişlet. Fish'lerin çok olduğu masada daha sıkı oynayıp value'yu büyütmek daha kârlıdır.",
  },
  {
    q: "Pokerde gerçekten tam 169 başlangıç eli mi var?",
    a: "Evet. Renkleri ayırmazsan poker başlangıç eli türü tam 169'dur: 13 pocket pair, 78 suited el ve 78 offsuit el. Gerçek destede kombo sayısı ise 1.326'dır.",
  },
  {
    q: "BB neden tabloda yok?",
    a: "BB zaten 1BB koymuştur; onun için geçerli kavram open-raise değil, «defend»dir (call ya da re-raise). BB'nin defend range'i rakibin pozisyonuna ve açılış boyutuna göre tamamen değişir, bu yüzden ayrı bir tablo ister.",
  },
  {
    q: "Button'dan %42 açmak fazla mı?",
    a: "Önce tabanı eşitle. Bu tablodaki %42, 169 el «türü» içindeki paydır; GTO kaynaklarında geçen %40–50'lik button range'i ise 1.326 «kombo» içindeki paydır. Bu tablonun button range'ini komboya çevirirsen %35,4 çıkar — o GTO aralığından daha dar. Yani sorun %42'nin fazla geniş olması değil; asıl nokta, rakipler sıkı ya da acemiyse premium ellere daha çok odaklanmanın gerçekte daha fazla kazandırmasıdır. Bu tablo dengeli bir strateji için referans noktasıdır.",
  },
  {
    q: "Re-raise (3-bet) yersem ne yapmalıyım?",
    a: "Açılış range'i ile 3-bet'e call range'i farklıdır. Genelde 3-bet'e AA–JJ ve AKs–AQs gibi premium ellerle, bir de az sayıda blöfle (AA ve AK'yı bloklayan, nut flush yapabilen A5s ve A4s gibi suited wheel aslar) karşılık ver. Gerisini fold et.",
  },
];
