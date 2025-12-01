import { binary_search, contains, type T } from "./commons";

type ScriptSpecials = {
  om: string;
  halanta: string;
  saṃkṣipta: string;
};

const UNICODE_MAP: T[] = [
  ["'", "॑"],
  ["''", "᳚"],
  ["-", "॒"],
  [".", "॰"],
  ["0", "꣠"],
  ["1", "꣡"],
  ["2", "꣢"],
  ["3", "꣣"],
  ["4", "꣤"],
  ["5", "꣥"],
  ["6", "꣦"],
  ["7", "꣧"],
  ["8", "꣨"],
  ["9", "꣩"],
  ["a", "ā"],
  ["au", "ã"],
  ["cv", "ꣳ"],
  ["d", "ḍ"],
  ["h", "ḥ"],
  ["i", "ī"],
  ["l", "ḷ"],
  ["ll", "ḻ"],
  ["lu", "ḹ"],
  ["m", "ṃ"],
  ["n", "ñ"],
  ["nl", "ṇ"],
  ["nu", "ṅ"],
  ["om", "ॐ"],
  ["r", "ṛ"],
  ["ru", "ṝ"],
  ["sl", "ṣ"],
  ["su", "ś"],
  ["t", "ṭ"],
  ["u", "ū"]
];

const CHAR_DICT = new (class {
  #misc: T[];
  #numbers: T[];
  #vowels: T[];
  #vowel_signs: T[];
  #consonants: T[];
  #specials: ScriptSpecials;

  get specials(): ScriptSpecials {
    return this.#specials;
  }

  constructor() {
    this.#misc = [
      ["'", "ऽ"],
      ["-", "ॱ"],
      [".", "।"],
      ["..", "॥"],
      ["ã", "ँ"],
      ["ḥ", "ः"],
      ["ṃ", "ं"]
    ];
    this.#numbers = [
      ["0", "०"],
      ["1", "१"],
      ["2", "२"],
      ["3", "३"],
      ["4", "४"],
      ["5", "५"],
      ["6", "६"],
      ["7", "७"],
      ["8", "८"],
      ["9", "९"]
    ];
    this.#vowels = [
      ["a", "अ"],
      ["ai", "ऐ"],
      ["au", "औ"],
      ["e", "ए"],
      ["i", "इ"],
      ["o", "ओ"],
      ["u", "उ"],
      ["ā", "आ"],
      ["ī", "ई"],
      ["ū", "ऊ"],
      ["ḷ", "ऌ"],
      ["ḹ", "ॡ"],
      ["ṛ", "ऋ"],
      ["ṝ", "ॠ"]
    ];
    this.#vowel_signs = [
      ["ai", "ै"],
      ["au", "ौ"],
      ["e", "े"],
      ["i", "ि"],
      ["o", "ो"],
      ["u", "ु"],
      ["ā", "ा"],
      ["ī", "ी"],
      ["ū", "ू"],
      ["ḷ", "ॢ"],
      ["ḹ", "ॣ"],
      ["ṛ", "ृ"],
      ["ṝ", "ॄ"]
    ];
    this.#consonants = [
      ["b", "ब"],
      ["bh", "भ"],
      ["c", "च"],
      ["ch", "छ"],
      ["d", "द"],
      ["dh", "ध"],
      ["g", "ग"],
      ["gh", "घ"],
      ["h", "ह"],
      ["j", "ज"],
      ["jh", "झ"],
      ["k", "क"],
      ["kh", "ख"],
      ["l", "ल"],
      ["m", "म"],
      ["n", "न"],
      ["p", "प"],
      ["ph", "फ"],
      ["r", "र"],
      ["s", "स"],
      ["t", "त"],
      ["th", "थ"],
      ["v", "व"],
      ["y", "य"],
      ["ñ", "ञ"],
      ["ś", "श"],
      ["ḍ", "ड"],
      ["ḍh", "ढ"],
      ["ḻ", "ळ"],
      ["ṅ", "ङ"],
      ["ṇ", "ण"],
      ["ṣ", "ष"],
      ["ṭ", "ट"],
      ["ṭh", "ठ"]
    ];
    this.#specials = {
      om: "ॐ",
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

  get_number(c: string): string | null {
    return binary_search(this.#numbers, c);
  }

  contains_vowel(c: string): boolean {
    return contains(this.#vowels, c);
  }

  contains_vowelsign(c: string): boolean {
    return contains(this.#vowel_signs, c);
  }

  contains_consonant(c: string): boolean {
    return contains(this.#consonants, c);
  }
})();

const VEDA_ACCENTS = [
  "॑",
  "॒",
  "᳚",
  "꣠",
  "꣡",
  "꣢",
  "꣣",
  "꣤",
  "꣥",
  "꣦",
  "꣧",
  "꣨",
  "꣩",
  "ꣳ"
];

const UNASPIRATED_CONSONANTS = [
  "b",
  "c",
  "d",
  "g",
  "j",
  "k",
  "p",
  "t",
  "ḍ",
  "ṭ"
];

const allowedSymbols = [
  "\t",
  "\n",
  "\v",
  "\f",
  "\r",
  "!",
  '"',
  "(",
  ")",
  ",",
  ":",
  ";",
  "=",
  "?"
];

function sorted_arr_contains(arr: string[], c: string): boolean {
  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    const mid = Math.floor((i + j) / 2);
    const v = arr[mid] as string;

    if (v === c) {
      return true;
    }

    if (c > v) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }

  return false;
}

function handle_unicode(uast: string): string[] {
  const str = Array.from(uast.normalize().toLowerCase());

  const arr: string[] = [];

  for (let i = 0; i < str.length; ) {
    const curr = str[i] as string;
    if (curr !== "/") {
      arr.push(curr);
      i++;
      continue;
    }

    let c: string[] = [];
    for (let j = i + 1; j < str.length; j++) {
      const curr = str[j] as string;
      if (curr === "/") {
        i = j;
        break;
      }

      if (j === str.length - 1) {
        i = j;
      }

      c.push(curr);
    }

    const v = binary_search(UNICODE_MAP, c.join(""));
    if (v !== null) {
      arr.push(v);
    }

    i++;
  }

  return arr;
}

function iast_to_devanāgarī(data: string[]): string {
  if (data.length === 0) {
    return "";
  }

  const arr: string[] = [];
  let i = 0;

  const c0 = data[0] as string;
  if (CHAR_DICT.contains_vowel(c0)) {
    const c1 = data[1] as string;
    if (i + 1 < data.length && c0 === "a" && (c1 === "i" || c1 === "u")) {
      i = 2;
    } else {
      i = 1;
    }

    arr.push(CHAR_DICT.get_vowel(data.slice(0, i).join("")) as string);
  }

  while (i < data.length) {
    const c = data[i] as string;

    if (sorted_arr_contains(VEDA_ACCENTS, c)) {
      arr.push(c);
      i++;
      continue;
    }

    if (c === CHAR_DICT.specials.om) {
      arr.push(CHAR_DICT.specials.om);
      i++;
      continue;
    }

    if (c === CHAR_DICT.specials.saṃkṣipta) {
      arr.push(CHAR_DICT.specials.saṃkṣipta);
      i++;
      continue;
    }

    if (sorted_arr_contains(allowedSymbols, c)) {
      arr.push(c);
      i++;
      continue;
    }

    let v = CHAR_DICT.get_misc(c);
    if (v !== null) {
      if (i + 1 < data.length && c === "." && data[i + 1] === ".") {
        arr.push("॥");
        i += 2;
      } else {
        arr.push(v);
        i++;
      }
      continue;
    }

    v = CHAR_DICT.get_number(c);
    if (v !== null) {
      arr.push(v);
      i++;
      continue;
    }

    if (
      !CHAR_DICT.contains_vowelsign(c) &&
      !CHAR_DICT.contains_vowel(c) &&
      !CHAR_DICT.contains_consonant(c)
    ) {
      i++;
      continue;
    }

    if (
      i + 1 < data.length &&
      sorted_arr_contains(UNASPIRATED_CONSONANTS, c) &&
      data[i + 1] === "h"
    ) {
      arr.push(
        CHAR_DICT.get_consonant(data.slice(i, i + 2).join("")) as string
      );
      i += 2;
    } else {
      const v = CHAR_DICT.get_consonant(c);
      if (v !== null) {
        arr.push(v);
        i++;
      }
    }

    if (
      i === data.length ||
      (data[i] !== "a" && !CHAR_DICT.contains_vowelsign(data[i] ?? ""))
    ) {
      arr.push(CHAR_DICT.specials.halanta);
      continue;
    }

    if (
      i + 1 < data.length &&
      data[i] === "a" &&
      (data[i + 1] === "i" || data[i + 1] === "u")
    ) {
      arr.push(
        CHAR_DICT.get_vowel_sign(data.slice(i, i + 2).join("")) as string
      );
      i += 2;
    } else {
      const c = data[i] as string;
      if (c !== "a") {
        arr.push(CHAR_DICT.get_vowel_sign(c) as string);
      }
      i++;
    }
  }

  return arr.join("");
}

export function convertor(data: string): string {
  return iast_to_devanāgarī(handle_unicode(data));
}
