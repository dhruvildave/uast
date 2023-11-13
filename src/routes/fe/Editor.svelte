<script lang="ts">
  import * as utils from "../be/utils";

  const placeholders = {
    uast: `a /a/ i /i/ u /u/
/r/ /ru/ /l/ /lu/
e ai o au

k kh g gh /nu/
c ch j jh /n/
/t/ /t/h /d/ /d/h /nl/
t th d dh n
p ph b bh m
y r l v
/su/ /sl/ s
h

k k/a/ ki k/i/ ku k/u/
k/r/ k/ru/ k/l/ k/lu/
ke kai ko kau
k/m/ k/h/ k- \\/'/\\`,
    iast: `a ā i ī u ū
ṛ ṝ ḷ ḹ
e ai o au

ka kha ga gha ṅa
ca cha ja jha ña
ṭa ṭha ḍa ḍha ṇa
ta tha da dha na
pa pha ba bha ma
ya ra la va
śa ṣa sa
ha

ka kā ki kī ku kū
kṛ kṝ kḷ kḹ
ke kai ko kau
kaṃ kaḥ k '`,
    gu: `અ આ ઇ ઈ ઉ ઊ
ઋ ૠ ઌ ૡ
એ ઐ ઓ ઔ

ક ખ ગ ઘ ઙ
ચ છ જ ઝ ઞ
ટ ઠ ડ ઢ ણ
ત થ દ ધ ન
પ ફ બ ભ મ
ય ર લ વ
શ ષ સ
હ

ક કા કિ કી કુ કૂ
કૃ કૄ કૢ કૣ
કે કૈ કો કૌ
કં કઃ ક્ ઽ`,
    or: `ଅ ଆ ଇ ଈ ଉ ଊ
ଋ ୠ ଌ ୡ
ଏ ଐ ଓ ଔ

କ ଖ ଗ ଘ ଙ
ଚ ଛ ଜ ଝ ଞ
ଟ ଠ ଡ ଢ ଣ
ତ ଥ ଦ ଧ ନ
ପ ଫ ବ ଭ ମ
ୟ ର ଲ ୱ
ଶ ଷ ସ
ହ

କ କା କି କୀ କୁ କୂ
କୃ କୄ କୢ କୣ
କେ କୈ କୋ କୌ
କଂ କଃ କ୍ ଽ`,
    devanāgarī: `अ आ इ ई उ ऊ
ऋ ॠ ऌ ॡ
ए ऐ ओ औ

क ख ग घ ङ
च छ ज झ ञ
ट ठ ड ढ ण
त थ द ध न
प फ ब भ म
य र ल व
श ष स
ह

क का कि की कु कू
कृ कॄ कॢ कॣ
के कै को कौ
कं कः क् ऽ`,
    slp: `a A i I u U
f F x X
e E o O

ka Ka ga Ga Na
ca Ca ja Ja Ya
wa Wa qa Qa Ra
ta Ta da Da na
pa Pa ba Ba ma
ya ra la va
Sa za sa
ha

ka kA ki kI ku kU
kf kF kx kX
ke kE ko kO
kaM kaH k '`,
    kn: `ಅ ಆ ಇ ಈ ಉ ಊ
ಋ ೠ ಌ ೡ
ಎ ಐ ಒ ಔ

ಕ ಖ ಗ ಘ ಙ
ಚ ಛ ಜ ಝ ಞ
ಟ ಠ ಡ ಢ ಣ
ತ ಥ ದ ಧ ನ
ಪ ಫ ಬ ಭ ಮ
ಯ ರ ಲ ವ
ಶ ಷ ಸ
ಹ

ಕ ಕಾ ಕಿ ಕೀ ಕು ಕೂ
ಕೃ ಕೄ ಕೢ ಕೣ
ಕೆ ಕೈ ಕೊ ಕೌ
ಕಂ ಕಃ ಕ್ ಽ`,
    te: `అ ఆ ఇ ఈ ఉ ఊ
ఋ ౠ ఌ ౡ
ఎ ఐ ఒ ఔ

క ఖ గ ఘ ఙ
చ ఛ జ ఝ ఞ
ట ఠ డ ఢ ణ
త థ ద ధ న
ప ఫ బ భ మ
య ర ల వ
శ ష స
హ

క కా కి కీ కు కూ
కృ కౄ కౢ కౣ
కె కై కొ కౌ
కం కః క్ ఽ`,
    ta: `𑌅 𑌆 𑌇 𑌈 𑌉 𑌊
𑌋 𑍠 𑌌 𑍡
𑌏 𑌐 𑌓 𑌔

𑌕 𑌖 𑌗 𑌘 𑌙
𑌚 𑌛 𑌜 𑌝 𑌞
𑌟 𑌠 𑌡 𑌢 𑌣
𑌤 𑌥 𑌦 𑌧 𑌨
𑌪 𑌫 𑌬 𑌭 𑌮
𑌯 𑌰 𑌲 𑌵
𑌶 𑌷 𑌸
𑌹

𑌕 𑌕𑌾 𑌕𑌿 𑌕𑍀 𑌕𑍁 𑌕𑍂
𑌕𑍃 𑌕𑍄 𑌕𑍢 𑌕𑍣
𑌕𑍇 𑌕𑍈 𑌕𑍋 𑌕𑍗
𑌕𑌂 𑌕𑌃 𑌕𑍍 𑌽`,
    ml: `അ ആ ഇ ഈ ഉ ഊ
ഋ ൠ ഌ ൡ
എ ഐ ഒ ഔ

ക ഖ ഗ ഘ ങ
ച ഛ ജ ഝ ഞ
ട ഠ ഡ ഢ ണ
ത ഥ ദ ധ ന
പ ഫ ബ ഭ മ
യ ര ല വ
ശ ഷ സ
ഹ

ക കാ കി കീ കു കൂ
കൃ കൄ കൢ കൣ
കെ കൈ കൊ കൗ
കം കഃ ക് ഽ`,
    raw: `a /a/ i /i/ u /u/
/r/ /ru/ /l/ /lu/
e ai o au

ka kha ga gha /nu/a
ca cha ja jha /n/a
/t/a /t/ha /d/a /d/ha /nl/a
ta tha da dha na
pa pha ba bha ma
ya ra la va
/su/a /sl/a sa
ha

k k/a/ ki k/i/ ku k/u/
k/r/ k/ru/ k/l/ k/lu/
ke kai ko kau
ka/m/ ka/h/ k '`
  } as const;

  const to_opts = [
    ["devanāgarī", "देवनागरी"],
    ["uast", "UAST"],
    ["iast", "IAST"],
    ["gu", "ગુજરાતી"],
    ["or", "ଓଡ଼ିଆ"],
    ["kn", "ಕನ್ನಡ"],
    ["te", "తెలుగు"],
    ["ml", "മലയാളം"],
    ["ta", "𑌗𑍍𑌰𑌨𑍍𑌥"]
  ] as const;

  const from_opts = [
    ["uast", "UAST"],
    ["iast", "IAST"],
    ["devanāgarī", "देवनागरी"],
    ["gu", "ગુજરાતી"],
    ["or", "ଓଡ଼ିଆ"],
    ["kn", "ಕನ್ನಡ"],
    ["te", "తెలుగు"],
    ["ml", "മലയാളം"],
    ["ta", "𑌗𑍍𑌰𑌨𑍍𑌥"],
    ["raw", "Raw"],
    ["slp", "SLP1"]
  ] as const;

  let input: string = "";
  let from: string;
  let to: string;

  $: output = input
    .split("\n")
    .map(i => {
      return i
        .split(" ")
        .map(j => {
          for (const f of utils.convertor[from]?.[to] ?? []) {
            j = f(j);
          }
          return j;
        })
        .join(" ");
    })
    .join("\n");

  $: ph_from =
    (from === "slp"
      ? placeholders["slp"]
      : from === "iast"
        ? placeholders["iast"]
        : from === "raw"
          ? placeholders["raw"]
          : from === "devanāgarī"
            ? placeholders["devanāgarī"]
            : from === "gu"
              ? placeholders["gu"]
              : from === "or"
                ? placeholders["or"]
                : from === "kn"
                  ? placeholders["kn"]
                  : from === "te"
                    ? placeholders["te"]
                    : from === "ml"
                      ? placeholders["ml"]
                      : from === "ta"
                        ? placeholders["ta"]
                        : placeholders["uast"]) +
    "\n\n\n" +
    (from === "devanāgarī"
      ? "भारतवर्षे अनेर्या अनिरुद्धेन च निर्मितम्।"
      : "Made in Bhāratavarṣa by Aneri Dalwadi and Dhruvil Dave");

  $: ph_to =
    to === "devanāgarī"
      ? placeholders["devanāgarī"]
      : to === "iast"
        ? placeholders["iast"]
        : to === "gu"
          ? placeholders["gu"]
          : to === "or"
            ? placeholders["or"]
            : to === "kn"
              ? placeholders["kn"]
              : to === "te"
                ? placeholders["te"]
                : to === "ml"
                  ? placeholders["ml"]
                  : to === "ta"
                    ? placeholders["ta"]
                    : placeholders["uast"];
</script>

<main>
  <article>
    <textarea
      autocomplete="off"
      spellcheck="false"
      name="input"
      class="input"
      placeholder="{ph_from}"
      bind:value="{input}"
    ></textarea>

    <select class="from-select" name="from-select" bind:value="{from}">
      {#each from_opts as i}
        <option value="{i[0]}">{i[1]}</option>
      {/each}
    </select>
  </article>

  <aside>
    <textarea
      autocomplete="off"
      spellcheck="false"
      disabled
      name="output"
      class="output"
      placeholder="{ph_to}"
      value="{output}"
    ></textarea>

    <select class="to-select" name="to-select" bind:value="{to}">
      {#each to_opts as i}
        <option value="{i[0]}">{i[1]}</option>
      {/each}
    </select>
  </aside>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;

    height: calc(100vh - 3rem);
  }

  main article,
  main aside {
    flex: 1;

    display: flex;
    flex-direction: column;
  }

  main article {
    background-color: var(--light-primary-light);
  }

  main aside {
    background-color: var(--light-primary-medium);
  }

  main article select,
  main aside select {
    height: 3rem; /* 48px */
    width: 40%;
    min-width: max-content;

    appearance: none;
    outline: none;

    border: none;

    cursor: pointer;
    text-decoration-line: underline;

    text-align: center;

    padding: 0.125rem; /* 2px */
    margin: auto;
  }

  main article textarea,
  main aside textarea {
    height: 100%;
    resize: none;

    border: none;

    user-select: auto;

    padding: 0.25rem; /* 4px */
  }

  textarea,
  select {
    color: var(--light-text-color);

    font-size: 1rem; /* 16px */
    line-height: 1.5rem; /* 24px */

    animation: fade 300ms ease-in-out;
  }

  textarea.input,
  select.from-select {
    background-color: var(--light-primary-light);
    padding: 0.5rem; /* 8px */
  }

  textarea.output,
  select.to-select {
    background-color: var(--light-primary-medium);
    padding: 0.5rem; /* 8px */
  }

  textarea,
  select,
  option {
    font-family: var(--font-family-mono), "Noto Sans Devanagari",
      "Noto Sans Gujarati", "Noto Sans Oriya", "Noto Sans Kannada",
      "Noto Sans Telugu", "Noto Sans Malayalam", "Noto Sans Grantha", sans-serif;
  }

  @media (prefers-color-scheme: dark) {
    textarea,
    select {
      color: var(--dark-text-color);
    }

    main article {
      background-color: var(--dark-primary-dark);
    }

    main aside {
      background-color: var(--dark-primary-medium);
    }

    textarea.input,
    select.from-select {
      background-color: var(--dark-primary-dark);
    }

    textarea.output,
    select.to-select {
      background-color: var(--dark-primary-medium);
    }
  }

  @media (min-width: 1024px) {
    main {
      flex-direction: row;
    }

    textarea,
    select {
      font-size: 1.5rem; /* 24px */
      line-height: 2rem; /* 32px */
    }
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  main article textarea:focus,
  main aside textarea:focus {
    outline: none;
  }
</style>
