import { binary_search, type T } from "./commons";

const SLPDataDict: T[] = [
  ["'", "'"],
  [".", "."],
  ["..", ".."],
  ["A", "ā"],
  ["B", "bh"],
  ["C", "ch"],
  ["D", "dh"],
  ["E", "ai"],
  ["F", "ṝ"],
  ["G", "gh"],
  ["H", "ḥ"],
  ["I", "ī"],
  ["J", "jh"],
  ["K", "kh"],
  ["L", "ḻ"],
  ["M", "ṃ"],
  ["N", "ṅ"],
  ["O", "au"],
  ["P", "ph"],
  ["Q", "ḍh"],
  ["R", "ṇ"],
  ["S", "ś"],
  ["T", "th"],
  ["U", "ū"],
  ["W", "ṭh"],
  ["X", "ḹ"],
  ["Y", "ñ"],
  ["a", "a"],
  ["b", "b"],
  ["c", "c"],
  ["d", "d"],
  ["e", "e"],
  ["f", "ṛ"],
  ["g", "g"],
  ["h", "h"],
  ["i", "i"],
  ["j", "j"],
  ["k", "k"],
  ["l", "l"],
  ["m", "m"],
  ["n", "n"],
  ["o", "o"],
  ["p", "p"],
  ["q", "ḍ"],
  ["r", "r"],
  ["s", "s"],
  ["t", "t"],
  ["u", "u"],
  ["v", "v"],
  ["w", "ṭ"],
  ["x", "ḷ"],
  ["y", "y"],
  ["z", "ṣ"],
  ["|", "ḻh"],
  ["~", "ã"]
];

export function convertor(data: string): string {
  return Array.from(data, i => binary_search(SLPDataDict, i)).join("");
}
