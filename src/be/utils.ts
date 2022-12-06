// सखेति मत्वा प्रसभं यदुक्तं
// हे कृष्ण हे यादव हे सखेति।
// अजानता महिमानं तवेदं
// मया प्रमादात्प्रणयेन वापि॥
// यच्चावहासार्थमसत्कृतोऽसि
// विहारशय्यासनभोजनेषु।
// एकोऽथवाप्यच्युत तत्समक्षं
// तत्क्षामये त्वामहमप्रमेयम्॥

type CharMap = Map<string, string>;

type LangMap = {
  numbers: CharMap;
  vowels: CharMap;
  vowelSigns: CharMap;
  consonants: CharMap;
  misc: CharMap;
};

const langs = ['gu', 'sa', 'ml', 'or', 'te', 'kn', 'ta'] as const;
type LangList = typeof langs[number];

const gujaratiCharDict: LangMap = {
  misc: new Map([
    ['।', '.'],
    ['॥', '..'],
    ['ઽ', "'"],
    ['ॐ', 'om'],
  ]),
  numbers: new Map([
    ['૦', '0'],
    ['૧', '1'],
    ['૨', '2'],
    ['૩', '3'],
    ['૪', '4'],
    ['૫', '5'],
    ['૬', '6'],
    ['૭', '7'],
    ['૮', '8'],
    ['૯', '9'],
  ]),
  vowels: new Map([
    ['a', 'અ'],
    ['ā', 'આ'],
    ['i', 'ઇ'],
    ['ī', 'ઈ'],
    ['u', 'ઉ'],
    ['ū', 'ઊ'],
    ['ṛ', 'ઋ'],
    ['ṝ', 'ૠ'],
    ['ḷ', 'ઌ'],
    ['ḹ', 'ૡ'],
    ['e', 'એ'],
    ['ai', 'ઐ'],
    ['o', 'ઓ'],
    ['au', 'ઔ'],
  ]),
  vowelSigns: new Map([
    ['a', ''],
    ['ā', 'ા'],
    ['i', 'િ'],
    ['ī', 'ી'],
    ['u', 'ુ'],
    ['ū', 'ૂ'],
    ['ṛ', 'ૃ'],
    ['ṝ', 'ૄ'],
    ['ḷ', 'ૢ'],
    ['ḹ', 'ૣ'],
    ['e', 'ે'],
    ['ai', 'ૈ'],
    ['o', 'ો'],
    ['au', 'ૌ'],
    ['ṃ', 'ં'],
    ['ḥ', 'ઃ'],
    ['ã', 'ઁ'],
    ['-', '્'],
  ]),
  consonants: new Map([
    ['k', 'ક'],
    ['kh', 'ખ'],
    ['g', 'ગ'],
    ['gh', 'ઘ'],
    ['ṅ', 'ઙ'],
    ['c', 'ચ'],
    ['ch', 'છ'],
    ['j', 'જ'],
    ['jh', 'ઝ'],
    ['ñ', 'ઞ'],
    ['ṭ', 'ટ'],
    ['ṭh', 'ઠ'],
    ['ḍ', 'ડ'],
    ['ḍh', 'ઢ'],
    ['ṇ', 'ણ'],
    ['t', 'ત'],
    ['th', 'થ'],
    ['d', 'દ'],
    ['dh', 'ધ'],
    ['n', 'ન'],
    ['p', 'પ'],
    ['ph', 'ફ'],
    ['b', 'બ'],
    ['bh', 'ભ'],
    ['m', 'મ'],
    ['y', 'ય'],
    ['r', 'ર'],
    ['l', 'લ'],
    ['v', 'વ'],
    ['ś', 'શ'],
    ['ṣ', 'ષ'],
    ['s', 'સ'],
    ['h', 'હ'],
    ['ḻ', 'ળ'],
  ]),
};

const tamilCharDict: LangMap = {
  misc: new Map([
    ['।', '.'],
    ['॥', '..'],
    ['𑌽', "'"],
    ['𑍐', 'om'],
  ]),
  numbers: new Map([
    ['௦', '0'],
    ['௧', '1'],
    ['௨', '2'],
    ['௩', '3'],
    ['௪', '4'],
    ['௫', '5'],
    ['௬', '6'],
    ['௭', '7'],
    ['௮', '8'],
    ['௯', '9'],
  ]),
  vowels: new Map([
    ['a', '𑌅'],
    ['ā', '𑌆'],
    ['i', '𑌇'],
    ['ī', '𑌈'],
    ['u', '𑌉'],
    ['ū', '𑌊'],
    ['ṛ', '𑌋'],
    ['ṝ', '𑍠'],
    ['ḷ', '𑌌'],
    ['ḹ', '𑍡'],
    ['e', '𑌏'],
    ['ai', '𑌐'],
    ['o', '𑌓'],
    ['au', '𑌔'],
  ]),
  vowelSigns: new Map([
    ['a', ''],
    ['ā', '𑌾'],
    ['i', '𑌿'],
    ['ī', '𑍀'],
    ['u', '𑍁'],
    ['ū', '𑍂'],
    ['ṛ', '𑍃'],
    ['ṝ', '𑍄'],
    ['ḷ', '𑍢'],
    ['ḹ', '𑍣'],
    ['e', '𑍇'],
    ['ai', '𑍈'],
    ['o', '𑍋'],
    ['au', '𑍗'],
    ['ṃ', '𑌂'],
    ['ḥ', '𑌃'],
    ['ã', '𑌁'],
    ['-', '𑍍'],
  ]),
  consonants: new Map([
    ['k', '𑌕'],
    ['kh', '𑌖'],
    ['g', '𑌗'],
    ['gh', '𑌘'],
    ['ṅ', '𑌙'],
    ['c', '𑌚'],
    ['ch', '𑌛'],
    ['j', '𑌜'],
    ['jh', '𑌝'],
    ['ñ', '𑌞'],
    ['ṭ', '𑌟'],
    ['ṭh', '𑌠'],
    ['ḍ', '𑌡'],
    ['ḍh', '𑌢'],
    ['ṇ', '𑌣'],
    ['t', '𑌤'],
    ['th', '𑌥'],
    ['d', '𑌦'],
    ['dh', '𑌧'],
    ['n', '𑌨'],
    ['p', '𑌪'],
    ['ph', '𑌫'],
    ['b', '𑌬'],
    ['bh', '𑌭'],
    ['m', '𑌮'],
    ['y', '𑌯'],
    ['r', '𑌰'],
    ['l', '𑌲'],
    ['v', '𑌵'],
    ['ś', '𑌶'],
    ['ṣ', '𑌷'],
    ['s', '𑌸'],
    ['h', '𑌹'],
    ['ḻ', '𑌳'],
  ]),
};

const malayalamCharDict: LangMap = {
  misc: new Map([
    ['।', '.'],
    ['॥', '..'],
    ['ഽ', "'"],
    ['ഓം', 'om'],
  ]),
  numbers: new Map([
    ['൦', '0'],
    ['൧', '1'],
    ['൨', '2'],
    ['൩', '3'],
    ['൪', '4'],
    ['൫', '5'],
    ['൬', '6'],
    ['൭', '7'],
    ['൮', '8'],
    ['൯', '9'],
  ]),
  vowels: new Map([
    ['a', 'അ'],
    ['ā', 'ആ'],
    ['i', 'ഇ'],
    ['ī', 'ഈ'],
    ['u', 'ഉ'],
    ['ū', 'ഊ'],
    ['ṛ', 'ഋ'],
    ['ṝ', 'ൠ'],
    ['ḷ', 'ഌ'],
    ['ḹ', 'ൡ'],
    ['e', 'എ'],
    ['ai', 'ഐ'],
    ['o', 'ഒ'],
    ['au', 'ഔ'],
  ]),
  vowelSigns: new Map([
    ['a', ''],
    ['ā', 'ാ'],
    ['i', 'ി'],
    ['ī', 'ീ'],
    ['u', 'ു'],
    ['ū', 'ൂ'],
    ['ṛ', 'ൃ'],
    ['ṝ', 'ൄ'],
    ['ḷ', 'ൢ'],
    ['ḹ', 'ൣ'],
    ['e', 'െ'],
    ['ai', 'ൈ'],
    ['o', 'ൊ'],
    ['au', 'ൗ'],
    ['ṃ', 'ം'],
    ['ḥ', 'ഃ'],
    ['ã', 'ഁ'],
    ['-', '്'],
  ]),
  consonants: new Map([
    ['k', 'ക'],
    ['kh', 'ഖ'],
    ['g', 'ഗ'],
    ['gh', 'ഘ'],
    ['ṅ', 'ങ'],
    ['c', 'ച'],
    ['ch', 'ഛ'],
    ['j', 'ജ'],
    ['jh', 'ഝ'],
    ['ñ', 'ഞ'],
    ['ṭ', 'ട'],
    ['ṭh', 'ഠ'],
    ['ḍ', 'ഡ'],
    ['ḍh', 'ഢ'],
    ['ṇ', 'ണ'],
    ['t', 'ത'],
    ['th', 'ഥ'],
    ['d', 'ദ'],
    ['dh', 'ധ'],
    ['n', 'ന'],
    ['p', 'പ'],
    ['ph', 'ഫ'],
    ['b', 'ബ'],
    ['bh', 'ഭ'],
    ['m', 'മ'],
    ['y', 'യ'],
    ['r', 'ര'],
    ['l', 'ല'],
    ['v', 'വ'],
    ['ś', 'ശ'],
    ['ṣ', 'ഷ'],
    ['s', 'സ'],
    ['h', 'ഹ'],
    ['ḻ', 'ള'],
  ]),
};

const teluguCharDict: LangMap = {
  misc: new Map([
    ['।', '.'],
    ['॥', '..'],
    ['ఽ', "'"],
    ['ఓం', 'om'],
  ]),
  numbers: new Map([
    ['౦', '0'],
    ['౧', '1'],
    ['౨', '2'],
    ['౩', '3'],
    ['౪', '4'],
    ['౫', '5'],
    ['౬', '6'],
    ['౭', '7'],
    ['౮', '8'],
    ['౯', '9'],
  ]),
  vowels: new Map([
    ['a', 'అ'],
    ['ā', 'ఆ'],
    ['i', 'ఇ'],
    ['ī', 'ఈ'],
    ['u', 'ఉ'],
    ['ū', 'ఊ'],
    ['ṛ', 'ఋ'],
    ['ṝ', 'ౠ'],
    ['ḷ', 'ఌ'],
    ['ḹ', 'ౡ'],
    ['e', 'ఎ'],
    ['ai', 'ఐ'],
    ['o', 'ఒ'],
    ['au', 'ఔ'],
  ]),
  vowelSigns: new Map([
    ['a', ''],
    ['ā', 'ా'],
    ['i', 'ి'],
    ['ī', 'ీ'],
    ['u', 'ు'],
    ['ū', 'ూ'],
    ['ṛ', 'ృ'],
    ['ṝ', 'ౄ'],
    ['ḷ', 'ౢ'],
    ['ḹ', 'ౣ'],
    ['e', 'ె'],
    ['ai', 'ై'],
    ['o', 'ొ'],
    ['au', 'ౌ'],
    ['ṃ', 'ం'],
    ['ḥ', 'ః'],
    ['ã', 'ఁ'],
    ['-', '్'],
  ]),
  consonants: new Map([
    ['k', 'క'],
    ['kh', 'ఖ'],
    ['g', 'గ'],
    ['gh', 'ఘ'],
    ['ṅ', 'ఙ'],
    ['c', 'చ'],
    ['ch', 'ఛ'],
    ['j', 'జ'],
    ['jh', 'ఝ'],
    ['ñ', 'ఞ'],
    ['ṭ', 'ట'],
    ['ṭh', 'ఠ'],
    ['ḍ', 'డ'],
    ['ḍh', 'ఢ'],
    ['ṇ', 'ణ'],
    ['t', 'త'],
    ['th', 'థ'],
    ['d', 'ద'],
    ['dh', 'ధ'],
    ['n', 'న'],
    ['p', 'ప'],
    ['ph', 'ఫ'],
    ['b', 'బ'],
    ['bh', 'భ'],
    ['m', 'మ'],
    ['y', 'య'],
    ['r', 'ర'],
    ['l', 'ల'],
    ['v', 'వ'],
    ['ś', 'శ'],
    ['ṣ', 'ష'],
    ['s', 'స'],
    ['h', 'హ'],
    ['ḻ', 'ళ'],
  ]),
};

const kannadaCharDict: LangMap = {
  misc: new Map([
    ['।', '.'],
    ['॥', '..'],
    ['ಽ', "'"],
    ['ಓಂ', 'om'],
  ]),
  numbers: new Map([
    ['೦', '0'],
    ['೧', '1'],
    ['೨', '2'],
    ['೩', '3'],
    ['೪', '4'],
    ['೫', '5'],
    ['೬', '6'],
    ['೭', '7'],
    ['೮', '8'],
    ['೯', '9'],
  ]),
  vowels: new Map([
    ['a', 'ಅ'],
    ['ā', 'ಆ'],
    ['i', 'ಇ'],
    ['ī', 'ಈ'],
    ['u', 'ಉ'],
    ['ū', 'ಊ'],
    ['ṛ', 'ಋ'],
    ['ṝ', 'ೠ'],
    ['ḷ', 'ಌ'],
    ['ḹ', 'ೡ'],
    ['e', 'ಎ'],
    ['ai', 'ಐ'],
    ['o', 'ಒ'],
    ['au', 'ಔ'],
  ]),
  vowelSigns: new Map([
    ['a', ''],
    ['ā', 'ಾ'],
    ['i', 'ಿ'],
    ['ī', 'ೀ'],
    ['u', 'ು'],
    ['ū', 'ೂ'],
    ['ṛ', 'ೃ'],
    ['ṝ', 'ೄ'],
    ['ḷ', 'ೢ'],
    ['ḹ', 'ೣ'],
    ['e', 'ೆ'],
    ['ai', 'ೈ'],
    ['o', 'ೊ'],
    ['au', 'ೌ'],
    ['ṃ', 'ಂ'],
    ['ḥ', 'ಃ'],
    ['ã', 'ಁ'],
    ['-', '್'],
  ]),
  consonants: new Map([
    ['k', 'ಕ'],
    ['kh', 'ಖ'],
    ['g', 'ಗ'],
    ['gh', 'ಘ'],
    ['ṅ', 'ಙ'],
    ['c', 'ಚ'],
    ['ch', 'ಛ'],
    ['j', 'ಜ'],
    ['jh', 'ಝ'],
    ['ñ', 'ಞ'],
    ['ṭ', 'ಟ'],
    ['ṭh', 'ಠ'],
    ['ḍ', 'ಡ'],
    ['ḍh', 'ಢ'],
    ['ṇ', 'ಣ'],
    ['t', 'ತ'],
    ['th', 'ಥ'],
    ['d', 'ದ'],
    ['dh', 'ಧ'],
    ['n', 'ನ'],
    ['p', 'ಪ'],
    ['ph', 'ಫ'],
    ['b', 'ಬ'],
    ['bh', 'ಭ'],
    ['m', 'ಮ'],
    ['y', 'ಯ'],
    ['r', 'ರ'],
    ['l', 'ಲ'],
    ['v', 'ವ'],
    ['ś', 'ಶ'],
    ['ṣ', 'ಷ'],
    ['s', 'ಸ'],
    ['h', 'ಹ'],
    ['ḻ', 'ಳ'],
  ]),
};

const odiaCharDict: LangMap = {
  misc: new Map([
    ['।', '.'],
    ['॥', '..'],
    ['ଽ', "'"],
    ['ଓଁ', 'om'],
  ]),
  numbers: new Map([
    ['୦', '0'],
    ['୧', '1'],
    ['୨', '2'],
    ['୩', '3'],
    ['୪', '4'],
    ['୫', '5'],
    ['୬', '6'],
    ['୭', '7'],
    ['୮', '8'],
    ['୯', '9'],
  ]),
  vowels: new Map([
    ['a', 'ଅ'],
    ['ā', 'ଆ'],
    ['i', 'ଇ'],
    ['ī', 'ଈ'],
    ['u', 'ଉ'],
    ['ū', 'ଊ'],
    ['ṛ', 'ଋ'],
    ['ṝ', 'ୠ'],
    ['ḷ', 'ଌ'],
    ['ḹ', 'ୡ'],
    ['e', 'ଏ'],
    ['ai', 'ଐ'],
    ['o', 'ଓ'],
    ['au', 'ଔ'],
  ]),
  vowelSigns: new Map([
    ['a', ''],
    ['ā', 'ା'],
    ['i', 'ି'],
    ['ī', 'ୀ'],
    ['u', 'ୁ'],
    ['ū', 'ୂ'],
    ['ṛ', 'ୃ'],
    ['ṝ', 'ୄ'],
    ['ḷ', 'ୢ'],
    ['ḹ', 'ୣ'],
    ['e', 'େ'],
    ['ai', 'ୈ'],
    ['o', 'ୋ'],
    ['au', 'ୌ'],
    ['ṃ', 'ଂ'],
    ['ḥ', 'ଃ'],
    ['ã', 'ଁ'],
    ['-', '୍'],
  ]),
  consonants: new Map([
    ['k', 'କ'],
    ['kh', 'ଖ'],
    ['g', 'ଗ'],
    ['gh', 'ଘ'],
    ['ṅ', 'ଙ'],
    ['c', 'ଚ'],
    ['ch', 'ଛ'],
    ['j', 'ଜ'],
    ['jh', 'ଝ'],
    ['ñ', 'ଞ'],
    ['ṭ', 'ଟ'],
    ['ṭh', 'ଠ'],
    ['ḍ', 'ଡ'],
    ['ḍh', 'ଢ'],
    ['ṇ', 'ଣ'],
    ['t', 'ତ'],
    ['th', 'ଥ'],
    ['d', 'ଦ'],
    ['dh', 'ଧ'],
    ['n', 'ନ'],
    ['p', 'ପ'],
    ['ph', 'ଫ'],
    ['b', 'ବ'],
    ['bh', 'ଭ'],
    ['m', 'ମ'],
    ['y', 'ୟ'],
    ['r', 'ର'],
    ['l', 'ଲ'],
    ['v', 'ୱ'],
    ['ś', 'ଶ'],
    ['ṣ', 'ଷ'],
    ['s', 'ସ'],
    ['h', 'ହ'],
    ['ḻ', 'ଳ'],
  ]),
};

const devanagariCharDict: LangMap = {
  misc: new Map([
    ['।', '.'],
    ['॥', '..'],
    ['ऽ', "'"],
    ['ॐ', 'om'],
  ]),
  numbers: new Map([
    ['०', '0'],
    ['१', '1'],
    ['२', '2'],
    ['३', '3'],
    ['४', '4'],
    ['५', '5'],
    ['६', '6'],
    ['७', '7'],
    ['८', '8'],
    ['९', '9'],
  ]),
  vowels: new Map([
    ['a', 'अ'],
    ['ā', 'आ'],
    ['i', 'इ'],
    ['ī', 'ई'],
    ['u', 'उ'],
    ['ū', 'ऊ'],
    ['ṛ', 'ऋ'],
    ['ṝ', 'ॠ'],
    ['ḷ', 'ऌ'],
    ['ḹ', 'ॡ'],
    ['e', 'ए'],
    ['ai', 'ऐ'],
    ['o', 'ओ'],
    ['au', 'औ'],
  ]),
  vowelSigns: new Map([
    ['a', ''],
    ['ā', 'ा'],
    ['i', 'ि'],
    ['ī', 'ी'],
    ['u', 'ु'],
    ['ū', 'ू'],
    ['ṛ', 'ृ'],
    ['ṝ', 'ॄ'],
    ['ḷ', 'ॢ'],
    ['ḹ', 'ॣ'],
    ['e', 'े'],
    ['ai', 'ै'],
    ['o', 'ो'],
    ['au', 'ौ'],
    ['ṃ', 'ं'],
    ['ḥ', 'ः'],
    ['ã', 'ँ'],
    ['-', '्'],
  ]),
  consonants: new Map([
    ['k', 'क'],
    ['kh', 'ख'],
    ['g', 'ग'],
    ['gh', 'घ'],
    ['ṅ', 'ङ'],
    ['c', 'च'],
    ['ch', 'छ'],
    ['j', 'ज'],
    ['jh', 'झ'],
    ['ñ', 'ञ'],
    ['ṭ', 'ट'],
    ['ṭh', 'ठ'],
    ['ḍ', 'ड'],
    ['ḍh', 'ढ'],
    ['ṇ', 'ण'],
    ['t', 'त'],
    ['th', 'थ'],
    ['d', 'द'],
    ['dh', 'ध'],
    ['n', 'न'],
    ['p', 'प'],
    ['ph', 'फ'],
    ['b', 'ब'],
    ['bh', 'भ'],
    ['m', 'म'],
    ['y', 'य'],
    ['r', 'र'],
    ['l', 'ल'],
    ['v', 'व'],
    ['ś', 'श'],
    ['ṣ', 'ष'],
    ['s', 'स'],
    ['h', 'ह'],
    ['ḻ', 'ळ'],
  ]),
};

const unicodeMap: CharMap = new Map([
  ['a', 'ā'],
  ['i', 'ī'],
  ['u', 'ū'],
  ['r', 'ṛ'],
  ['ru', 'ṝ'],
  ['l', 'ḷ'],
  ['lu', 'ḹ'],
  ['ll', 'ḻ'],
  ['t', 'ṭ'],
  ['d', 'ḍ'],
  ['m', 'ṃ'],
  ['h', 'ḥ'],
  ['n', 'ñ'],
  ['nu', 'ṅ'],
  ['nl', 'ṇ'],
  ['su', 'ś'],
  ['sl', 'ṣ'],
  ['.', '।'],
  ['..', '॥'],
  ['au', 'ã'],
]);

const devanagariDataDict: CharMap = new Map([
  ['क', 'k'],
  ['ख', 'kh'],
  ['ग', 'g'],
  ['घ', 'gh'],
  ['ङ', '/nu/'],
  ['च', 'c'],
  ['छ', 'ch'],
  ['ज', 'j'],
  ['झ', 'jh'],
  ['ञ', '/n/'],
  ['ट', '/t/'],
  ['ठ', '/t/h'],
  ['ड', '/d/'],
  ['ढ', '/d/h'],
  ['ण', '/nl/'],
  ['त', 't'],
  ['थ', 'th'],
  ['द', 'd'],
  ['ध', 'dh'],
  ['न', 'n'],
  ['प', 'p'],
  ['फ', 'ph'],
  ['ब', 'b'],
  ['भ', 'bh'],
  ['म', 'm'],
  ['य', 'y'],
  ['र', 'r'],
  ['ल', 'l'],
  ['व', 'v'],
  ['श', '/su/'],
  ['ष', '/sl/'],
  ['स', 's'],
  ['ह', 'h'],
  ['ळ', '/ll/'],

  ['अ', 'a'],
  ['आ', '/a/'],
  ['इ', 'i'],
  ['ई', '/i/'],
  ['उ', 'u'],
  ['ऊ', '/u/'],
  ['ऋ', '/r/'],
  ['ॠ', '/ru/'],
  ['ऌ', '/l/'],
  ['ॡ', '/lu/'],
  ['ए', 'e'],
  ['ऐ', 'ai'],
  ['ओ', 'o'],
  ['औ', 'au'],

  ['', 'a'],
  ['ा', '/a/'],
  ['ि', 'i'],
  ['ी', '/i/'],
  ['ु', 'u'],
  ['ू', '/u/'],
  ['ृ', '/r/'],
  ['ॄ', '/ru/'],
  ['ॢ', '/l/'],
  ['ॣ', '/lu/'],
  ['े', 'e'],
  ['ै', 'ai'],
  ['ो', 'o'],
  ['ौ', 'au'],
  ['ं', '/m/'],
  ['ः', '/h/'],
  ['ँ', '/au/'],
  ['्', '-'],

  ['ऽ', "\\/'/\\"],
  ['।', '\\/./\\'],
  ['॥', '\\/../\\'],
  ['ॐ', '\\/om/\\'],

  ['०', '\\/0/\\'],
  ['१', '\\/1/\\'],
  ['२', '\\/2/\\'],
  ['३', '\\/3/\\'],
  ['४', '\\/4/\\'],
  ['५', '\\/5/\\'],
  ['६', '\\/6/\\'],
  ['७', '\\/7/\\'],
  ['८', '\\/8/\\'],
  ['९', '\\/9/\\'],
]);

const iastDataDict: CharMap = new Map([
  ['०', '0'],
  ['१', '1'],
  ['२', '2'],
  ['३', '3'],
  ['४', '4'],
  ['५', '5'],
  ['६', '6'],
  ['७', '7'],
  ['८', '8'],
  ['९', '9'],
  ['ā', 'a'],
  ['ī', 'i'],
  ['ū', 'u'],
  ['ṛ', 'r'],
  ['ṝ', 'ru'],
  ['ḷ', 'l'],
  ['ḹ', 'lu'],
  ['ḻ', 'll'],
  ['ṭ', 't'],
  ['ḍ', 'd'],
  ['ṃ', 'm'],
  ['ḥ', 'h'],
  ['ñ', 'n'],
  ['ṅ', 'nu'],
  ['ṇ', 'nl'],
  ['ś', 'su'],
  ['ṣ', 'sl'],
  ['ऽ', "'"],
  ['।', '.'],
  ['॥', '..'],
  ['ॐ', 'om'],
  ['ã', 'au'],
]);

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

const slpDataDict: CharMap = new Map([
  ['a', 'a'],
  ['A', 'ā'],
  ['i', 'i'],
  ['I', 'ī'],
  ['u', 'u'],
  ['U', 'ū'],
  ['e', 'e'],
  ['E', 'ai'],
  ['o', 'o'],
  ['O', 'au'],
  ['f', 'ṛ'],
  ['F', 'ṝ'],
  ['x', 'ḷ'],
  ['X', 'ḹ'],
  ['L', 'ḻ'],
  ['|', 'ḻh'],
  ['k', 'k'],
  ['K', 'kh'],
  ['g', 'g'],
  ['G', 'gh'],
  ['N', 'ṅ'],
  ['c', 'c'],
  ['C', 'ch'],
  ['j', 'j'],
  ['J', 'jh'],
  ['Y', 'ñ'],
  ['w', 'ṭ'],
  ['W', 'ṭh'],
  ['q', 'ḍ'],
  ['Q', 'ḍh'],
  ['R', 'ṇ'],
  ['t', 't'],
  ['T', 'th'],
  ['d', 'd'],
  ['D', 'dh'],
  ['n', 'n'],
  ['p', 'p'],
  ['P', 'ph'],
  ['b', 'b'],
  ['B', 'bh'],
  ['m', 'm'],
  ['M', 'ṃ'],
  ['H', 'ḥ'],
  ['y', 'y'],
  ['r', 'r'],
  ['l', 'l'],
  ['v', 'v'],
  ['S', 'ś'],
  ['z', 'ṣ'],
  ['s', 's'],
  ['h', 'h'],
  ["'", "'"],
  ['~', 'ã'],
]);

function createScriptMap(obj: {
  [k in
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | 'om'
    | "'"]: string;
}): CharMap {
  return new Map(Object.entries(obj));
}

/**
 * Function to map special characters to Unicode
 *
 * @param lang input UAST string
 * @returns parsed AnDy output string
 */
function createHandleUnicode(lang: LangList): (uast: string) => string {
  let scriptMap: CharMap = createScriptMap({
    '0': '०',
    '1': '१',
    '2': '२',
    '3': '३',
    '4': '४',
    '5': '५',
    '6': '६',
    '7': '७',
    '8': '८',
    '9': '९',
    om: 'ॐ',
    "'": 'ऽ',
  });

  switch (lang) {
    case 'gu':
      scriptMap = createScriptMap({
        '0': '૦',
        '1': '૧',
        '2': '૨',
        '3': '૩',
        '4': '૪',
        '5': '૫',
        '6': '૬',
        '7': '૭',
        '8': '૮',
        '9': '૯',
        om: 'ॐ',
        "'": 'ઽ',
      });
      break;

    case 'or':
      scriptMap = createScriptMap({
        '0': '୦',
        '1': '୧',
        '2': '୨',
        '3': '୩',
        '4': '୪',
        '5': '୫',
        '6': '୬',
        '7': '୭',
        '8': '୮',
        '9': '୯',
        om: 'ଓଁ',
        "'": 'ଽ',
      });
      break;

    case 'kn':
      scriptMap = createScriptMap({
        '0': '೦',
        '1': '೧',
        '2': '೨',
        '3': '೩',
        '4': '೪',
        '5': '೫',
        '6': '೬',
        '7': '೭',
        '8': '೮',
        '9': '೯',
        om: 'ಓಂ',
        "'": 'ಽ',
      });
      break;

    case 'te':
      scriptMap = createScriptMap({
        '0': '౦',
        '1': '౧',
        '2': '౨',
        '3': '౩',
        '4': '౪',
        '5': '౫',
        '6': '౬',
        '7': '౭',
        '8': '౮',
        '9': '౯',
        "'": 'ఽ',
        om: 'ఓం',
      });
      break;

    case 'ml':
      scriptMap = createScriptMap({
        '0': '൦',
        '1': '൧',
        '2': '൨',
        '3': '൩',
        '4': '൪',
        '5': '൫',
        '6': '൬',
        '7': '൭',
        '8': '൮',
        '9': '൯',
        "'": 'ഽ',
        om: 'ഓം',
      });
      break;

    case 'ta':
      scriptMap = createScriptMap({
        '0': '௦',
        '1': '௧',
        '2': '௨',
        '3': '௩',
        '4': '௪',
        '5': '௫',
        '6': '௬',
        '7': '௭',
        '8': '௮',
        '9': '௯',
        "'": '𑌽',
        om: '𑍐',
      });
      break;

    default:
      break;
  }

  const scriptDict: CharMap = new Map([...unicodeMap, ...scriptMap]);

  return function handleUnicode(uast: string): string {
    uast = uast.toLowerCase();

    if (uast.startsWith('\\')) {
      uast = uast.slice(1);
    }

    if (uast.endsWith('\\')) {
      uast = uast.slice(0, uast.length - 1);
    }

    const str = Array.from(uast);
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

        arr.push(scriptDict.get(char.join('')) ?? '');
        i++;
        continue;
      }

      arr.push(curr);
      i++;
    }

    return arr.join('').normalize();
  };
}

function createScriptFunction(lang: LangList): (data: string) => string {
  let obj: CharMap;

  switch (lang) {
    case 'gu':
      obj = new Map([
        ['।', '।'],
        ['॥', '॥'],
        ['ઽ', 'ऽ'],
        ['ॐ', 'ॐ'],

        ['૦', '०'],
        ['૧', '१'],
        ['૨', '२'],
        ['૩', '३'],
        ['૪', '४'],
        ['૫', '५'],
        ['૬', '६'],
        ['૭', '७'],
        ['૮', '८'],
        ['૯', '९'],

        ['અ', 'अ'],
        ['આ', 'आ'],
        ['ઇ', 'इ'],
        ['ઈ', 'ई'],
        ['ઉ', 'उ'],
        ['ઊ', 'ऊ'],
        ['ઋ', 'ऋ'],
        ['ૠ', 'ॠ'],
        ['ઌ', 'ऌ'],
        ['ૡ', 'ॡ'],
        ['એ', 'ए'],
        ['ઐ', 'ऐ'],
        ['ઓ', 'ओ'],
        ['ઔ', 'औ'],

        ['ા', 'ा'],
        ['િ', 'ि'],
        ['ી', 'ी'],
        ['ુ', 'ु'],
        ['ૂ', 'ू'],
        ['ૃ', 'ृ'],
        ['ૄ', 'ॄ'],
        ['ૢ', 'ॢ'],
        ['ૣ', 'ॣ'],
        ['ે', 'े'],
        ['ૈ', 'ै'],
        ['ો', 'ो'],
        ['ૌ', 'ौ'],
        ['ં', 'ं'],
        ['ઃ', 'ः'],
        ['ઁ', 'ँ'],
        ['્', '्'],

        ['ક', 'क'],
        ['ખ', 'ख'],
        ['ગ', 'ग'],
        ['ઘ', 'घ'],
        ['ઙ', 'ङ'],
        ['ચ', 'च'],
        ['છ', 'छ'],
        ['જ', 'ज'],
        ['ઝ', 'झ'],
        ['ઞ', 'ञ'],
        ['ટ', 'ट'],
        ['ઠ', 'ठ'],
        ['ડ', 'ड'],
        ['ઢ', 'ढ'],
        ['ણ', 'ण'],
        ['ત', 'त'],
        ['થ', 'थ'],
        ['દ', 'द'],
        ['ધ', 'ध'],
        ['ન', 'न'],
        ['પ', 'प'],
        ['ફ', 'फ'],
        ['બ', 'ब'],
        ['ભ', 'भ'],
        ['મ', 'म'],
        ['ય', 'य'],
        ['ર', 'र'],
        ['લ', 'ल'],
        ['વ', 'व'],
        ['શ', 'श'],
        ['ષ', 'ष'],
        ['સ', 'स'],
        ['હ', 'ह'],
        ['ળ', 'ळ'],
      ]);
      break;

    case 'or':
      obj = new Map([
        ['।', '।'],
        ['॥', '॥'],
        ['ଽ', 'ऽ'],
        ['ଓଁ', 'ॐ'],

        ['୦', '०'],
        ['୧', '१'],
        ['୨', '२'],
        ['୩', '३'],
        ['୪', '४'],
        ['୫', '५'],
        ['୬', '६'],
        ['୭', '७'],
        ['୮', '८'],
        ['୯', '९'],

        ['ଅ', 'अ'],
        ['ଆ', 'आ'],
        ['ଇ', 'इ'],
        ['ଈ', 'ई'],
        ['ଉ', 'उ'],
        ['ଊ', 'ऊ'],
        ['ଋ', 'ऋ'],
        ['ୠ', 'ॠ'],
        ['ଌ', 'ऌ'],
        ['ୡ', 'ॡ'],
        ['ଏ', 'ए'],
        ['ଐ', 'ऐ'],
        ['ଓ', 'ओ'],
        ['ଔ', 'औ'],

        ['ା', 'ा'],
        ['ି', 'ि'],
        ['ୀ', 'ी'],
        ['ୁ', 'ु'],
        ['ୂ', 'ू'],
        ['ୃ', 'ृ'],
        ['ୄ', 'ॄ'],
        ['ୢ', 'ॢ'],
        ['ୣ', 'ॣ'],
        ['େ', 'े'],
        ['ୈ', 'ै'],
        ['ୋ', 'ो'],
        ['ୌ', 'ौ'],
        ['ଂ', 'ं'],
        ['ଃ', 'ः'],
        ['ଁ', 'ँ'],
        ['୍', '्'],

        ['କ', 'क'],
        ['ଖ', 'ख'],
        ['ଗ', 'ग'],
        ['ଘ', 'घ'],
        ['ଙ', 'ङ'],
        ['ଚ', 'च'],
        ['ଛ', 'छ'],
        ['ଜ', 'ज'],
        ['ଝ', 'झ'],
        ['ଞ', 'ञ'],
        ['ଟ', 'ट'],
        ['ଠ', 'ठ'],
        ['ଡ', 'ड'],
        ['ଢ', 'ढ'],
        ['ଣ', 'ण'],
        ['ତ', 'त'],
        ['ଥ', 'थ'],
        ['ଦ', 'द'],
        ['ଧ', 'ध'],
        ['ନ', 'न'],
        ['ପ', 'प'],
        ['ଫ', 'फ'],
        ['ବ', 'ब'],
        ['ଭ', 'भ'],
        ['ମ', 'म'],
        ['ୟ', 'य'],
        ['ର', 'र'],
        ['ଲ', 'ल'],
        ['ୱ', 'व'],
        ['ଶ', 'श'],
        ['ଷ', 'ष'],
        ['ସ', 'स'],
        ['ହ', 'ह'],
        ['ଳ', 'ळ'],
      ]);
      break;

    case 'kn':
      obj = new Map([
        ['।', '।'],
        ['॥', '॥'],
        ['ಽ', 'ऽ'],
        ['ಓಂ', 'ॐ'],

        ['೦', '०'],
        ['೧', '१'],
        ['೨', '२'],
        ['೩', '३'],
        ['೪', '४'],
        ['೫', '५'],
        ['೬', '६'],
        ['೭', '७'],
        ['೮', '८'],
        ['೯', '९'],

        ['ಅ', 'अ'],
        ['ಆ', 'आ'],
        ['ಇ', 'इ'],
        ['ಈ', 'ई'],
        ['ಉ', 'उ'],
        ['ಊ', 'ऊ'],
        ['ಋ', 'ऋ'],
        ['ೠ', 'ॠ'],
        ['ಌ', 'ऌ'],
        ['ೡ', 'ॡ'],
        ['ಎ', 'ए'],
        ['ಐ', 'ऐ'],
        ['ಒ', 'ओ'],
        ['ಔ', 'औ'],

        ['ಾ', 'ा'],
        ['ಿ', 'ि'],
        ['ೀ', 'ी'],
        ['ು', 'ु'],
        ['ೂ', 'ू'],
        ['ೃ', 'ृ'],
        ['ೄ', 'ॄ'],
        ['ೢ', 'ॢ'],
        ['ೣ', 'ॣ'],
        ['ೆ', 'े'],
        ['ೈ', 'ै'],
        ['ೊ', 'ो'],
        ['ೌ', 'ौ'],
        ['ಂ', 'ं'],
        ['ಃ', 'ः'],
        ['ಁ', 'ँ'],
        ['್', '्'],

        ['ಕ', 'क'],
        ['ಖ', 'ख'],
        ['ಗ', 'ग'],
        ['ಘ', 'घ'],
        ['ಙ', 'ङ'],
        ['ಚ', 'च'],
        ['ಛ', 'छ'],
        ['ಜ', 'ज'],
        ['ಝ', 'झ'],
        ['ಞ', 'ञ'],
        ['ಟ', 'ट'],
        ['ಠ', 'ठ'],
        ['ಡ', 'ड'],
        ['ಢ', 'ढ'],
        ['ಣ', 'ण'],
        ['ತ', 'त'],
        ['ಥ', 'थ'],
        ['ದ', 'द'],
        ['ಧ', 'ध'],
        ['ನ', 'न'],
        ['ಪ', 'प'],
        ['ಫ', 'फ'],
        ['ಬ', 'ब'],
        ['ಭ', 'भ'],
        ['ಮ', 'म'],
        ['ಯ', 'य'],
        ['ರ', 'र'],
        ['ಲ', 'ल'],
        ['ವ', 'व'],
        ['ಶ', 'श'],
        ['ಷ', 'ष'],
        ['ಸ', 'स'],
        ['ಹ', 'ह'],
        ['ಳ', 'ळ'],
      ]);
      break;

    case 'sa':
      obj = new Map();
      break;

    default:
      break;
  }

  return function scriptToDevanagari(data: string): string {
    return Array.from(data)
      .map(i => obj.get(i) ?? '')
      .join('')
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
    .replaceAll(/[\[\]^~@#$%&*_;\n\v\t\r\f]/gu, '')
    .split('\\')
    .map(split => {
      if (split === 'ॐ') {
        return 'oṃ';
      }

      if (devanagariCharDict.numbers.has(split)) {
        return devanagariCharDict.numbers.get(split);
      }

      if (devanagariCharDict.misc.has(split)) {
        return devanagariCharDict.misc.get(split);
      }

      if (split === 'ḥ' || split === 'ṃ' || split === 'ã') {
        return split;
      }

      const str = Array.from(split);

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

        if ([',', '?', '!', '"', '-', ':', '(', ')', '='].includes(curr)) {
          arr.push(curr);
          i++;
          continue;
        }

        const next = str.at(i + 1) ?? '';

        if (next === 'ḥ' || next === 'ṃ' || next === 'ã') {
          if (devanagariCharDict.consonants.has(curr)) {
            arr.push(`${curr}a${next}`);
          } else {
            arr.push(`${curr}${next}`);
          }

          i += 2;
          continue;
        }

        if (devanagariCharDict.vowels.has(curr)) {
          arr.push(curr);
          i++;

          continue;
        }

        if (i === str.length - 1) {
          if (curr === 'ḥ' || curr === 'ṃ' || curr === 'ã') {
            arr.push(curr);
            i++;
            continue;
          }

          arr.push(`${curr}a`);
          i++;
          continue;
        }

        if (next === 'h' && unAspiratedConsonants.includes(curr)) {
          const last = str.at(i + 2) ?? '';
          if (devanagariCharDict.vowelSigns.has(last) === false) {
            arr.push(`${curr}${next}a`);
            i += 2;
            continue;
          }

          if (last === 'ḥ' || last === 'ṃ' || last === 'ã') {
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

        if (devanagariCharDict.vowelSigns.has(next)) {
          arr.push(curr);
          i++;
          continue;
        }

        if (curr === 'ḥ' || curr === 'ṃ' || curr === 'ã') {
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
  const str = Array.from(
    data.normalize().replaceAll(/[\[\]^~@#$%&*\-_;]/gu, '')
  );
  let arr: string[] = [];

  for (let i = 0; i < str.length; ) {
    const curr = str.at(i) ?? '';
    const next = str.at(i + 1) ?? '';

    if (devanagariCharDict.consonants.has(curr)) {
      if (unAspiratedConsonants.includes(curr)) {
        if (next === 'a' && (str.at(i + 2) ?? '') === 'h') {
          arr.push(`${curr}\\`);
          i += 2;
          continue;
        }

        if (next === 'h') {
          let last = str.at(i + 2) ?? '';
          if (devanagariCharDict.consonants.has(last)) {
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
        devanagariCharDict.consonants.has(next) ||
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
      devanagariCharDict.vowels.has(curr) &&
      devanagariCharDict.consonants.has(next)
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

    const hasDash = curr.includes('-') ? true : false;

    curr = curr.replaceAll(/[\\-]/gu, '');
    for (let j of [...devanagariCharDict.misc.values()]
      .filter(i => ['om', '..'].includes(i) === false)
      .concat([...devanagariCharDict.numbers.values()])) {
      if (curr === '.' && arr[k + 1] === '.') {
        curr = curr.replaceAll(curr, '\\/../\\');
        k++;
        continue;
      }

      curr = curr.replaceAll(j, `\\/${j}/\\`);
    }

    ans.push(
      curr +
        (unAspiratedConsonants.includes(curr) && (arr[k + 1] ?? '') === 'h'
          ? 'a'
          : '') +
        (hasDash ? '-' : '') +
        (devanagariCharDict.vowels.has(curr) ? '\\' : '')
    );
  }

  if (
    devanagariCharDict.consonants.has(ans.at(-1) ?? '') &&
    (str.at(-1) ?? '') !== 'a'
  ) {
    ans.push('-');
  }

  return Array.from(ans.join(''))
    .map(i => (iastDataDict.has(i) ? `/${iastDataDict.get(i)}/` : i))
    .join('')
    .normalize();
}

/**
 * Function to create the function of parser
 *
 * @param lang Language to choose as renderer
 * @returns Function that can parse the `lang`
 */
function createDataFunction(lang: LangList): (data: string) => string {
  let obj: LangMap = devanagariCharDict;

  switch (lang) {
    case 'gu':
      obj = gujaratiCharDict;
      break;

    case 'or':
      obj = odiaCharDict;
      break;

    case 'kn':
      obj = kannadaCharDict;
      break;

    case 'te':
      obj = teluguCharDict;
      break;

    case 'ml':
      obj = malayalamCharDict;
      break;

    case 'ta':
      obj = tamilCharDict;
      break;

    default:
      break;
  }

  return function dataToScript(data: string): string {
    return data
      .split('\\')
      .map(split => {
        if (obj.misc.has(split) || obj.numbers.has(split)) {
          return split;
        }

        if (obj.vowels.has(split)) {
          return obj.vowels.get(split);
        }

        let arr: string[] = [];

        const str = Array.from(split);

        for (let i = 0; i < str.length; ) {
          const curr = str[i] ?? '';

          if (lang === 'sa') {
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
          }

          if ([',', '?', '!', '"', ':', '(', ')', '='].includes(curr)) {
            arr.push(curr);
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
            arr.push(obj.consonants.get(consonant) ?? '');

            continue;
          }

          arr.push(obj.consonants.get(curr) ?? '');

          let vowel: string = '';
          if (curr === 'a' && (str[i + 1] === 'i' || str[i + 1] === 'u')) {
            vowel = str.slice(i, i + 2).join('');
            i += 2;
          } else {
            vowel = curr;
            i++;
          }

          arr.push(obj.vowelSigns.get(vowel) ?? '');
        }

        return arr.join('');
      })
      .join('')
      .normalize();
  };
}

/**
 * Convert देवनागरी to UAST
 *
 * @param data देवनागरी string
 * @returns UAST string
 */
function devanagariToUAST(data: string): string {
  const str = Array.from(data.normalize());
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

    const val = devanagariDataDict.get(curr) ?? curr;
    const next_val = devanagariDataDict.get(next) ?? next;

    if (
      [...devanagariCharDict.vowels.values()].includes(curr) &&
      [...devanagariCharDict.consonants.values()].includes(next)
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
    .map(i => slpDataDict.get(i) ?? '')
    .join('')
    .normalize();
}

type FuncList = 'handleUnicode' | 'dataFunction' | 'scriptToDevanagari';

type Builder = {
  [k in LangList]: {
    [f in FuncList]: ReturnType<
      typeof createDataFunction &
        typeof createHandleUnicode &
        typeof createScriptFunction
    >;
  };
};

function makeBuilder(): Builder {
  const y: Partial<Builder> = {};
  for (const l of langs) {
    y[l] = {
      dataFunction: createDataFunction(l),
      handleUnicode: createHandleUnicode(l),
      scriptToDevanagari: createScriptFunction(l),
    };
  }

  return y as Required<Builder>;
}

const builderFuncs = makeBuilder();

export const convertor: {
  [from: string]: {
    [to: string]: ((data: string) => string)[];
  };
} = {
  uast: {
    iast: [builderFuncs['sa']['handleUnicode'], dataToIAST],
    devanagari: [
      builderFuncs['sa']['handleUnicode'],
      builderFuncs['sa']['dataFunction'],
    ],
    guj: [
      builderFuncs['gu']['handleUnicode'],
      builderFuncs['gu']['dataFunction'],
    ],
    odia: [
      builderFuncs['or']['handleUnicode'],
      builderFuncs['or']['dataFunction'],
    ],
    kn: [
      builderFuncs['kn']['handleUnicode'],
      builderFuncs['kn']['dataFunction'],
    ],
    te: [
      builderFuncs['te']['handleUnicode'],
      builderFuncs['te']['dataFunction'],
    ],
    ml: [
      builderFuncs['ml']['handleUnicode'],
      builderFuncs['ml']['dataFunction'],
    ],
    ta: [
      builderFuncs['ta']['handleUnicode'],
      builderFuncs['ta']['dataFunction'],
    ],
  },
  raw: {
    iast: [builderFuncs['sa']['handleUnicode']],
    devanagari: [
      builderFuncs['sa']['handleUnicode'],
      iastToUAST,
      builderFuncs['sa']['handleUnicode'],
      builderFuncs['sa']['dataFunction'],
    ],
    uast: [builderFuncs['sa']['handleUnicode'], iastToUAST],
    guj: [
      builderFuncs['gu']['handleUnicode'],
      iastToUAST,
      builderFuncs['gu']['handleUnicode'],
      builderFuncs['gu']['dataFunction'],
    ],
    odia: [
      builderFuncs['or']['handleUnicode'],
      iastToUAST,
      builderFuncs['or']['handleUnicode'],
      builderFuncs['or']['dataFunction'],
    ],
    kn: [
      builderFuncs['kn']['handleUnicode'],
      iastToUAST,
      builderFuncs['kn']['handleUnicode'],
      builderFuncs['kn']['dataFunction'],
    ],
    te: [
      builderFuncs['te']['handleUnicode'],
      iastToUAST,
      builderFuncs['te']['handleUnicode'],
      builderFuncs['te']['dataFunction'],
    ],
    ml: [
      builderFuncs['ml']['handleUnicode'],
      iastToUAST,
      builderFuncs['ml']['handleUnicode'],
      builderFuncs['ml']['dataFunction'],
    ],
    ta: [
      builderFuncs['ta']['handleUnicode'],
      iastToUAST,
      builderFuncs['ta']['handleUnicode'],
      builderFuncs['ta']['dataFunction'],
    ],
  },
  slp: {
    iast: [slpToIAST],
    uast: [slpToIAST, iastToUAST],
    devanagari: [
      slpToIAST,
      iastToUAST,
      builderFuncs['sa']['handleUnicode'],
      builderFuncs['sa']['dataFunction'],
    ],
    guj: [
      slpToIAST,
      iastToUAST,
      builderFuncs['gu']['handleUnicode'],
      builderFuncs['gu']['dataFunction'],
    ],
    odia: [
      slpToIAST,
      iastToUAST,
      builderFuncs['or']['handleUnicode'],
      builderFuncs['or']['dataFunction'],
    ],
    kn: [
      slpToIAST,
      iastToUAST,
      builderFuncs['kn']['handleUnicode'],
      builderFuncs['kn']['dataFunction'],
    ],
    te: [
      slpToIAST,
      iastToUAST,
      builderFuncs['te']['handleUnicode'],
      builderFuncs['te']['dataFunction'],
    ],
    ml: [
      slpToIAST,
      iastToUAST,
      builderFuncs['ml']['handleUnicode'],
      builderFuncs['ml']['dataFunction'],
    ],
    ta: [
      slpToIAST,
      iastToUAST,
      builderFuncs['ta']['handleUnicode'],
      builderFuncs['ta']['dataFunction'],
    ],
  },
  devanagari: {
    uast: [devanagariToUAST],
    iast: [devanagariToUAST, builderFuncs['sa']['handleUnicode'], dataToIAST],
    guj: [
      devanagariToUAST,
      builderFuncs['gu']['handleUnicode'],
      builderFuncs['gu']['dataFunction'],
    ],
    odia: [
      devanagariToUAST,
      builderFuncs['or']['handleUnicode'],
      builderFuncs['or']['dataFunction'],
    ],
    kn: [
      devanagariToUAST,
      builderFuncs['kn']['handleUnicode'],
      builderFuncs['kn']['dataFunction'],
    ],
    te: [
      devanagariToUAST,
      builderFuncs['te']['handleUnicode'],
      builderFuncs['te']['dataFunction'],
    ],
    ml: [
      devanagariToUAST,
      builderFuncs['ml']['handleUnicode'],
      builderFuncs['ml']['dataFunction'],
    ],
    ta: [
      devanagariToUAST,
      builderFuncs['ta']['handleUnicode'],
      builderFuncs['ta']['dataFunction'],
    ],
  },
  iast: {
    uast: [iastToUAST],
    devanagari: [
      iastToUAST,
      builderFuncs['sa']['handleUnicode'],
      builderFuncs['sa']['dataFunction'],
    ],
    guj: [
      iastToUAST,
      builderFuncs['gu']['handleUnicode'],
      builderFuncs['gu']['dataFunction'],
    ],
    odia: [
      iastToUAST,
      builderFuncs['or']['handleUnicode'],
      builderFuncs['or']['dataFunction'],
    ],
    kn: [
      iastToUAST,
      builderFuncs['kn']['handleUnicode'],
      builderFuncs['kn']['dataFunction'],
    ],
    te: [
      iastToUAST,
      builderFuncs['te']['handleUnicode'],
      builderFuncs['te']['dataFunction'],
    ],
    ml: [
      iastToUAST,
      builderFuncs['ml']['handleUnicode'],
      builderFuncs['ml']['dataFunction'],
    ],
    ta: [
      iastToUAST,
      builderFuncs['ta']['handleUnicode'],
      builderFuncs['ta']['dataFunction'],
    ],
  },
  guj: {
    devanagari: [builderFuncs['gu']['scriptToDevanagari']],
    uast: [builderFuncs['gu']['scriptToDevanagari'], devanagariToUAST],
    iast: [
      builderFuncs['gu']['scriptToDevanagari'],
      devanagariToUAST,
      builderFuncs['sa']['handleUnicode'],
      dataToIAST,
    ],
    odia: [
      builderFuncs['gu']['scriptToDevanagari'],
      devanagariToUAST,
      builderFuncs['or']['handleUnicode'],
      builderFuncs['or']['dataFunction'],
    ],
    kn: [
      builderFuncs['gu']['scriptToDevanagari'],
      devanagariToUAST,
      builderFuncs['kn']['handleUnicode'],
      builderFuncs['kn']['dataFunction'],
    ],
    te: [
      builderFuncs['gu']['scriptToDevanagari'],
      devanagariToUAST,
      builderFuncs['te']['handleUnicode'],
      builderFuncs['te']['dataFunction'],
    ],
    ml: [
      builderFuncs['gu']['scriptToDevanagari'],
      devanagariToUAST,
      builderFuncs['ml']['handleUnicode'],
      builderFuncs['ml']['dataFunction'],
    ],
    ta: [
      builderFuncs['gu']['scriptToDevanagari'],
      devanagariToUAST,
      builderFuncs['ta']['handleUnicode'],
      builderFuncs['ta']['dataFunction'],
    ],
  },
  odia: {
    devanagari: [builderFuncs['or']['scriptToDevanagari']],
    uast: [builderFuncs['or']['scriptToDevanagari'], devanagariToUAST],
    iast: [
      builderFuncs['or']['scriptToDevanagari'],
      devanagariToUAST,
      builderFuncs['sa']['handleUnicode'],
      dataToIAST,
    ],
    guj: [
      builderFuncs['or']['scriptToDevanagari'],
      devanagariToUAST,
      builderFuncs['gu']['handleUnicode'],
      builderFuncs['gu']['dataFunction'],
    ],
    kn: [
      builderFuncs['or']['scriptToDevanagari'],
      devanagariToUAST,
      builderFuncs['kn']['handleUnicode'],
      builderFuncs['kn']['dataFunction'],
    ],
    te: [
      builderFuncs['or']['scriptToDevanagari'],
      devanagariToUAST,
      builderFuncs['te']['handleUnicode'],
      builderFuncs['te']['dataFunction'],
    ],
    ml: [
      builderFuncs['or']['scriptToDevanagari'],
      devanagariToUAST,
      builderFuncs['ml']['handleUnicode'],
      builderFuncs['ml']['dataFunction'],
    ],
    ta: [
      builderFuncs['or']['scriptToDevanagari'],
      devanagariToUAST,
      builderFuncs['ta']['handleUnicode'],
      builderFuncs['ta']['dataFunction'],
    ],
  },
  kn: {
    devanagari: [builderFuncs['kn']['scriptToDevanagari']],
    uast: [builderFuncs['kn']['scriptToDevanagari'], devanagariToUAST],
    iast: [
      builderFuncs['kn']['scriptToDevanagari'],
      devanagariToUAST,
      builderFuncs['sa']['handleUnicode'],
      dataToIAST,
    ],
    guj: [
      builderFuncs['kn']['scriptToDevanagari'],
      devanagariToUAST,
      builderFuncs['gu']['handleUnicode'],
      builderFuncs['gu']['dataFunction'],
    ],
    or: [
      builderFuncs['kn']['scriptToDevanagari'],
      devanagariToUAST,
      builderFuncs['or']['handleUnicode'],
      builderFuncs['or']['dataFunction'],
    ],
    te: [
      builderFuncs['kn']['scriptToDevanagari'],
      devanagariToUAST,
      builderFuncs['te']['handleUnicode'],
      builderFuncs['te']['dataFunction'],
    ],
    ml: [
      builderFuncs['kn']['scriptToDevanagari'],
      devanagariToUAST,
      builderFuncs['ml']['handleUnicode'],
      builderFuncs['ml']['dataFunction'],
    ],
    ta: [
      builderFuncs['kn']['scriptToDevanagari'],
      devanagariToUAST,
      builderFuncs['ta']['handleUnicode'],
      builderFuncs['ta']['dataFunction'],
    ],
  },
};
