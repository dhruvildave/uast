import { binary_search, contains, type T } from "./commons";

type ScriptSpecials = {
  om: string;
  halanta: string;
  visarga: string;
  anusvāra: string;
  candrabindu: string;
  saṃkṣipta: string;
};

const CHAR_DICT = new (class Script {
  #vowels: T[];
  #vowel_signs: T[];
  #consonants: T[];
  #misc: T[];
  #specials: ScriptSpecials;

  get specials(): ScriptSpecials {
    return this.#specials;
  }

  constructor() {
    this.#misc = [
      ["ऽ", "'"],
      ["।", "."],
      ["॥", ".."],
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
      ["ॱ", "-"]
    ];
    this.#consonants = [
      ["क", "k"],
      ["ख", "kh"],
      ["ग", "g"],
      ["घ", "gh"],
      ["ङ", "ṅ"],
      ["च", "c"],
      ["छ", "ch"],
      ["ज", "j"],
      ["झ", "jh"],
      ["ञ", "ñ"],
      ["ट", "ṭ"],
      ["ठ", "ṭh"],
      ["ड", "ḍ"],
      ["ढ", "ḍh"],
      ["ण", "ṇ"],
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
      ["ळ", "ḻ"],
      ["व", "v"],
      ["श", "ś"],
      ["ष", "ṣ"],
      ["स", "s"],
      ["ह", "h"]
    ];
    this.#vowel_signs = [
      ["ा", "ā"],
      ["ि", "i"],
      ["ी", "ī"],
      ["ु", "u"],
      ["ू", "ū"],
      ["ृ", "ṛ"],
      ["ॄ", "ṝ"],
      ["े", "e"],
      ["ै", "ai"],
      ["ो", "o"],
      ["ौ", "au"],
      ["ॢ", "ḷ"],
      ["ॣ", "ḹ"]
    ];
    this.#vowels = [
      ["अ", "a"],
      ["आ", "ā"],
      ["इ", "i"],
      ["ई", "ī"],
      ["उ", "u"],
      ["ऊ", "ū"],
      ["ऋ", "ṛ"],
      ["ऌ", "ḷ"],
      ["ए", "e"],
      ["ऐ", "ai"],
      ["ओ", "o"],
      ["औ", "au"],
      ["ॠ", "ṝ"],
      ["ॡ", "ḹ"]
    ];
    this.#specials = {
      om: "ॐ",
      anusvāra: "ं",
      visarga: "ः",
      candrabindu: "ँ",
      halanta: "्",
      saṃkṣipta: "॰"
    };
  }

  get_vowel(c: string): string | null {
    return binary_search(this.#vowels, c);
  }

  get_vowel_sign(c: string): string | null {
    return binary_search(this.#vowel_signs, c);
  }

  get_consonant(c: string): string | null {
    return binary_search(this.#consonants, c);
  }

  get_misc(c: string): string | null {
    return binary_search(this.#misc, c);
  }

  contains_vowel(c: string): boolean {
    return contains(this.#vowels, c);
  }

  contains_misc(c: string): boolean {
    return contains(this.#misc, c);
  }

  contains_consonant(c: string): boolean {
    return contains(this.#consonants, c);
  }
})();

function devanāgarī_to_iast(str: string): string {
  if (str.length === 0) {
    return "";
  }

  const data = Array.from(str);

  const arr: string[] = [];
  let i = 0;

  const c0 = data[0] as string;
  if (CHAR_DICT.contains_vowel(c0)) {
    arr.push(CHAR_DICT.get_vowel(c0) as string);
    i++;
  }

  while (i < data.length) {
    if (data[i] === CHAR_DICT.specials.om) {
      arr.push(CHAR_DICT.specials.om);
      i++;
      continue;
    }

    if (data[i] === CHAR_DICT.specials.saṃkṣipta) {
      arr.push(CHAR_DICT.specials.saṃkṣipta);
      i++;
      continue;
    }

    const v = CHAR_DICT.get_misc(data[i] as string);
    if (v !== null) {
      arr.push(v);
      i++;
      continue;
    }

    if (data[i] === CHAR_DICT.specials.anusvāra) {
      arr.push("ṃ");
      i++;
      continue;
    }

    if (data[i] === CHAR_DICT.specials.visarga) {
      arr.push("ḥ");
      i++;
      continue;
    }

    if (data[i] === CHAR_DICT.specials.candrabindu) {
      arr.push("ã");
      i++;
      continue;
    }

    const c = CHAR_DICT.get_consonant(data[i] as string);
    if (c !== null) {
      arr.push(c);

      if (i + 1 === data.length) {
        arr.push("a");
        i++;
        continue;
      }

      const v = data[i + 1] as string;
      if (v === CHAR_DICT.specials.halanta) {
        i += 2;
        continue;
      }

      const s = CHAR_DICT.get_vowel_sign(v);
      if (s !== null) {
        arr.push(s);
        i += 2;
        continue;
      }

      if (
        CHAR_DICT.contains_consonant(v) ||
        CHAR_DICT.contains_misc(v) ||
        v === CHAR_DICT.specials.anusvāra ||
        v === CHAR_DICT.specials.visarga ||
        v === CHAR_DICT.specials.candrabindu
      ) {
        arr.push("a");
        i++;
        continue;
      }
    }

    i++;
  }

  return arr.join("");
}

export function convertor(data: string): string {
  return devanāgarī_to_iast(data);
}
