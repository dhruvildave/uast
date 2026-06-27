// सखेति मत्वा प्रसभं यदुक्तं हे कृष्ण हे यादव हे सखेति।
// अजानता महिमानं तवेदं मया प्रमादात्प्रणयेन वापि॥
// यच्चावहासार्थमसत्कृतोऽसि विहारशय्यासनभोजनेषु।
// एकोऽथवाप्यच्युत तत्समक्षं तत्क्षामये त्वामहमप्रमेयम्॥

import { convertor as UASTToDevanāgarī } from "./fastpaths/devanāgarī";
import { convertor as DevanāgarīToGu } from "./fastpaths/gu";
import { convertor as DevanāgarīToIAST } from "./fastpaths/iast";
import { convertor as SLPToIAST } from "./fastpaths/slp";

type CharMap = Map<string, string>;

type LangMap = {
  numbers: CharMap;
  vowels: CharMap;
  vowelSigns: CharMap;
  consonants: CharMap;
  misc: CharMap;
};

const langs = ["gu", "sa", "ml", "or", "te", "kn", "ta"] as const;
type LangList = (typeof langs)[number];

type Miscs = "." | ".." | "'" | "om";
type Numbers = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

function checkSymbols<T extends Miscs>(
  obj: Readonly<Record<string, T>>
): [string, T][] {
  return Object.entries(obj);
}

type Vowels =
  | "a"
  | "ā"
  | "i"
  | "ī"
  | "u"
  | "ū"
  | "ṛ"
  | "ṝ"
  | "ḷ"
  | "ḹ"
  | "e"
  | "ai"
  | "o"
  | "au";
type VowelSigns =
  | "a"
  | "ā"
  | "i"
  | "ī"
  | "u"
  | "ū"
  | "ṛ"
  | "ṝ"
  | "ḷ"
  | "ḹ"
  | "e"
  | "ai"
  | "o"
  | "au"
  | "ṃ"
  | "ḥ"
  | "ã"
  | "-";
type Consonants =
  | "k"
  | "kh"
  | "g"
  | "gh"
  | "ṅ"
  | "c"
  | "ch"
  | "j"
  | "jh"
  | "ñ"
  | "ṭ"
  | "ṭh"
  | "ḍ"
  | "ḍh"
  | "ṇ"
  | "t"
  | "th"
  | "d"
  | "dh"
  | "n"
  | "p"
  | "ph"
  | "b"
  | "bh"
  | "m"
  | "y"
  | "r"
  | "l"
  | "v"
  | "ś"
  | "ṣ"
  | "s"
  | "h"
  | "ḻ";

function checkSounds<T extends Vowels | VowelSigns | Consonants | Numbers>(
  obj: Readonly<Record<T, string>>
): [T, string][] {
  return Object.entries(obj) as [T, string][];
}

const charDict: Readonly<Record<LangList, LangMap>> = {
  sa: {
    misc: new Map(
      checkSymbols<Miscs>({
        "।": ".",
        "॥": "..",
        ऽ: "'",
        ॐ: "om"
      })
    ),
    numbers: new Map(
      checkSounds<Numbers>({
        "0": "०",
        "1": "१",
        "2": "२",
        "3": "३",
        "4": "४",
        "5": "५",
        "6": "६",
        "7": "७",
        "8": "८",
        "9": "९"
      })
    ),
    vowels: new Map(
      checkSounds<Vowels>({
        a: "अ",
        ā: "आ",
        i: "इ",
        ī: "ई",
        u: "उ",
        ū: "ऊ",
        ṛ: "ऋ",
        ṝ: "ॠ",
        ḷ: "ऌ",
        ḹ: "ॡ",
        e: "ए",
        ai: "ऐ",
        o: "ओ",
        au: "औ"
      })
    ),
    vowelSigns: new Map(
      checkSounds<VowelSigns>({
        a: "",
        ā: "ा",
        i: "ि",
        ī: "ी",
        u: "ु",
        ū: "ू",
        ṛ: "ृ",
        ṝ: "ॄ",
        ḷ: "ॢ",
        ḹ: "ॣ",
        e: "े",
        ai: "ै",
        o: "ो",
        au: "ौ",
        ṃ: "ं",
        ḥ: "ः",
        ã: "ँ",
        "-": "्"
      })
    ),
    consonants: new Map(
      checkSounds<Consonants>({
        k: "क",
        kh: "ख",
        g: "ग",
        gh: "घ",
        ṅ: "ङ",
        c: "च",
        ch: "छ",
        j: "ज",
        jh: "झ",
        ñ: "ञ",
        ṭ: "ट",
        ṭh: "ठ",
        ḍ: "ड",
        ḍh: "ढ",
        ṇ: "ण",
        t: "त",
        th: "थ",
        d: "द",
        dh: "ध",
        n: "न",
        p: "प",
        ph: "फ",
        b: "ब",
        bh: "भ",
        m: "म",
        y: "य",
        r: "र",
        l: "ल",
        v: "व",
        ś: "श",
        ṣ: "ष",
        s: "स",
        h: "ह",
        ḻ: "ळ"
      })
    )
  },
  gu: {
    misc: new Map(
      checkSymbols<Miscs>({
        "।": ".",
        "॥": "..",
        ઽ: "'",
        ૐ: "om"
      })
    ),
    numbers: new Map(
      checkSounds<Numbers>({
        "0": "૦",
        "1": "૧",
        "2": "૨",
        "3": "૩",
        "4": "૪",
        "5": "૫",
        "6": "૬",
        "7": "૭",
        "8": "૮",
        "9": "૯"
      })
    ),
    vowels: new Map(
      checkSounds<Vowels>({
        a: "અ",
        ā: "આ",
        i: "ઇ",
        ī: "ઈ",
        u: "ઉ",
        ū: "ઊ",
        ṛ: "ઋ",
        ṝ: "ૠ",
        ḷ: "ઌ",
        ḹ: "ૡ",
        e: "એ",
        ai: "ઐ",
        o: "ઓ",
        au: "ઔ"
      })
    ),
    vowelSigns: new Map(
      checkSounds<VowelSigns>({
        a: "",
        ā: "ા",
        i: "િ",
        ī: "ી",
        u: "ુ",
        ū: "ૂ",
        ṛ: "ૃ",
        ṝ: "ૄ",
        ḷ: "ૢ",
        ḹ: "ૣ",
        e: "ે",
        ai: "ૈ",
        o: "ો",
        au: "ૌ",
        ṃ: "ં",
        ḥ: "ઃ",
        ã: "ઁ",
        "-": "્"
      })
    ),
    consonants: new Map(
      checkSounds<Consonants>({
        k: "ક",
        kh: "ખ",
        g: "ગ",
        gh: "ઘ",
        ṅ: "ઙ",
        c: "ચ",
        ch: "છ",
        j: "જ",
        jh: "ઝ",
        ñ: "ઞ",
        ṭ: "ટ",
        ṭh: "ઠ",
        ḍ: "ડ",
        ḍh: "ઢ",
        ṇ: "ણ",
        t: "ત",
        th: "થ",
        d: "દ",
        dh: "ધ",
        n: "ન",
        p: "પ",
        ph: "ફ",
        b: "બ",
        bh: "ભ",
        m: "મ",
        y: "ય",
        r: "ર",
        l: "લ",
        v: "વ",
        ś: "શ",
        ṣ: "ષ",
        s: "સ",
        h: "હ",
        ḻ: "ળ"
      })
    )
  },
  kn: {
    misc: new Map(
      checkSymbols<Miscs>({
        "।": ".",
        "॥": "..",
        ಽ: "'",
        ಓಂ: "om"
      })
    ),
    numbers: new Map(
      checkSounds<Numbers>({
        "0": "೦",
        "1": "೧",
        "2": "೨",
        "3": "೩",
        "4": "೪",
        "5": "೫",
        "6": "೬",
        "7": "೭",
        "8": "೮",
        "9": "೯"
      })
    ),
    vowels: new Map(
      checkSounds<Vowels>({
        a: "ಅ",
        ā: "ಆ",
        i: "ಇ",
        ī: "ಈ",
        u: "ಉ",
        ū: "ಊ",
        ṛ: "ಋ",
        ṝ: "ೠ",
        ḷ: "ಌ",
        ḹ: "ೡ",
        e: "ಎ",
        ai: "ಐ",
        o: "ಒ",
        au: "ಔ"
      })
    ),
    vowelSigns: new Map(
      checkSounds<VowelSigns>({
        a: "",
        ā: "ಾ",
        i: "ಿ",
        ī: "ೀ",
        u: "ು",
        ū: "ೂ",
        ṛ: "ೃ",
        ṝ: "ೄ",
        ḷ: "ೢ",
        ḹ: "ೣ",
        e: "ೆ",
        ai: "ೈ",
        o: "ೊ",
        au: "ೌ",
        ṃ: "ಂ",
        ḥ: "ಃ",
        ã: "ಁ",
        "-": "್"
      })
    ),
    consonants: new Map(
      checkSounds<Consonants>({
        k: "ಕ",
        kh: "ಖ",
        g: "ಗ",
        gh: "ಘ",
        ṅ: "ಙ",
        c: "ಚ",
        ch: "ಛ",
        j: "ಜ",
        jh: "ಝ",
        ñ: "ಞ",
        ṭ: "ಟ",
        ṭh: "ಠ",
        ḍ: "ಡ",
        ḍh: "ಢ",
        ṇ: "ಣ",
        t: "ತ",
        th: "ಥ",
        d: "ದ",
        dh: "ಧ",
        n: "ನ",
        p: "ಪ",
        ph: "ಫ",
        b: "ಬ",
        bh: "ಭ",
        m: "ಮ",
        y: "ಯ",
        r: "ರ",
        l: "ಲ",
        v: "ವ",
        ś: "ಶ",
        ṣ: "ಷ",
        s: "ಸ",
        h: "ಹ",
        ḻ: "ಳ"
      })
    )
  },
  ml: {
    misc: new Map(
      checkSymbols<Miscs>({
        "।": ".",
        "॥": "..",
        ഽ: "'",
        ഓം: "om"
      })
    ),
    numbers: new Map(
      checkSounds<Numbers>({
        "0": "൦",
        "1": "൧",
        "2": "൨",
        "3": "൩",
        "4": "൪",
        "5": "൫",
        "6": "൬",
        "7": "൭",
        "8": "൮",
        "9": "൯"
      })
    ),
    vowels: new Map(
      checkSounds<Vowels>({
        a: "അ",
        ā: "ആ",
        i: "ഇ",
        ī: "ഈ",
        u: "ഉ",
        ū: "ഊ",
        ṛ: "ഋ",
        ṝ: "ൠ",
        ḷ: "ഌ",
        ḹ: "ൡ",
        e: "എ",
        ai: "ഐ",
        o: "ഒ",
        au: "ഔ"
      })
    ),
    vowelSigns: new Map(
      checkSounds<VowelSigns>({
        a: "",
        ā: "ാ",
        i: "ി",
        ī: "ീ",
        u: "ു",
        ū: "ൂ",
        ṛ: "ൃ",
        ṝ: "ൄ",
        ḷ: "ൢ",
        ḹ: "ൣ",
        e: "െ",
        ai: "ൈ",
        o: "ൊ",
        au: "ൗ",
        ṃ: "ം",
        ḥ: "ഃ",
        ã: "ഁ",
        "-": "്"
      })
    ),
    consonants: new Map(
      checkSounds<Consonants>({
        k: "ക",
        kh: "ഖ",
        g: "ഗ",
        gh: "ഘ",
        ṅ: "ങ",
        c: "ച",
        ch: "ഛ",
        j: "ജ",
        jh: "ഝ",
        ñ: "ഞ",
        ṭ: "ട",
        ṭh: "ഠ",
        ḍ: "ഡ",
        ḍh: "ഢ",
        ṇ: "ണ",
        t: "ത",
        th: "ഥ",
        d: "ദ",
        dh: "ധ",
        n: "ന",
        p: "പ",
        ph: "ഫ",
        b: "ബ",
        bh: "ഭ",
        m: "മ",
        y: "യ",
        r: "ര",
        l: "ല",
        v: "വ",
        ś: "ശ",
        ṣ: "ഷ",
        s: "സ",
        h: "ഹ",
        ḻ: "ള"
      })
    )
  },
  or: {
    misc: new Map(
      checkSymbols<Miscs>({
        "।": ".",
        "॥": "..",
        ଽ: "'",
        ଓଁ: "om"
      })
    ),
    numbers: new Map(
      checkSounds<Numbers>({
        "0": "୦",
        "1": "୧",
        "2": "୨",
        "3": "୩",
        "4": "୪",
        "5": "୫",
        "6": "୬",
        "7": "୭",
        "8": "୮",
        "9": "୯"
      })
    ),
    vowels: new Map(
      checkSounds<Vowels>({
        a: "ଅ",
        ā: "ଆ",
        i: "ଇ",
        ī: "ଈ",
        u: "ଉ",
        ū: "ଊ",
        ṛ: "ଋ",
        ṝ: "ୠ",
        ḷ: "ଌ",
        ḹ: "ୡ",
        e: "ଏ",
        ai: "ଐ",
        o: "ଓ",
        au: "ଔ"
      })
    ),
    vowelSigns: new Map(
      checkSounds<VowelSigns>({
        a: "",
        ā: "ା",
        i: "ି",
        ī: "ୀ",
        u: "ୁ",
        ū: "ୂ",
        ṛ: "ୃ",
        ṝ: "ୄ",
        ḷ: "ୢ",
        ḹ: "ୣ",
        e: "େ",
        ai: "ୈ",
        o: "ୋ",
        au: "ୌ",
        ṃ: "ଂ",
        ḥ: "ଃ",
        ã: "ଁ",
        "-": "୍"
      })
    ),
    consonants: new Map(
      checkSounds<Consonants>({
        k: "କ",
        kh: "ଖ",
        g: "ଗ",
        gh: "ଘ",
        ṅ: "ଙ",
        c: "ଚ",
        ch: "ଛ",
        j: "ଜ",
        jh: "ଝ",
        ñ: "ଞ",
        ṭ: "ଟ",
        ṭh: "ଠ",
        ḍ: "ଡ",
        ḍh: "ଢ",
        ṇ: "ଣ",
        t: "ତ",
        th: "ଥ",
        d: "ଦ",
        dh: "ଧ",
        n: "ନ",
        p: "ପ",
        ph: "ଫ",
        b: "ବ",
        bh: "ଭ",
        m: "ମ",
        y: "ୟ",
        r: "ର",
        l: "ଲ",
        v: "ୱ",
        ś: "ଶ",
        ṣ: "ଷ",
        s: "ସ",
        h: "ହ",
        ḻ: "ଳ"
      })
    )
  },
  ta: {
    misc: new Map(
      checkSymbols<Miscs>({
        "।": ".",
        "॥": "..",
        "𑌽": "'",
        "𑍐": "om"
      })
    ),
    numbers: new Map(
      checkSounds<Numbers>({
        "0": "௦",
        "1": "௧",
        "2": "௨",
        "3": "௩",
        "4": "௪",
        "5": "௫",
        "6": "௬",
        "7": "௭",
        "8": "௮",
        "9": "௯"
      })
    ),
    vowels: new Map(
      checkSounds<Vowels>({
        a: "𑌅",
        ā: "𑌆",
        i: "𑌇",
        ī: "𑌈",
        u: "𑌉",
        ū: "𑌊",
        ṛ: "𑌋",
        ṝ: "𑍠",
        ḷ: "𑌌",
        ḹ: "𑍡",
        e: "𑌏",
        ai: "𑌐",
        o: "𑌓",
        au: "𑌔"
      })
    ),
    vowelSigns: new Map(
      checkSounds<VowelSigns>({
        a: "",
        ā: "𑌾",
        i: "𑌿",
        ī: "𑍀",
        u: "𑍁",
        ū: "𑍂",
        ṛ: "𑍃",
        ṝ: "𑍄",
        ḷ: "𑍢",
        ḹ: "𑍣",
        e: "𑍇",
        ai: "𑍈",
        o: "𑍋",
        au: "𑍗",
        ṃ: "𑌂",
        ḥ: "𑌃",
        ã: "𑌁",
        "-": "𑍍"
      })
    ),
    consonants: new Map(
      checkSounds<Consonants>({
        k: "𑌕",
        kh: "𑌖",
        g: "𑌗",
        gh: "𑌘",
        ṅ: "𑌙",
        c: "𑌚",
        ch: "𑌛",
        j: "𑌜",
        jh: "𑌝",
        ñ: "𑌞",
        ṭ: "𑌟",
        ṭh: "𑌠",
        ḍ: "𑌡",
        ḍh: "𑌢",
        ṇ: "𑌣",
        t: "𑌤",
        th: "𑌥",
        d: "𑌦",
        dh: "𑌧",
        n: "𑌨",
        p: "𑌪",
        ph: "𑌫",
        b: "𑌬",
        bh: "𑌭",
        m: "𑌮",
        y: "𑌯",
        r: "𑌰",
        l: "𑌲",
        v: "𑌵",
        ś: "𑌶",
        ṣ: "𑌷",
        s: "𑌸",
        h: "𑌹",
        ḻ: "𑌳"
      })
    )
  },
  te: {
    misc: new Map(
      checkSymbols<Miscs>({
        "।": ".",
        "॥": "..",
        ఽ: "'",
        ఓం: "om"
      })
    ),
    numbers: new Map(
      checkSounds<Numbers>({
        "0": "౦",
        "1": "౧",
        "2": "౨",
        "3": "౩",
        "4": "౪",
        "5": "౫",
        "6": "౬",
        "7": "౭",
        "8": "౮",
        "9": "౯"
      })
    ),
    vowels: new Map(
      checkSounds<Vowels>({
        a: "అ",
        ā: "ఆ",
        i: "ఇ",
        ī: "ఈ",
        u: "ఉ",
        ū: "ఊ",
        ṛ: "ఋ",
        ṝ: "ౠ",
        ḷ: "ఌ",
        ḹ: "ౡ",
        e: "ఎ",
        ai: "ఐ",
        o: "ఒ",
        au: "ఔ"
      })
    ),
    vowelSigns: new Map(
      checkSounds<VowelSigns>({
        a: "",
        ā: "ా",
        i: "ి",
        ī: "ీ",
        u: "ు",
        ū: "ూ",
        ṛ: "ృ",
        ṝ: "ౄ",
        ḷ: "ౢ",
        ḹ: "ౣ",
        e: "ె",
        ai: "ై",
        o: "ొ",
        au: "ౌ",
        ṃ: "ం",
        ḥ: "ః",
        ã: "ఁ",
        "-": "్"
      })
    ),
    consonants: new Map(
      checkSounds<Consonants>({
        k: "క",
        kh: "ఖ",
        g: "గ",
        gh: "ఘ",
        ṅ: "ఙ",
        c: "చ",
        ch: "ఛ",
        j: "జ",
        jh: "ఝ",
        ñ: "ఞ",
        ṭ: "ట",
        ṭh: "ఠ",
        ḍ: "డ",
        ḍh: "ఢ",
        ṇ: "ణ",
        t: "త",
        th: "థ",
        d: "ద",
        dh: "ధ",
        n: "న",
        p: "ప",
        ph: "ఫ",
        b: "బ",
        bh: "భ",
        m: "మ",
        y: "య",
        r: "ర",
        l: "ల",
        v: "వ",
        ś: "శ",
        ṣ: "ష",
        s: "స",
        h: "హ",
        ḻ: "ళ"
      })
    )
  }
};

const unicodeMap: CharMap = new Map([
  ["a", "ā"],
  ["i", "ī"],
  ["u", "ū"],
  ["r", "ṛ"],
  ["ru", "ṝ"],
  ["l", "ḷ"],
  ["lu", "ḹ"],
  ["ll", "ḻ"],
  ["t", "ṭ"],
  ["d", "ḍ"],
  ["m", "ṃ"],
  ["h", "ḥ"],
  ["n", "ñ"],
  ["nu", "ṅ"],
  ["nl", "ṇ"],
  ["su", "ś"],
  ["sl", "ṣ"],
  [".", "।"],
  ["..", "॥"],
  ["au", "ã"]
]);

const devanāgarīDataDict: CharMap = new Map([
  ["क", "k"],
  ["ख", "kh"],
  ["ग", "g"],
  ["घ", "gh"],
  ["ङ", "/nu/"],
  ["च", "c"],
  ["छ", "ch"],
  ["ज", "j"],
  ["झ", "jh"],
  ["ञ", "/n/"],
  ["ट", "/t/"],
  ["ठ", "/t/h"],
  ["ड", "/d/"],
  ["ढ", "/d/h"],
  ["ण", "/nl/"],
  ["त", "t"],
  ["थ", "th"],
  ["द", "d"],
  ["ध", "dh"],
  ["न", "n"],
  ["प", "p"],
  ["फ", "ph"],
  ["ब", "b"],
  ["भ", "bh"],
  ["म", "m"],
  ["य", "y"],
  ["र", "r"],
  ["ल", "l"],
  ["व", "v"],
  ["श", "/su/"],
  ["ष", "/sl/"],
  ["स", "s"],
  ["ह", "h"],
  ["ळ", "/ll/"],

  ["अ", "a"],
  ["आ", "/a/"],
  ["इ", "i"],
  ["ई", "/i/"],
  ["उ", "u"],
  ["ऊ", "/u/"],
  ["ऋ", "/r/"],
  ["ॠ", "/ru/"],
  ["ऌ", "/l/"],
  ["ॡ", "/lu/"],
  ["ए", "e"],
  ["ऐ", "ai"],
  ["ओ", "o"],
  ["औ", "au"],

  ["", "a"],
  ["ा", "/a/"],
  ["ि", "i"],
  ["ी", "/i/"],
  ["ु", "u"],
  ["ू", "/u/"],
  ["ृ", "/r/"],
  ["ॄ", "/ru/"],
  ["ॢ", "/l/"],
  ["ॣ", "/lu/"],
  ["े", "e"],
  ["ै", "ai"],
  ["ो", "o"],
  ["ौ", "au"],
  ["ं", "/m/"],
  ["ः", "/h/"],
  ["ँ", "/au/"],
  ["्", "-"],

  ["ऽ", "\\/'/\\"],
  ["।", "\\/./\\"],
  ["॥", "\\/../\\"],
  ["ॐ", "\\/om/\\"],

  ["०", "\\0\\"],
  ["१", "\\1\\"],
  ["२", "\\2\\"],
  ["३", "\\3\\"],
  ["४", "\\4\\"],
  ["५", "\\5\\"],
  ["६", "\\6\\"],
  ["७", "\\7\\"],
  ["८", "\\8\\"],
  ["९", "\\9\\"]
]);

const iastDataDict: CharMap = new Map([
  ["०", "0"],
  ["१", "1"],
  ["२", "2"],
  ["३", "3"],
  ["४", "4"],
  ["५", "5"],
  ["६", "6"],
  ["७", "7"],
  ["८", "8"],
  ["९", "9"],
  ["ā", "a"],
  ["ī", "i"],
  ["ū", "u"],
  ["ṛ", "r"],
  ["ṝ", "ru"],
  ["ḷ", "l"],
  ["ḹ", "lu"],
  ["ḻ", "ll"],
  ["ṭ", "t"],
  ["ḍ", "d"],
  ["ṃ", "m"],
  ["ḥ", "h"],
  ["ñ", "n"],
  ["ṅ", "nu"],
  ["ṇ", "nl"],
  ["ś", "su"],
  ["ṣ", "sl"],
  ["ऽ", "'"],
  ["।", "."],
  ["॥", ".."],
  ["ॐ", "om"],
  ["ã", "au"]
]);

const unAspiratedConsonants: string[] = [
  "k",
  "g",
  "c",
  "j",
  "t",
  "d",
  "p",
  "b",
  "ṭ",
  "ḍ"
];

const allowedSymbols: string[] = [
  ",",
  "?",
  "!",
  '"',
  "-",
  ":",
  "(",
  ")",
  "=",
  "|"
];

const iastAllowed: string[] = [
  "।",
  "॥",
  "ऽ",
  "ॐ",
  "०",
  "१",
  "२",
  "३",
  "४",
  "५",
  "६",
  "७",
  "८",
  "९",
  "a",
  "ā",
  "i",
  "ī",
  "u",
  "ū",
  "ṛ",
  "ṝ",
  "ḷ",
  "ḹ",
  "e",
  "ai",
  "o",
  "au",
  "ṃ",
  "ḥ",
  "ã",
  "-",
  "k",
  "kh",
  "g",
  "gh",
  "ṅ",
  "c",
  "ch",
  "j",
  "jh",
  "ñ",
  "ṭ",
  "ṭh",
  "ḍ",
  "ḍh",
  "ṇ",
  "t",
  "th",
  "d",
  "dh",
  "n",
  "p",
  "ph",
  "b",
  "bh",
  "m",
  "y",
  "r",
  "l",
  "v",
  "ś",
  "ṣ",
  "s",
  "h",
  "ḻ"
];

/**
 * Function to map special characters to Unicode
 *
 * @param lang input UAST string
 * @returns parsed AnDy output string
 */
function createHandleUnicode(lang: LangList): (uast: string) => string {
  const createScriptMap = (
    obj: Readonly<Record<"om" | "'", string>>
  ): CharMap => new Map(Object.entries(obj));

  let scriptMap: CharMap = createScriptMap({
    om: "ॐ",
    "'": "ऽ"
  });

  switch (lang) {
    case "gu":
      scriptMap = createScriptMap({
        om: "ૐ",
        "'": "ઽ"
      });
      break;

    case "or":
      scriptMap = createScriptMap({
        om: "ଓଁ",
        "'": "ଽ"
      });
      break;

    case "kn":
      scriptMap = createScriptMap({
        om: "ಓಂ",
        "'": "ಽ"
      });
      break;

    case "te":
      scriptMap = createScriptMap({
        "'": "ఽ",
        om: "ఓం"
      });
      break;

    case "ml":
      scriptMap = createScriptMap({
        "'": "ഽ",
        om: "ഓം"
      });
      break;

    case "ta":
      scriptMap = createScriptMap({
        "'": "𑌽",
        om: "𑍐"
      });
      break;

    case "sa":
      break;

    default:
      throw new Error(`Unknown ${lang}`, { cause: lang });
  }

  const scriptDict: CharMap = new Map([...unicodeMap, ...scriptMap]);

  return function handleUnicode(uast: string): string {
    uast = uast.toLowerCase();

    if (uast.startsWith("\\")) {
      uast = uast.slice(1);
    }

    if (uast.endsWith("\\")) {
      uast = uast.slice(0, uast.length - 1);
    }

    const str = Array.from(uast);
    const arr: string[] = [];

    for (let i = 0; i < str.length;) {
      const curr = str.at(i) ?? "";

      if (curr === "/") {
        const char: string[] = [];

        for (let j = i + 1; j < str.length; j++) {
          const curr = str.at(j) ?? "";

          if (curr === "/") {
            i = j;
            break;
          }

          if (j === str.length - 1) {
            i = j;
          }

          char.push(curr);
        }

        arr.push(scriptDict.get(char.join("")) ?? "");
        i++;
        continue;
      }

      arr.push(curr);
      i++;
    }

    return arr.join("").normalize();
  };
}

function createScriptFunction(lang: LangList): (data: string) => string {
  const createScriptDict = (
    obj: Readonly<
      Record<
        string,
        | "।"
        | "॥"
        | "ऽ"
        | "ओम्"
        | "०"
        | "१"
        | "२"
        | "३"
        | "४"
        | "५"
        | "६"
        | "७"
        | "८"
        | "९"
        | "अ"
        | "आ"
        | "इ"
        | "ई"
        | "उ"
        | "ऊ"
        | "ऋ"
        | "ॠ"
        | "ऌ"
        | "ॡ"
        | "ए"
        | "ऐ"
        | "ओ"
        | "औ"
        | "ा"
        | "ि"
        | "ी"
        | "ु"
        | "ू"
        | "ृ"
        | "ॄ"
        | "ॢ"
        | "ॣ"
        | "े"
        | "ै"
        | "ो"
        | "ौ"
        | "ं"
        | "ः"
        | "ँ"
        | "्"
        | "क"
        | "ख"
        | "ग"
        | "घ"
        | "ङ"
        | "च"
        | "छ"
        | "ज"
        | "झ"
        | "ञ"
        | "ट"
        | "ठ"
        | "ड"
        | "ढ"
        | "ण"
        | "त"
        | "थ"
        | "द"
        | "ध"
        | "न"
        | "प"
        | "फ"
        | "ब"
        | "भ"
        | "म"
        | "य"
        | "र"
        | "ल"
        | "व"
        | "श"
        | "ष"
        | "स"
        | "ह"
        | "ळ"
      >
    >
  ): CharMap => new Map(Object.entries(obj));

  let obj: CharMap;

  switch (lang) {
    case "gu":
      obj = createScriptDict({
        "।": "।",
        "॥": "॥",
        ઽ: "ऽ",
        ૐ: "ओम्",
        "૦": "०",
        "૧": "१",
        "૨": "२",
        "૩": "३",
        "૪": "४",
        "૫": "५",
        "૬": "६",
        "૭": "७",
        "૮": "८",
        "૯": "९",
        અ: "अ",
        આ: "आ",
        ઇ: "इ",
        ઈ: "ई",
        ઉ: "उ",
        ઊ: "ऊ",
        ઋ: "ऋ",
        ૠ: "ॠ",
        ઌ: "ऌ",
        ૡ: "ॡ",
        એ: "ए",
        ઐ: "ऐ",
        ઓ: "ओ",
        ઔ: "औ",
        "ા": "ा",
        "િ": "ि",
        "ી": "ी",
        "ુ": "ु",
        "ૂ": "ू",
        "ૃ": "ृ",
        "ૄ": "ॄ",
        "ૢ": "ॢ",
        "ૣ": "ॣ",
        "ે": "े",
        "ૈ": "ै",
        "ો": "ो",
        "ૌ": "ौ",
        "ં": "ं",
        "ઃ": "ः",
        "ઁ": "ँ",
        "્": "्",
        ક: "क",
        ખ: "ख",
        ગ: "ग",
        ઘ: "घ",
        ઙ: "ङ",
        ચ: "च",
        છ: "छ",
        જ: "ज",
        ઝ: "झ",
        ઞ: "ञ",
        ટ: "ट",
        ઠ: "ठ",
        ડ: "ड",
        ઢ: "ढ",
        ણ: "ण",
        ત: "त",
        થ: "थ",
        દ: "द",
        ધ: "ध",
        ન: "न",
        પ: "प",
        ફ: "फ",
        બ: "ब",
        ભ: "भ",
        મ: "म",
        ય: "य",
        ર: "र",
        લ: "ल",
        વ: "व",
        શ: "श",
        ષ: "ष",
        સ: "स",
        હ: "ह",
        ળ: "ळ"
      });
      break;

    case "or":
      obj = createScriptDict({
        "।": "।",
        "॥": "॥",
        ଽ: "ऽ",
        ଓଁ: "ओम्",
        "୦": "०",
        "୧": "१",
        "୨": "२",
        "୩": "३",
        "୪": "४",
        "୫": "५",
        "୬": "६",
        "୭": "७",
        "୮": "८",
        "୯": "९",
        ଅ: "अ",
        ଆ: "आ",
        ଇ: "इ",
        ଈ: "ई",
        ଉ: "उ",
        ଊ: "ऊ",
        ଋ: "ऋ",
        ୠ: "ॠ",
        ଌ: "ऌ",
        ୡ: "ॡ",
        ଏ: "ए",
        ଐ: "ऐ",
        ଓ: "ओ",
        ଔ: "औ",
        "ା": "ा",
        "ି": "ि",
        "ୀ": "ी",
        "ୁ": "ु",
        "ୂ": "ू",
        "ୃ": "ृ",
        "ୄ": "ॄ",
        "ୢ": "ॢ",
        "ୣ": "ॣ",
        "େ": "े",
        "ୈ": "ै",
        "ୋ": "ो",
        "ୌ": "ौ",
        "ଂ": "ं",
        "ଃ": "ः",
        "ଁ": "ँ",
        "୍": "्",
        କ: "क",
        ଖ: "ख",
        ଗ: "ग",
        ଘ: "घ",
        ଙ: "ङ",
        ଚ: "च",
        ଛ: "छ",
        ଜ: "ज",
        ଝ: "झ",
        ଞ: "ञ",
        ଟ: "ट",
        ଠ: "ठ",
        ଡ: "ड",
        ଢ: "ढ",
        ଣ: "ण",
        ତ: "त",
        ଥ: "थ",
        ଦ: "द",
        ଧ: "ध",
        ନ: "न",
        ପ: "प",
        ଫ: "फ",
        ବ: "ब",
        ଭ: "भ",
        ମ: "म",
        ୟ: "य",
        ର: "र",
        ଲ: "ल",
        ୱ: "व",
        ଶ: "श",
        ଷ: "ष",
        ସ: "स",
        ହ: "ह",
        ଳ: "ळ"
      });
      break;

    case "kn":
      obj = createScriptDict({
        "।": "।",
        "॥": "॥",
        ಽ: "ऽ",
        ಓಂ: "ओम्",
        "೦": "०",
        "೧": "१",
        "೨": "२",
        "೩": "३",
        "೪": "४",
        "೫": "५",
        "೬": "६",
        "೭": "७",
        "೮": "८",
        "೯": "९",
        ಅ: "अ",
        ಆ: "आ",
        ಇ: "इ",
        ಈ: "ई",
        ಉ: "उ",
        ಊ: "ऊ",
        ಋ: "ऋ",
        ೠ: "ॠ",
        ಌ: "ऌ",
        ೡ: "ॡ",
        ಎ: "ए",
        ಐ: "ऐ",
        ಒ: "ओ",
        ಔ: "औ",
        "ಾ": "ा",
        "ಿ": "ि",
        "ೀ": "ी",
        "ು": "ु",
        "ೂ": "ू",
        "ೃ": "ृ",
        "ೄ": "ॄ",
        "ೢ": "ॢ",
        "ೣ": "ॣ",
        "ೆ": "े",
        "ೈ": "ै",
        "ೊ": "ो",
        "ೌ": "ौ",
        "ಂ": "ं",
        "ಃ": "ः",
        "ಁ": "ँ",
        "್": "्",
        ಕ: "क",
        ಖ: "ख",
        ಗ: "ग",
        ಘ: "घ",
        ಙ: "ङ",
        ಚ: "च",
        ಛ: "छ",
        ಜ: "ज",
        ಝ: "झ",
        ಞ: "ञ",
        ಟ: "ट",
        ಠ: "ठ",
        ಡ: "ड",
        ಢ: "ढ",
        ಣ: "ण",
        ತ: "त",
        ಥ: "थ",
        ದ: "द",
        ಧ: "ध",
        ನ: "न",
        ಪ: "प",
        ಫ: "फ",
        ಬ: "ब",
        ಭ: "भ",
        ಮ: "म",
        ಯ: "य",
        ರ: "र",
        ಲ: "ल",
        ವ: "व",
        ಶ: "श",
        ಷ: "ष",
        ಸ: "स",
        ಹ: "ह",
        ಳ: "ळ"
      });
      break;

    case "te":
      obj = createScriptDict({
        "।": "।",
        "॥": "॥",
        ఽ: "ऽ",
        ఓం: "ओम्",
        "౦": "०",
        "౧": "१",
        "౨": "२",
        "౩": "३",
        "౪": "४",
        "౫": "५",
        "౬": "६",
        "౭": "७",
        "౮": "८",
        "౯": "९",
        అ: "अ",
        ఆ: "आ",
        ఇ: "इ",
        ఈ: "ई",
        ఉ: "उ",
        ఊ: "ऊ",
        ఋ: "ऋ",
        ౠ: "ॠ",
        ఌ: "ऌ",
        ౡ: "ॡ",
        ఎ: "ए",
        ఐ: "ऐ",
        ఒ: "ओ",
        ఔ: "औ",
        "ా": "ा",
        "ి": "ि",
        "ీ": "ी",
        "ు": "ु",
        "ూ": "ू",
        "ృ": "ृ",
        "ౄ": "ॄ",
        "ౢ": "ॢ",
        "ౣ": "ॣ",
        "ె": "े",
        "ై": "ै",
        "ొ": "ो",
        "ౌ": "ौ",
        "ం": "ं",
        "ః": "ः",
        "ఁ": "ँ",
        "్": "्",
        క: "क",
        ఖ: "ख",
        గ: "ग",
        ఘ: "घ",
        ఙ: "ङ",
        చ: "च",
        ఛ: "छ",
        జ: "ज",
        ఝ: "झ",
        ఞ: "ञ",
        ట: "ट",
        ఠ: "ठ",
        డ: "ड",
        ఢ: "ढ",
        ణ: "ण",
        త: "त",
        థ: "थ",
        ద: "द",
        ధ: "ध",
        న: "न",
        ప: "प",
        ఫ: "फ",
        బ: "ब",
        భ: "भ",
        మ: "म",
        య: "य",
        ర: "र",
        ల: "ल",
        వ: "व",
        శ: "श",
        ష: "ष",
        స: "स",
        హ: "ह",
        ళ: "ळ"
      });
      break;

    case "ml":
      obj = createScriptDict({
        "।": "।",
        "॥": "॥",
        ഽ: "ऽ",
        ഓം: "ओम्",
        "൦": "०",
        "൧": "१",
        "൨": "२",
        "൩": "३",
        "൪": "४",
        "൫": "५",
        "൬": "६",
        "൭": "७",
        "൮": "८",
        "൯": "९",
        അ: "अ",
        ആ: "आ",
        ഇ: "इ",
        ഈ: "ई",
        ഉ: "उ",
        ഊ: "ऊ",
        ഋ: "ऋ",
        ൠ: "ॠ",
        ഌ: "ऌ",
        ൡ: "ॡ",
        എ: "ए",
        ഐ: "ऐ",
        ഒ: "ओ",
        ഔ: "औ",
        "ാ": "ा",
        "ി": "ि",
        "ീ": "ी",
        "ു": "ु",
        "ൂ": "ू",
        "ൃ": "ृ",
        "ൄ": "ॄ",
        "ൢ": "ॢ",
        "ൣ": "ॣ",
        "െ": "े",
        "ൈ": "ै",
        "ൊ": "ो",
        "ൗ": "ौ",
        "ം": "ं",
        "ഃ": "ः",
        "ഁ": "ँ",
        "്": "्",
        ക: "क",
        ഖ: "ख",
        ഗ: "ग",
        ഘ: "घ",
        ങ: "ङ",
        ച: "च",
        ഛ: "छ",
        ജ: "ज",
        ഝ: "झ",
        ഞ: "ञ",
        ട: "ट",
        ഠ: "ठ",
        ഡ: "ड",
        ഢ: "ढ",
        ണ: "ण",
        ത: "त",
        ഥ: "थ",
        ദ: "द",
        ധ: "ध",
        ന: "न",
        പ: "प",
        ഫ: "फ",
        ബ: "ब",
        ഭ: "भ",
        മ: "म",
        യ: "य",
        ര: "र",
        ല: "ल",
        വ: "व",
        ശ: "श",
        ഷ: "ष",
        സ: "स",
        ഹ: "ह",
        ള: "ळ"
      });
      break;

    case "ta":
      obj = createScriptDict({
        "।": "।",
        "॥": "॥",
        "𑌽": "ऽ",
        "𑍐": "ओम्",
        "௦": "०",
        "௧": "१",
        "௨": "२",
        "௩": "३",
        "௪": "४",
        "௫": "५",
        "௬": "६",
        "௭": "७",
        "௮": "८",
        "௯": "९",
        "𑌅": "अ",
        "𑌆": "आ",
        "𑌇": "इ",
        "𑌈": "ई",
        "𑌉": "उ",
        "𑌊": "ऊ",
        "𑌋": "ऋ",
        "𑍠": "ॠ",
        "𑌌": "ऌ",
        "𑍡": "ॡ",
        "𑌏": "ए",
        "𑌐": "ऐ",
        "𑌓": "ओ",
        "𑌔": "औ",
        "𑌾": "ा",
        "𑌿": "ि",
        "𑍀": "ी",
        "𑍁": "ु",
        "𑍂": "ू",
        "𑍃": "ृ",
        "𑍄": "ॄ",
        "𑍢": "ॢ",
        "𑍣": "ॣ",
        "𑍇": "े",
        "𑍈": "ै",
        "𑍋": "ो",
        "𑍗": "ौ",
        "𑌂": "ं",
        "𑌃": "ः",
        "𑌁": "ँ",
        "𑍍": "्",
        "𑌕": "क",
        "𑌖": "ख",
        "𑌗": "ग",
        "𑌘": "घ",
        "𑌙": "ङ",
        "𑌚": "च",
        "𑌛": "छ",
        "𑌜": "ज",
        "𑌝": "झ",
        "𑌞": "ञ",
        "𑌟": "ट",
        "𑌠": "ठ",
        "𑌡": "ड",
        "𑌢": "ढ",
        "𑌣": "ण",
        "𑌤": "त",
        "𑌥": "थ",
        "𑌦": "द",
        "𑌧": "ध",
        "𑌨": "न",
        "𑌪": "प",
        "𑌫": "फ",
        "𑌬": "ब",
        "𑌭": "भ",
        "𑌮": "म",
        "𑌯": "य",
        "𑌰": "र",
        "𑌲": "ल",
        "𑌵": "व",
        "𑌶": "श",
        "𑌷": "ष",
        "𑌸": "स",
        "𑌹": "ह",
        "𑌳": "ळ"
      });
      break;

    case "sa":
      obj = new Map();
      break;

    default:
      throw new Error(`Unknown ${lang}`, { cause: lang });
  }

  return function scriptToDevanāgarī(data: string): string {
    return Array.from(data.normalize(), i =>
      obj.has(i) ? obj.get(i)
      : allowedSymbols.includes(i) ? i
      : ""
    )
      .join("")
      .normalize();
  };
}

/**
 * Convert AnDy to IAST
 *
 * @param data Parsed AnDy string
 * @returns IAST string
 */
function dataToIAST(data: string): string {
  return data
    .normalize()
    .replaceAll(/[\[\]\{\}^~@#$%\&*_.<>\n\v\t\r\f]/gv, "")
    .split("\\")
    .map(split => {
      if (charDict["sa"]["numbers"].has(split)) {
        return split;
      }

      if (charDict["sa"]["misc"].has(split)) {
        return charDict["sa"]["misc"].get(split);
      }

      if (split === "ḥ" || split === "ṃ" || split === "ã") {
        return split;
      }

      const str = Array.from(split);

      const arr: string[] = [];

      for (let i = 0; i < str.length;) {
        const curr = str.at(i) ?? "";

        if (curr === "'") {
          // arr.push("॑");
          i++;
          continue;
        }

        if (curr === "`") {
          // arr.push("॒");
          i++;
          continue;
        }

        if (allowedSymbols.includes(curr)) {
          arr.push(curr);
          i++;
          continue;
        }

        const next = str.at(i + 1) ?? "";

        if (next === "ḥ" || next === "ṃ" || next === "ã") {
          if (charDict["sa"]["consonants"].has(curr)) {
            arr.push(`${curr}a${next}`);
          } else {
            arr.push(`${curr}${next}`);
          }

          i += 2;
          continue;
        }

        if (charDict["sa"]["vowels"].has(curr)) {
          arr.push(curr);
          i++;

          continue;
        }

        if (i === str.length - 1) {
          if (curr === "ḥ" || curr === "ṃ" || curr === "ã") {
            arr.push(curr);
            i++;
            continue;
          }

          arr.push(`${curr}a`);
          i++;
          continue;
        }

        if (next === "h" && unAspiratedConsonants.includes(curr)) {
          const last = str.at(i + 2) ?? "";
          if (charDict["sa"]["vowelSigns"].has(last) === false) {
            arr.push(`${curr}${next}a`);
            i += 2;
            continue;
          }

          if (last === "ḥ" || last === "ṃ" || last === "ã") {
            arr.push(`${curr}${next}a${last}`);
            i += 3;
            continue;
          }

          if (last === "-") {
            i += 3;
          } else {
            i += 2;
          }
          arr.push(`${curr}${next}`);

          continue;
        }

        if (next === "-") {
          arr.push(curr);
          i += 2;
          continue;
        }

        if (charDict["sa"]["vowelSigns"].has(next)) {
          arr.push(curr);
          i++;
          continue;
        }

        if (curr === "ḥ" || curr === "ṃ" || curr === "ã") {
          arr.push(curr);
          i++;
          continue;
        }

        if (!iastAllowed.includes(curr)) {
          i++;
          continue;
        }

        arr.push(`${curr}a`);
        i++;
      }

      return arr.join("");
    })
    .join("")
    .normalize();
}

/**
 * Convert IAST to UAST
 *
 * @param data IAST string
 * @returns UAST string
 */
function iastToUAST(data: string): string {
  const str = Array.from(
    data.normalize().replaceAll(/[\[\]\{\}^~@#$%\&*\-_<>]/gv, "")
  );
  const arr: string[] = [];

  for (let i = 0; i < str.length;) {
    const curr = str.at(i) ?? "";
    const next = str.at(i + 1) ?? "";

    if (charDict["sa"]["consonants"].has(curr)) {
      if (unAspiratedConsonants.includes(curr)) {
        if (next === "a" && (str.at(i + 2) ?? "") === "h") {
          arr.push(`${curr}a\\`);
          i += 2;
          continue;
        }

        if (next === "h") {
          let last = str.at(i + 2) ?? "";
          if (charDict["sa"]["consonants"].has(last)) {
            arr.push(`${curr}${next}-`);
            i += 2;
            continue;
          }

          if (last === "a") {
            last = str.at(i + 3) ?? "";
            if (last === "i" || last === "u") {
              arr.push(`${curr}${next}a${last}`);
              i += 4;
              continue;
            }
            i += 3;
          } else {
            i += 2;
          }

          arr.push(`${curr}${next}`);

          continue;
        }
      }

      if (next === "a") {
        const last = str.at(i + 2) ?? "";
        if (last === "i" || last === "u") {
          arr.push(`${curr}a${last}`);
          i += 3;
          continue;
        }

        arr.push(curr);
        i += 2;
        continue;
      }

      if (
        charDict["sa"]["consonants"].has(next) ||
        [".", "..", "'"].includes(next) ||
        i === str.length - 1
      ) {
        arr.push(`${curr}-`);
        i++;
        continue;
      }

      if (next === "ã") {
        arr.push(`${curr}-`, "ã");
        i += 2;
        continue;
      }

      arr.push(curr);
      i++;
      continue;
    }

    if (curr === "a" && (next === "i" || next === "u")) {
      arr.push(`${curr}${next}\\`);
      i += 2;
      continue;
    }

    if (
      charDict["sa"]["vowels"].has(curr) &&
      charDict["sa"]["consonants"].has(next)
    ) {
      arr.push(`${curr}\\`);
      i++;
      continue;
    }

    arr.push(curr);
    i++;
  }

  let ans: string[] = [];

  for (let k = 0; k < arr.length; k++) {
    let curr = arr.at(k) ?? "";

    const hasDash = curr.includes("-");

    curr = curr.replaceAll(/[\\-]/gu, "");
    for (const j of [".", "'"]) {
      if (curr === "." && arr.at(k + 1) === ".") {
        curr = curr.replaceAll(curr, "\\/../\\");
        k++;
        continue;
      }

      curr = curr.replaceAll(j, `\\/${j}/\\`);
    }

    for (const j of charDict["sa"]["numbers"].keys()) {
      curr = curr.replaceAll(j, `\\${j}\\`);
    }

    if (unAspiratedConsonants.includes(curr) && (arr.at(k + 1) ?? "") === "h") {
      curr += "a";
    }

    if (hasDash) {
      curr += "-";
    }

    if (charDict["sa"]["vowels"].has(curr)) {
      curr += "\\";
    }

    ans.push(curr);
  }

  if (
    charDict["sa"]["consonants"].has(ans.at(-1) ?? "") &&
    (str.at(-1) ?? "") !== "a"
  ) {
    ans.push("-");
  }

  return Array.from(ans.join(""), i =>
    iastDataDict.has(i) ? `/${iastDataDict.get(i)}/` : i
  )
    .join("")
    .normalize();
}

/**
 * Function to create the function of parser
 *
 * @param lang Language to choose as renderer
 * @returns Function that can parse the `lang`
 */
function createDataFunction(lang: LangList): (data: string) => string {
  const obj = charDict[lang] ?? new Error(`Unknown: ${lang}`, { cause: lang });

  return function dataToScript(data: string): string {
    return data
      .split("\\")
      .map(split => {
        if (obj["misc"].has(split)) {
          return split;
        }

        if (obj["numbers"].has(split)) {
          return obj["numbers"].get(split);
        }

        if (obj["vowels"].has(split)) {
          return obj["vowels"].get(split);
        }

        const arr: string[] = [];

        const str = Array.from(split);

        for (let i = 0; i < str.length;) {
          const curr = str.at(i) ?? "";

          if (lang === "sa") {
            if (curr === "'") {
              arr.push("॑");
              i++;
              continue;
            }

            if (curr === "`") {
              arr.push("॒");
              i++;
              continue;
            }
          }

          if ([",", ";", "?", "!", '"', ":", "(", ")", "="].includes(curr)) {
            arr.push(curr);
            i++;
            continue;
          }

          if (unAspiratedConsonants.includes(curr)) {
            let consonant: string = "";
            if (str.at(i + 1) === "h") {
              consonant = str.slice(i, i + 2).join("");
              i += 2;
            } else {
              consonant = curr;
              i++;
            }
            arr.push(obj["consonants"].get(consonant) ?? "");

            continue;
          }

          arr.push(obj["consonants"].get(curr) ?? "");

          let vowel: string = "";
          if (
            curr === "a" &&
            (str.at(i + 1) === "i" || str.at(i + 1) === "u")
          ) {
            vowel = str.slice(i, i + 2).join("");
            i += 2;
          } else {
            vowel = curr;
            i++;
          }

          arr.push(obj["vowelSigns"].get(vowel) ?? "");
        }

        return arr.join("");
      })
      .join("")
      .normalize();
  };
}

/**
 * Convert देवनागरी to UAST
 *
 * @param data देवनागरी string
 * @returns UAST string
 */
function devanāgarīToUAST(data: string): string {
  const str = Array.from(data.normalize());
  const arr: string[] = [];

  for (let i = 0; i < str.length; i++) {
    const curr = str.at(i) ?? "";
    const next = str.at(i + 1) ?? "";

    if (curr === "॑") {
      arr.push("\\'");
      continue;
    }

    if (curr === "॒") {
      arr.push("\\`");
      continue;
    }

    const val = devanāgarīDataDict.get(curr) ?? curr;
    const next_val = devanāgarīDataDict.get(next) ?? next;

    if (
      [...charDict["sa"]["vowels"].values()].includes(curr) &&
      [...charDict["sa"]["consonants"].values()].includes(next)
    ) {
      arr.push(`${val}\\`);
      continue;
    }

    if (unAspiratedConsonants.includes(val) && next_val === "h") {
      arr.push(`${val}a`);
      continue;
    }

    arr.push(val);
  }

  return arr.join("").normalize();
}

type FuncList = "handleUnicode" | "dataFunction" | "scriptToDevanāgarī";

type Builder = {
  [k in LangList]: {
    [f in FuncList]: ReturnType<
      typeof createDataFunction &
        typeof createHandleUnicode &
        typeof createScriptFunction
    >;
  };
};

const builderFuncs: Builder = (() => {
  const y: Partial<Builder> = {};
  for (const l of langs) {
    y[l] = {
      dataFunction: createDataFunction(l),
      handleUnicode: createHandleUnicode(l),
      scriptToDevanāgarī: createScriptFunction(l)
    };
  }

  return y as Required<Builder>;
})();

export const convertor: {
  readonly [from: string]: {
    readonly [to: string]: readonly ((data: string) => string)[];
  };
} = {
  uast: {
    iast: [builderFuncs["sa"]["handleUnicode"], dataToIAST],
    devanāgarī: [
      builderFuncs["sa"]["handleUnicode"],
      builderFuncs["sa"]["dataFunction"]
    ],
    gu: [
      builderFuncs["gu"]["handleUnicode"],
      builderFuncs["gu"]["dataFunction"]
    ],
    or: [
      builderFuncs["or"]["handleUnicode"],
      builderFuncs["or"]["dataFunction"]
    ],
    kn: [
      builderFuncs["kn"]["handleUnicode"],
      builderFuncs["kn"]["dataFunction"]
    ],
    te: [
      builderFuncs["te"]["handleUnicode"],
      builderFuncs["te"]["dataFunction"]
    ],
    ml: [
      builderFuncs["ml"]["handleUnicode"],
      builderFuncs["ml"]["dataFunction"]
    ],
    ta: [
      builderFuncs["ta"]["handleUnicode"],
      builderFuncs["ta"]["dataFunction"]
    ]
  },
  "uast-io": {
    iast: [builderFuncs["sa"]["handleUnicode"]],
    devanāgarī: [UASTToDevanāgarī],
    uast: [builderFuncs["sa"]["handleUnicode"], iastToUAST],
    gu: [UASTToDevanāgarī, DevanāgarīToGu],
    or: [
      builderFuncs["or"]["handleUnicode"],
      iastToUAST,
      builderFuncs["or"]["handleUnicode"],
      builderFuncs["or"]["dataFunction"]
    ],
    kn: [
      builderFuncs["kn"]["handleUnicode"],
      iastToUAST,
      builderFuncs["kn"]["handleUnicode"],
      builderFuncs["kn"]["dataFunction"]
    ],
    te: [
      builderFuncs["te"]["handleUnicode"],
      iastToUAST,
      builderFuncs["te"]["handleUnicode"],
      builderFuncs["te"]["dataFunction"]
    ],
    ml: [
      builderFuncs["ml"]["handleUnicode"],
      iastToUAST,
      builderFuncs["ml"]["handleUnicode"],
      builderFuncs["ml"]["dataFunction"]
    ],
    ta: [
      builderFuncs["ta"]["handleUnicode"],
      iastToUAST,
      builderFuncs["ta"]["handleUnicode"],
      builderFuncs["ta"]["dataFunction"]
    ]
  },
  slp: {
    iast: [SLPToIAST],
    uast: [SLPToIAST, iastToUAST],
    devanāgarī: [SLPToIAST, UASTToDevanāgarī],
    gu: [SLPToIAST, UASTToDevanāgarī, DevanāgarīToGu],
    or: [
      SLPToIAST,
      iastToUAST,
      builderFuncs["or"]["handleUnicode"],
      builderFuncs["or"]["dataFunction"]
    ],
    kn: [
      SLPToIAST,
      iastToUAST,
      builderFuncs["kn"]["handleUnicode"],
      builderFuncs["kn"]["dataFunction"]
    ],
    te: [
      SLPToIAST,
      iastToUAST,
      builderFuncs["te"]["handleUnicode"],
      builderFuncs["te"]["dataFunction"]
    ],
    ml: [
      SLPToIAST,
      iastToUAST,
      builderFuncs["ml"]["handleUnicode"],
      builderFuncs["ml"]["dataFunction"]
    ],
    ta: [
      SLPToIAST,
      iastToUAST,
      builderFuncs["ta"]["handleUnicode"],
      builderFuncs["ta"]["dataFunction"]
    ]
  },
  devanāgarī: {
    uast: [devanāgarīToUAST],
    iast: [DevanāgarīToIAST],
    gu: [DevanāgarīToGu],
    or: [
      devanāgarīToUAST,
      builderFuncs["or"]["handleUnicode"],
      builderFuncs["or"]["dataFunction"]
    ],
    kn: [
      devanāgarīToUAST,
      builderFuncs["kn"]["handleUnicode"],
      builderFuncs["kn"]["dataFunction"]
    ],
    te: [
      devanāgarīToUAST,
      builderFuncs["te"]["handleUnicode"],
      builderFuncs["te"]["dataFunction"]
    ],
    ml: [
      devanāgarīToUAST,
      builderFuncs["ml"]["handleUnicode"],
      builderFuncs["ml"]["dataFunction"]
    ],
    ta: [
      devanāgarīToUAST,
      builderFuncs["ta"]["handleUnicode"],
      builderFuncs["ta"]["dataFunction"]
    ]
  },
  iast: {
    uast: [iastToUAST],
    devanāgarī: [UASTToDevanāgarī],
    gu: [UASTToDevanāgarī, DevanāgarīToGu],
    or: [
      iastToUAST,
      builderFuncs["or"]["handleUnicode"],
      builderFuncs["or"]["dataFunction"]
    ],
    kn: [
      iastToUAST,
      builderFuncs["kn"]["handleUnicode"],
      builderFuncs["kn"]["dataFunction"]
    ],
    te: [
      iastToUAST,
      builderFuncs["te"]["handleUnicode"],
      builderFuncs["te"]["dataFunction"]
    ],
    ml: [
      iastToUAST,
      builderFuncs["ml"]["handleUnicode"],
      builderFuncs["ml"]["dataFunction"]
    ],
    ta: [
      iastToUAST,
      builderFuncs["ta"]["handleUnicode"],
      builderFuncs["ta"]["dataFunction"]
    ]
  },
  gu: {
    devanāgarī: [builderFuncs["gu"]["scriptToDevanāgarī"]],
    uast: [builderFuncs["gu"]["scriptToDevanāgarī"], devanāgarīToUAST],
    iast: [builderFuncs["gu"]["scriptToDevanāgarī"], DevanāgarīToIAST],
    or: [
      builderFuncs["gu"]["scriptToDevanāgarī"],
      devanāgarīToUAST,
      builderFuncs["or"]["handleUnicode"],
      builderFuncs["or"]["dataFunction"]
    ],
    kn: [
      builderFuncs["gu"]["scriptToDevanāgarī"],
      devanāgarīToUAST,
      builderFuncs["kn"]["handleUnicode"],
      builderFuncs["kn"]["dataFunction"]
    ],
    te: [
      builderFuncs["gu"]["scriptToDevanāgarī"],
      devanāgarīToUAST,
      builderFuncs["te"]["handleUnicode"],
      builderFuncs["te"]["dataFunction"]
    ],
    ml: [
      builderFuncs["gu"]["scriptToDevanāgarī"],
      devanāgarīToUAST,
      builderFuncs["ml"]["handleUnicode"],
      builderFuncs["ml"]["dataFunction"]
    ],
    ta: [
      builderFuncs["gu"]["scriptToDevanāgarī"],
      devanāgarīToUAST,
      builderFuncs["ta"]["handleUnicode"],
      builderFuncs["ta"]["dataFunction"]
    ]
  },
  or: {
    devanāgarī: [builderFuncs["or"]["scriptToDevanāgarī"]],
    uast: [builderFuncs["or"]["scriptToDevanāgarī"], devanāgarīToUAST],
    iast: [builderFuncs["or"]["scriptToDevanāgarī"], DevanāgarīToIAST],
    gu: [builderFuncs["or"]["scriptToDevanāgarī"], DevanāgarīToGu],
    kn: [
      builderFuncs["or"]["scriptToDevanāgarī"],
      devanāgarīToUAST,
      builderFuncs["kn"]["handleUnicode"],
      builderFuncs["kn"]["dataFunction"]
    ],
    te: [
      builderFuncs["or"]["scriptToDevanāgarī"],
      devanāgarīToUAST,
      builderFuncs["te"]["handleUnicode"],
      builderFuncs["te"]["dataFunction"]
    ],
    ml: [
      builderFuncs["or"]["scriptToDevanāgarī"],
      devanāgarīToUAST,
      builderFuncs["ml"]["handleUnicode"],
      builderFuncs["ml"]["dataFunction"]
    ],
    ta: [
      builderFuncs["or"]["scriptToDevanāgarī"],
      devanāgarīToUAST,
      builderFuncs["ta"]["handleUnicode"],
      builderFuncs["ta"]["dataFunction"]
    ]
  },
  kn: {
    devanāgarī: [builderFuncs["kn"]["scriptToDevanāgarī"]],
    uast: [builderFuncs["kn"]["scriptToDevanāgarī"], devanāgarīToUAST],
    iast: [builderFuncs["kn"]["scriptToDevanāgarī"], DevanāgarīToIAST],
    gu: [builderFuncs["kn"]["scriptToDevanāgarī"], DevanāgarīToGu],
    or: [
      builderFuncs["kn"]["scriptToDevanāgarī"],
      devanāgarīToUAST,
      builderFuncs["or"]["handleUnicode"],
      builderFuncs["or"]["dataFunction"]
    ],
    te: [
      builderFuncs["kn"]["scriptToDevanāgarī"],
      devanāgarīToUAST,
      builderFuncs["te"]["handleUnicode"],
      builderFuncs["te"]["dataFunction"]
    ],
    ml: [
      builderFuncs["kn"]["scriptToDevanāgarī"],
      devanāgarīToUAST,
      builderFuncs["ml"]["handleUnicode"],
      builderFuncs["ml"]["dataFunction"]
    ],
    ta: [
      builderFuncs["kn"]["scriptToDevanāgarī"],
      devanāgarīToUAST,
      builderFuncs["ta"]["handleUnicode"],
      builderFuncs["ta"]["dataFunction"]
    ]
  },
  te: {
    devanāgarī: [builderFuncs["te"]["scriptToDevanāgarī"]],
    uast: [builderFuncs["te"]["scriptToDevanāgarī"], devanāgarīToUAST],
    iast: [builderFuncs["te"]["scriptToDevanāgarī"], DevanāgarīToIAST],
    gu: [builderFuncs["te"]["scriptToDevanāgarī"], DevanāgarīToGu],
    or: [
      builderFuncs["te"]["scriptToDevanāgarī"],
      devanāgarīToUAST,
      builderFuncs["or"]["handleUnicode"],
      builderFuncs["or"]["dataFunction"]
    ],
    kn: [
      builderFuncs["te"]["scriptToDevanāgarī"],
      devanāgarīToUAST,
      builderFuncs["kn"]["handleUnicode"],
      builderFuncs["kn"]["dataFunction"]
    ],
    ml: [
      builderFuncs["te"]["scriptToDevanāgarī"],
      devanāgarīToUAST,
      builderFuncs["ml"]["handleUnicode"],
      builderFuncs["ml"]["dataFunction"]
    ],
    ta: [
      builderFuncs["te"]["scriptToDevanāgarī"],
      devanāgarīToUAST,
      builderFuncs["ta"]["handleUnicode"],
      builderFuncs["ta"]["dataFunction"]
    ]
  },
  ml: {
    devanāgarī: [builderFuncs["ml"]["scriptToDevanāgarī"]],
    uast: [builderFuncs["ml"]["scriptToDevanāgarī"], devanāgarīToUAST],
    iast: [builderFuncs["ml"]["scriptToDevanāgarī"], DevanāgarīToIAST],
    gu: [builderFuncs["ml"]["scriptToDevanāgarī"], DevanāgarīToGu],
    or: [
      builderFuncs["ml"]["scriptToDevanāgarī"],
      devanāgarīToUAST,
      builderFuncs["or"]["handleUnicode"],
      builderFuncs["or"]["dataFunction"]
    ],
    kn: [
      builderFuncs["ml"]["scriptToDevanāgarī"],
      devanāgarīToUAST,
      builderFuncs["kn"]["handleUnicode"],
      builderFuncs["kn"]["dataFunction"]
    ],
    te: [
      builderFuncs["ml"]["scriptToDevanāgarī"],
      devanāgarīToUAST,
      builderFuncs["te"]["handleUnicode"],
      builderFuncs["te"]["dataFunction"]
    ],
    ta: [
      builderFuncs["ml"]["scriptToDevanāgarī"],
      devanāgarīToUAST,
      builderFuncs["ta"]["handleUnicode"],
      builderFuncs["ta"]["dataFunction"]
    ]
  },
  ta: {
    devanāgarī: [builderFuncs["ta"]["scriptToDevanāgarī"]],
    uast: [builderFuncs["ta"]["scriptToDevanāgarī"], devanāgarīToUAST],
    iast: [builderFuncs["ta"]["scriptToDevanāgarī"], DevanāgarīToIAST],
    gu: [builderFuncs["ta"]["scriptToDevanāgarī"], DevanāgarīToGu],
    or: [
      builderFuncs["ta"]["scriptToDevanāgarī"],
      devanāgarīToUAST,
      builderFuncs["or"]["handleUnicode"],
      builderFuncs["or"]["dataFunction"]
    ],
    kn: [
      builderFuncs["ta"]["scriptToDevanāgarī"],
      devanāgarīToUAST,
      builderFuncs["kn"]["handleUnicode"],
      builderFuncs["kn"]["dataFunction"]
    ],
    te: [
      builderFuncs["ta"]["scriptToDevanāgarī"],
      devanāgarīToUAST,
      builderFuncs["te"]["handleUnicode"],
      builderFuncs["te"]["dataFunction"]
    ],
    ml: [
      builderFuncs["ta"]["scriptToDevanāgarī"],
      devanāgarīToUAST,
      builderFuncs["ml"]["handleUnicode"],
      builderFuncs["ml"]["dataFunction"]
    ]
  }
} as const;
