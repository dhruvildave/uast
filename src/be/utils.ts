type CharMap = {
  [k: string]: string;
};

type LangMap = {
  numbers: CharMap;
  vowels: CharMap;
  vowelSigns: CharMap;
  consonants: CharMap;
  misc: CharMap;
};

const gujaratiCharacterDict: LangMap = {
  misc: {
    ',': ',',
    '.': '.',
    '?': '?',
    ऽ: "'",
    ॐ: 'om',
  },
  numbers: {
    '૦': '0',
    '૧': '1',
    '૨': '2',
    '૩': '3',
    '૪': '4',
    '૫': '5',
    '૬': '6',
    '૭': '7',
    '૮': '8',
    '૯': '9',
  },
  vowels: {
    a: 'અ',
    ā: 'આ',
    i: 'ઇ',
    ī: 'ઈ',
    u: 'ઉ',
    ū: 'ઊ',
    ṛ: 'ઋ',
    e: 'એ',
    ai: 'ઐ',
    o: 'ઓ',
    au: 'ઔ',
  },
  vowelSigns: {
    a: '',
    ā: 'ા',
    i: 'િ',
    ī: 'ી',
    u: 'ુ',
    ū: 'ૂ',
    ṛ: 'ૃ',
    e: 'ે',
    ai: 'ૈ',
    o: 'ો',
    au: 'ૌ',
    ṃ: 'ં',
    ḥ: 'ઃ',
    ã: 'ँ',
    '-': '્',
  },
  consonants: {
    k: 'ક',
    kh: 'ખ',
    g: 'ગ',
    gh: 'ઘ',
    ṅ: 'ઙ',
    c: 'ચ',
    ch: 'છ',
    j: 'જ',
    jh: 'ઝ',
    ñ: 'ઞ',
    ṭ: 'ટ',
    ṭh: 'ઠ',
    ḍ: 'ડ',
    ḍh: 'ઢ',
    ṇ: 'ણ',
    t: 'ત',
    th: 'થ',
    d: 'દ',
    dh: 'ધ',
    n: 'ન',
    p: 'પ',
    ph: 'ફ',
    b: 'બ',
    bh: 'ભ',
    m: 'મ',
    y: 'ય',
    r: 'ર',
    l: 'લ',
    v: 'વ',
    ś: 'શ',
    ṣ: 'ષ',
    s: 'સ',
    h: 'હ',
    ḻ: 'ળ',
  },
};

const devanagariCharacterDict: LangMap = {
  misc: {
    '।': '.',
    '॥': '..',
    ऽ: "'",
    ॐ: 'om',
  },
  numbers: {
    '०': '0',
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9',
  },
  vowels: {
    a: 'अ',
    ā: 'आ',
    i: 'इ',
    ī: 'ई',
    u: 'उ',
    ū: 'ऊ',
    ṛ: 'ऋ',
    ṝ: 'ॠ',
    ḷ: 'ऌ',
    ḹ: 'ॡ',
    e: 'ए',
    ai: 'ऐ',
    o: 'ओ',
    au: 'औ',
  },
  vowelSigns: {
    a: '',
    ā: 'ा',
    i: 'ि',
    ī: 'ी',
    u: 'ु',
    ū: 'ू',
    ṛ: 'ृ',
    ṝ: 'ॄ',
    ḷ: 'ॢ',
    ḹ: 'ॣ',
    e: 'े',
    ai: 'ै',
    o: 'ो',
    au: 'ौ',
    ṃ: 'ं',
    ḥ: 'ः',
    ã: 'ँ',
    '-': '्',
  },
  consonants: {
    k: 'क',
    kh: 'ख',
    g: 'ग',
    gh: 'घ',
    ṅ: 'ङ',
    c: 'च',
    ch: 'छ',
    j: 'ज',
    jh: 'झ',
    ñ: 'ञ',
    ṭ: 'ट',
    ṭh: 'ठ',
    ḍ: 'ड',
    ḍh: 'ढ',
    ṇ: 'ण',
    t: 'त',
    th: 'थ',
    d: 'द',
    dh: 'ध',
    n: 'न',
    p: 'प',
    ph: 'फ',
    b: 'ब',
    bh: 'भ',
    m: 'म',
    y: 'य',
    r: 'र',
    l: 'ल',
    v: 'व',
    ś: 'श',
    ṣ: 'ष',
    s: 'स',
    h: 'ह',
    ḻ: 'ळ',
  },
};

const unicodeMap: CharMap = {
  a: 'ā',
  i: 'ī',
  u: 'ū',
  r: 'ṛ',
  ru: 'ṝ',
  l: 'ḷ',
  lu: 'ḹ',
  ll: 'ḻ',
  t: 'ṭ',
  d: 'ḍ',
  m: 'ṃ',
  h: 'ḥ',
  n: 'ñ',
  nu: 'ṅ',
  nl: 'ṇ',
  su: 'ś',
  sl: 'ṣ',
  "'": 'ऽ',
  '.': '।',
  '..': '॥',
  om: 'ॐ',
  au: 'ã',

  0: '०',
  1: '१',
  2: '२',
  3: '३',
  4: '४',
  5: '५',
  6: '६',
  7: '७',
  8: '८',
  9: '९',
};

const devanagariDataDict: CharMap = {
  क: 'k',
  ख: 'kh',
  ग: 'g',
  घ: 'gh',
  ङ: '/nu/',
  च: 'c',
  छ: 'ch',
  ज: 'j',
  झ: 'jh',
  ञ: '/n/',
  ट: '/t/',
  ठ: '/t/h',
  ड: '/d/',
  ढ: '/d/h',
  ण: '/nl/',
  त: 't',
  थ: 'th',
  द: 'd',
  ध: 'dh',
  न: 'n',
  प: 'p',
  फ: 'ph',
  ब: 'b',
  भ: 'bh',
  म: 'm',
  य: 'y',
  र: 'r',
  ल: 'l',
  व: 'v',
  श: '/su/',
  ष: '/sl/',
  स: 's',
  ह: 'h',
  ळ: '/ll/',

  अ: 'a',
  आ: '/a/',
  इ: 'i',
  ई: '/i/',
  उ: 'u',
  ऊ: '/u/',
  ऋ: '/r/',
  ॠ: '/ru/',
  ऌ: '/l/',
  ॡ: '/lu/',
  ए: 'e',
  ऐ: 'ai',
  ओ: 'o',
  औ: 'au',

  '': 'a',
  'ा': '/a/',
  'ि': 'i',
  'ी': '/i/',
  'ु': 'u',
  'ू': '/u/',
  'ृ': '/r/',
  'ॄ': '/ru/',
  'ॢ': '/l/',
  'ॣ': '/lu/',
  'े': 'e',
  'ै': 'ai',
  'ो': 'o',
  'ौ': 'au',
  'ं': '/m/',
  'ः': '/h/',
  'ँ': '/au/',
  '्': '-',

  ऽ: "\\/'/\\",
  '।': '\\/./\\',
  '॥': '\\/../\\',
  ॐ: '\\/om/\\',

  '०': '\\/0/\\',
  '१': '\\/1/\\',
  '२': '\\/2/\\',
  '३': '\\/3/\\',
  '४': '\\/4/\\',
  '५': '\\/5/\\',
  '६': '\\/6/\\',
  '७': '\\/7/\\',
  '८': '\\/8/\\',
  '९': '\\/9/\\',
};

const iastDataDict: CharMap = {
  '०': '0',
  '१': '1',
  '२': '2',
  '३': '3',
  '४': '4',
  '५': '5',
  '६': '6',
  '७': '7',
  '८': '8',
  '९': '9',
  ā: 'a',
  ī: 'i',
  ū: 'u',
  ṛ: 'r',
  ṝ: 'ru',
  ḷ: 'l',
  ḹ: 'lu',
  ḻ: 'll',
  ṭ: 't',
  ḍ: 'd',
  ṃ: 'm',
  ḥ: 'h',
  ñ: 'n',
  ṅ: 'nu',
  ṇ: 'nl',
  ś: 'su',
  ṣ: 'sl',
  ऽ: "'",
  '।': '.',
  '॥': '..',
  ॐ: 'om',
  ã: 'au',
};

const unAspiratedConsonants: string[] = [
  'k',
  'g',
  'c',
  'j',
  't',
  'd',
  'p',
  'b',
  'ṭ',
  'ḍ',
];

const slpDataDict: CharMap = {
  a: 'a',
  A: 'ā',
  i: 'i',
  I: 'ī',
  u: 'u',
  U: 'ū',
  e: 'e',
  E: 'ai',
  o: 'o',
  O: 'au',
  f: 'ṛ',
  F: 'ṝ',
  x: 'ḷ',
  X: 'ḹ',
  L: 'ḻ',
  '|': 'ḻh',
  k: 'k',
  K: 'kh',
  g: 'g',
  G: 'gh',
  N: 'ṅ',
  c: 'c',
  C: 'ch',
  j: 'j',
  J: 'jh',
  Y: 'ñ',
  w: 'ṭ',
  W: 'ṭh',
  q: 'ḍ',
  Q: 'ḍh',
  R: 'ṇ',
  t: 't',
  T: 'th',
  d: 'd',
  D: 'dh',
  n: 'n',
  p: 'p',
  P: 'ph',
  b: 'b',
  B: 'bh',
  m: 'm',
  M: 'ṃ',
  H: 'ḥ',
  y: 'y',
  r: 'r',
  l: 'l',
  v: 'v',
  S: 'ś',
  z: 'ṣ',
  s: 's',
  h: 'h',
  "'": "'",
  '~': 'ã',
};

/**
 * Function to map special characters to Unicode
 *
 * @param uast input UAST string
 * @returns parsed AnDy output string
 */
function handleUnicode(uast: string): string {
  uast = uast.toLowerCase();

  if (uast.startsWith('\\')) {
    uast = uast.slice(1);
  }

  if (uast.endsWith('\\')) {
    uast = uast.slice(0, uast.length - 1);
  }

  let str = Array.from(uast);
  let arr: string[] = [];

  for (let i = 0; i < str.length; ) {
    let curr = str.at(i) ?? '';

    if (str.at(i) === '/') {
      let char: string[] = [];

      for (let j = i + 1; j < str.length; j++) {
        let curr = str.at(j) ?? '';

        if (curr === '/') {
          i = j;
          break;
        }

        if (j === str.length - 1) {
          i = j;
        }

        char.push(curr);
      }

      arr.push(unicodeMap[char.join('')] ?? '');
      i++;
      continue;
    }

    arr.push(curr);
    i++;
  }

  return arr.join('');
}

/**
 * Convert AnDy to IAST
 *
 * @param data Parsed AnDy string
 * @returns IAST string
 */
function dataToIAST(data: string): string {
  return data
    .replaceAll('\n', '')
    .replaceAll("/'/", '/_/')
    .replaceAll('/_/', "/'/")
    .split('\\')
    .map(split => {
      if (split === 'ॐ') {
        return 'oṃ';
      }

      if (split in devanagariCharacterDict.numbers) {
        return devanagariCharacterDict.numbers[split];
      }

      if (split in devanagariCharacterDict.misc) {
        return devanagariCharacterDict.misc[split];
      }

      if (['ḥ', 'ṃ', 'ã'].includes(split)) {
        return split;
      }

      let str = Array.from(split);

      let arr: string[] = [];

      for (let i = 0; i < str.length; ) {
        const curr = str.at(i) ?? '';

        if (curr === "'") {
          // arr.push('॑');
          i++;
          continue;
        }

        if (curr === '`') {
          // arr.push('॒');
          i++;
          continue;
        }

        const next = str.at(i + 1) ?? '';

        if (['ḥ', 'ṃ', 'ã'].includes(next)) {
          if (curr in devanagariCharacterDict.consonants) {
            arr.push(`${curr}a${next}`);
          } else {
            arr.push(`${curr}${next}`);
          }

          i += 2;
          continue;
        }

        if (curr in devanagariCharacterDict.vowels) {
          arr.push(curr);
          i++;

          continue;
        }

        if (i === str.length - 1) {
          arr.push(`${curr}a`);
          i++;
          continue;
        }

        if (next === 'h' && unAspiratedConsonants.includes(curr)) {
          const last = str.at(i + 2) ?? '';
          if (last in devanagariCharacterDict.vowelSigns === false) {
            arr.push(`${curr}${next}a`);
            i += 2;
            continue;
          }

          if (['ḥ', 'ṃ', 'ã'].includes(last)) {
            arr.push(`${curr}${next}a${last}`);
            i += 3;
            continue;
          }

          if (last === '-') {
            i += 3;
          } else {
            i += 2;
          }
          arr.push(`${curr}${next}`);

          continue;
        }

        if (next === '-') {
          arr.push(curr);
          i += 2;
          continue;
        }

        if (next in devanagariCharacterDict.vowelSigns) {
          arr.push(curr);
          i++;
          continue;
        }

        if (['ḥ', 'ṃ', 'ã'].includes(curr)) {
          arr.push(curr);
          i++;
          continue;
        }

        arr.push(`${curr}a`);
        i++;
      }

      return arr.join('');
    })
    .join('')
    .normalize();
}

/**
 * Convert IAST to UAST
 *
 * @param data IAST string
 * @returns UAST string
 */
function iastToUAST(data: string): string {
  let str = Array.from(data);
  let arr: string[] = [];

  for (let i = 0; i < str.length; ) {
    const curr = str.at(i) ?? '';
    const next = str.at(i + 1) ?? '';

    if (curr in devanagariCharacterDict.consonants) {
      if (unAspiratedConsonants.includes(curr)) {
        if (next === 'a' && (str.at(i + 2) ?? '') === 'h') {
          arr.push(`${curr}\\`);
          i += 2;
          continue;
        }

        if (next === 'h') {
          let last = str.at(i + 2) ?? '';
          if (last in devanagariCharacterDict.consonants) {
            arr.push(`${curr}${next}-`);
            i += 2;
            continue;
          }

          if (last === 'a') {
            last = str.at(i + 3) ?? '';
            if (last === 'i' || last === 'u') {
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

      if (next === 'a') {
        const last = str.at(i + 2) ?? '';
        if (last === 'i' || last === 'u') {
          arr.push(`${curr}a${last}`);
          i += 3;
          continue;
        }

        arr.push(curr);
        i += 2;
        continue;
      }

      if (
        next in devanagariCharacterDict.consonants ||
        ['.', '..', "'"].includes(next) ||
        i === str.length - 1
      ) {
        arr.push(`${curr}-`);
        i++;
        continue;
      }

      arr.push(curr);
      i++;
      continue;
    }

    if (curr === 'a' && (next === 'i' || next === 'u')) {
      arr.push(`${curr}${next}\\`);
      i += 2;
      continue;
    }

    if (
      curr in devanagariCharacterDict.vowels &&
      next in devanagariCharacterDict.consonants
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
    let curr = arr[k] ?? '';

    let hasDash = false;
    if (curr.includes('-')) {
      hasDash = true;
    }
    curr = curr.replaceAll(/[\\-]/gu, '');
    for (let j of Object.values(devanagariCharacterDict.misc)
      .filter(i => ['om', '..'].includes(i) === false)
      .concat(Object.values(devanagariCharacterDict.numbers))) {
      if (curr === '.' && arr[k + 1] === '.') {
        curr = curr.replaceAll(curr, '\\/../\\');
        k++;
        continue;
      }

      curr = curr.replaceAll(j, `\\/${j}/\\`);
    }

    ans.push(
      curr +
        (unAspiratedConsonants.includes(curr) &&
        (arr[k + 1] ?? '').includes('h')
          ? 'a'
          : '') +
        (hasDash === true ? '-' : '') +
        (curr in devanagariCharacterDict.vowels ? '\\' : '')
    );
  }

  if (
    (ans.at(-1) ?? '') in devanagariCharacterDict.consonants &&
    (str.at(-1) ?? '') !== 'a'
  ) {
    ans.push('-');
  }

  return Array.from(ans.join(''))
    .map(i => (i in iastDataDict ? `/${iastDataDict[i]}/` : i))
    .join('')
    .normalize();
}

/**
 * Function to create the function of parser
 *
 * @param lang Language to choose as renderer
 * @returns Function that can parse the `lang`
 */
function createDataFunction(lang: 'gu' | 'sa'): (data: string) => string {
  let obj: LangMap = devanagariCharacterDict;

  if (lang === 'gu') {
    obj = gujaratiCharacterDict;
  }

  return function (data: string): string {
    return data
      .split('\\')
      .map(split => {
        if (
          Object.keys(obj.misc).concat(Object.keys(obj.numbers)).includes(split)
        ) {
          return split;
        }

        if (split in obj.vowels) {
          return obj.vowels[split];
        }

        let arr: string[] = [];

        const str = Array.from(split);

        for (let i = 0; i < str.length; ) {
          const curr = str[i] ?? '';
          if (curr === "'") {
            arr.push('॑');
            i++;
            continue;
          }

          if (curr === '`') {
            arr.push('॒');
            i++;
            continue;
          }

          if (unAspiratedConsonants.includes(curr)) {
            let consonant: string = '';
            if (str[i + 1] === 'h') {
              consonant = str.slice(i, i + 2).join('');
              i += 2;
            } else {
              consonant = curr;
              i++;
            }
            arr.push(obj.consonants[consonant] ?? '');

            continue;
          }

          arr.push(obj.consonants[curr] ?? '');

          let vowel: string = '';
          if (curr === 'a' && (str[i + 1] === 'i' || str[i + 1] === 'u')) {
            vowel = str.slice(i, i + 2).join('');
            i += 2;
          } else {
            vowel = curr;
            i++;
          }

          arr.push(obj.vowelSigns[vowel] ?? '');
        }

        return arr.join('');
      })
      .join('')
      .normalize();
  };
}

/**
 * Convert UAST to देवनागरी
 *
 * @param data देवनागरी string
 * @returns UAST string
 */
function devanagariToUAST(data: string): string {
  const str = Array.from(data);
  let arr: string[] = [];

  for (let i = 0; i < str.length; i++) {
    const curr = str.at(i) ?? '';
    const next = str.at(i + 1) ?? '';

    if (curr === '॑') {
      arr.push("\\'");
      continue;
    }

    if (curr === '॒') {
      arr.push('\\`');
      continue;
    }

    const val = devanagariDataDict[curr] ?? curr;
    const next_val = devanagariDataDict[next] ?? next;

    if (
      Object.values(devanagariCharacterDict.vowels).includes(curr) &&
      Object.values(devanagariCharacterDict.consonants).includes(next)
    ) {
      arr.push(`${val}\\`);
      continue;
    }

    if (unAspiratedConsonants.includes(val) && next_val === 'h') {
      arr.push(`${val}a`);
      continue;
    }

    arr.push(val);
  }

  return arr.join('').normalize();
}

/**
 * Convert SLP1 to IAST
 *
 * @param data SLP1 string
 * @returns IAST string
 */
function slpToIAST(data: string): string {
  return Array.from(data)
    .map(i => slpDataDict[i] ?? '')
    .join('')
    .normalize();
}

export const convertor: {
  [from: string]: {
    [to: string]: ((data: string) => string)[];
  };
} = {
  uast: {
    iast: [handleUnicode, dataToIAST],
    devanagari: [handleUnicode, createDataFunction('sa')],
    guj: [handleUnicode, createDataFunction('gu')],
  },
  raw: {
    iast: [handleUnicode],
  },
  slp: {
    iast: [slpToIAST],
    uast: [slpToIAST, iastToUAST],
    devanagari: [
      slpToIAST,
      iastToUAST,
      handleUnicode,
      createDataFunction('sa'),
    ],
  },
  devanagari: {
    uast: [devanagariToUAST],
    iast: [devanagariToUAST, handleUnicode, dataToIAST],
  },
  iast: {
    uast: [iastToUAST],
    devanagari: [iastToUAST, handleUnicode, createDataFunction('sa')],
  },
};
