// hi 계산기 FAQ — page.tsx(FAQPage JSON-LD)와 CalculatorTool(화면)이 함께 쓴다.
// EN 8문항 재저작(app/en/calculator/faq.ts). 수치는 §13 언어 불변(35% · 19.6% · 23.1% · 3,000 ÷ 13,000 · $397 vs $300 · 33.3% · 16.6% · 13.3% · 40% · 6.7).
export const CALCULATOR_FAQ_HI: { q: string; a: string }[] = [
  {
    q: "ICM कैलकुलेटर कैसे इस्तेमाल करें?",
    a: "खिलाड़ियों की संख्या, हर खिलाड़ी का chip stack और payout structure (पहले से छठे स्थान तक) भरें। कैलकुलेटर तुरंत दिखाता है कि हर stack की prize money में असली कीमत कितनी है — इसे bubble और final table पर call/fold के फ़ैसलों और deal की बातचीत में इस्तेमाल करें।",
  },
  {
    q: "पोकर में ICM क्या है?",
    a: "ICM का पूरा नाम Independent Chip Model है — एक गणितीय मॉडल जो tournament chips को उनकी असली prize-money की उम्मीद में बदलता है। मुख्य बात: chips दोगुने होने से आपकी prize equity दोगुनी नहीं होती।",
  },
  {
    q: "मैं chip leader हूँ — मेरी ICM value मेरे chip share से कम क्यों है?",
    a: "क्योंकि जीतने पर भी सिर्फ़ पहले स्थान का prize मिलता है, पूरा prize pool नहीं। नीचे के bubble उदाहरण में 40% chips वाले leader की ICM value सिर्फ़ 33.3% है (6.7 अंक कम), जबकि सबसे छोटे stack (13.3% chips) की कीमत 16.6% है — उसके chip share से ज़्यादा।",
  },
  {
    q: "ICM (final-table) deal की गणना कैसे करें?",
    a: "बचा हुआ prize money हर खिलाड़ी की ICM value के अनुपात में बाँटा जाता है। मौजूदा stacks और बचे हुए prizes भरने पर यह कैलकुलेटर जो 'ICM value' दिखाता है, वही fair deal की रकम है।",
  },
  {
    q: "Chip chop और ICM deal में क्या फ़र्क़ है?",
    a: "Chip chop prizes को सीधे chip share के हिसाब से बाँटता है, जो chip leader के पक्ष में जाता है। ICM deal हर खिलाड़ी के हर स्थान पर finish करने की संभावना को दर्शाता है, इसलिए short stacks के लिए ज़्यादा fair है। नीचे के उदाहरण में short stack को ICM deal में लगभग $397 मिलते हैं, जबकि chip chop में $300 — short हों तो हमेशा ICM deal माँगें।",
  },
  {
    q: "Bubble पर ज़्यादा fold क्यों करना चाहिए?",
    a: "Bubble पर bust होने से जो ICM value जाती है, वह जीतने से मिलने वाली value से बड़ी होती है। जो call chip EV में फ़ायदेमंद है, वह prize EV (ICM) में नुकसान वाला हो सकता है, इसलिए ख़ास तौर पर बीच के stacks को coin flip से बचना चाहिए।",
  },
  {
    q: "Outs से equity का अंदाज़ा कैसे लगाएँ?",
    a: "अनुमानित प्रतिशत के लिए flop पर outs × 4 और turn पर outs × 2 करें। उदाहरण के लिए, 9 outs वाला flush draw flop पर लगभग 35% और turn पर 19.6% होता है। सटीक आँकड़ों के लिए ऊपर का outs कैलकुलेटर इस्तेमाल करें।",
  },
  {
    q: "Pot odds का formula क्या है?",
    a: "Call की रकम ÷ (pot + call की रकम) = आपको कम से कम जितनी equity चाहिए। उदाहरण के लिए, 10,000 के pot में 3,000 का call 3,000 ÷ 13,000 ≈ 23.1% है, इसलिए आपकी equity 23.1% से ऊपर हो तो call फ़ायदेमंद है।",
  },
];
