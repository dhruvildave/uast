<script lang="ts">
  import * as utils from "../be/utils";

  const placeholders = {
    uast: `k kh g gh /nu/
c ch j jh /n/
/t/ /t/h /d/ /d/h /nl/
t th d dh n
p ph b bh m
y r l v
/su/ /sl/ s h /ll/

0 1 2 3 4
5 6 7 8 9
/om/ /'/ /./ /../

a /a/ i /i/ u /u/ /r/
/ru/ /l/ /lu/ e ai o au

k k/a/ ki k/i/ ku k/u/ k/r/
k/ru/ k/l/ k/lu/ ke kai ko kau
k- k/m/ k/h/ k/au/`,
    iast: `ka kha ga gha ṅa
ca cha ja jha ña
ṭa ṭha ḍa ḍha ṇa
ta tha da dha na
pa pha ba bha ma
ya ra la va
śa ṣa sa ha ḻa

0 1 2 3 4
5 6 7 8 9
om ' . ..

a ā i ī u ū ṛ
ṝ ḷ ḹ e ai o au

ka kā ki kī ku kū kṛ
kṝ kḷ kḹ ke kai ko kau
k kaṃ kaḥ kaã`,
    gu: `ક ખ ગ ઘ ઙ
ચ છ જ ઝ ઞ
ટ ઠ ડ ઢ ણ
ત થ દ ધ ન
પ ફ બ ભ મ
ય ર લ વ
શ ષ સ હ ળ

૦ ૧ ૨ ૩ ૪
૫ ૬ ૭ ૮ ૯
ૐ ઽ । ॥

અ આ ઇ ઈ ઉ ઊ ઋ
ૠ ઌ ૡ એ ઐ ઓ ઔ

ક કા કિ કી કુ કૂ કૃ
કૄ કૢ કૣ કે કૈ કો કૌ
ક્ કં કઃ કઁ`,
    or: `କ ଖ ଗ ଘ ଙ
ଚ ଛ ଜ ଝ ଞ
ଟ ଠ ଡ ଢ ଣ
ତ ଥ ଦ ଧ ନ
ପ ଫ ବ ଭ ମ
ୟ ର ଲ ୱ
ଶ ଷ ସ ହ ଳ

୦ ୧ ୨ ୩ ୪
୫ ୬ ୭ ୮ ୯
ଓଁ ଽ । ॥

ଅ ଆ ଇ ଈ ଉ ଊ ଋ
ୠ ଌ ୡ ଏ ଐ ଓ ଔ

କ କା କି କୀ କୁ କୂ କୃ
କୄ କୢ କୣ କେ କୈ କୋ କୌ
କ୍ କଂ କଃ କଁ`,
    devanāgarī: `क ख ग घ ङ
च छ ज झ ञ
ट ठ ड ढ ण
त थ द ध न
प फ ब भ म
य र ल व
श ष स ह ळ

० १ २ ३ ४
५ ६ ७ ८ ९
ॐ ऽ । ॥

अ आ इ ई उ ऊ ऋ
ॠ ऌ ॡ ए ऐ ओ औ

क का कि की कु कू कृ
कॄ कॢ कॣ के कै को कौ
क् कं कः कँ`,
    slp: `ka Ka ga Ga Na
ca Ca ja Ja Ya
wa Wa qa Qa Ra
ta Ta da Da na
pa Pa ba Ba ma
ya ra la va
Sa za sa ha La

0 1 2 3 4
5 6 7 8 9
om ' . ..

a A i I u U f
F x X e E o O

ka kA ki kI ku kU kf
kF kx kX ke kE ko kO
k kaM kaH ka~`,
    kn: `ಕ ಖ ಗ ಘ ಙ
ಚ ಛ ಜ ಝ ಞ
ಟ ಠ ಡ ಢ ಣ
ತ ಥ ದ ಧ ನ
ಪ ಫ ಬ ಭ ಮ
ಯ ರ ಲ ವ
ಶ ಷ ಸ ಹ ಳ

೦ ೧ ೨ ೩ ೪
೫ ೬ ೭ ೮ ೯
ಓಂ ಽ । ॥

ಅ ಆ ಇ ಈ ಉ ಊ ಋ
ೠ ಌ ೡ ಎ ಐ ಒ ಔ

ಕ ಕಾ ಕಿ ಕೀ ಕು ಕೂ ಕೃ
ಕೄ ಕೢ ಕೣ ಕೆ ಕೈ ಕೊ ಕೌ
ಕ್ ಕಂ ಕಃ ಕಁ`,
    te: `క ఖ గ ఘ ఙ
చ ఛ జ ఝ ఞ
ట ఠ డ ఢ ణ
త థ ద ధ న
ప ఫ బ భ మ
య ర ల వ
శ ష స హ ళ

౦ ౧ ౨ ౩ ౪
౫ ౬ ౭ ౮ ౯
ఓం ఽ । ॥

అ ఆ ఇ ఈ ఉ ఊ ఋ
ౠ ఌ ౡ ఎ ఐ ఒ ఔ

క కా కి కీ కు కూ కృ
కౄ కౢ కౣ కె కై కొ కౌ
క్ కం కః కఁ`,
    ta: `𑌕 𑌖 𑌗 𑌘 𑌙
𑌚 𑌛 𑌜 𑌝 𑌞
𑌟 𑌠 𑌡 𑌢 𑌣
𑌤 𑌥 𑌦 𑌧 𑌨
𑌪 𑌫 𑌬 𑌭 𑌮
𑌯 𑌰 𑌲 𑌵
𑌶 𑌷 𑌸 𑌹 𑌳

௦ ௧ ௨ ௩ ௪
௫ ௬ ௭ ௮ ௯
𑍐 𑌽 । ॥

𑌅 𑌆 𑌇 𑌈 𑌉 𑌊 𑌋
𑍠 𑌌 𑍡 𑌏 𑌐 𑌓 𑌔

𑌕 𑌕𑌾 𑌕𑌿 𑌕𑍀 𑌕𑍁 𑌕𑍂 𑌕𑍃
𑌕𑍄 𑌕𑍢 𑌕𑍣 𑌕𑍇 𑌕𑍈 𑌕𑍋 𑌕𑍗
𑌕𑍍 𑌕𑌂 𑌕𑌃 𑌕𑌁`,
    ml: `ക ഖ ഗ ഘ ങ
ച ഛ ജ ഝ ഞ
ട ഠ ഡ ഢ ണ
ത ഥ ദ ധ ന
പ ഫ ബ ഭ മ
യ ര ല വ
ശ ഷ സ ഹ ള

൦ ൧ ൨ ൩ ൪
൫ ൬ ൭ ൮ ൯
ഓം ഽ । ॥

അ ആ ഇ ഈ ഉ ഊ ഋ
ൠ ഌ ൡ എ ഐ ഒ ഔ

ക കാ കി കീ കു കൂ കൃ
കൄ കൢ കൣ കെ കൈ കൊ കൗ
ക് കം കഃ കഁ`,
    raw: `ka kha ga gha /nu/a
ca cha ja jha /n/a
/t/a /t/ha /d/a /d/ha /nl/a
ta tha da dha na
pa pha ba bha ma
ya ra la va
/su/a /sl/a sa ha /ll/a

0 1 2 3 4
5 6 7 8 9
om ' . ..

a /a/ i /i/ u /u/ /r/
/ru/ /l/ /lu/ e ai o au

k k/a/ ki k/i/ ku k/u/ k/r/
k/ru/ k/l/ k/lu/ ke kai ko kau
k ka/m/ ka/h/ ka/au/`
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
    ["uast-io", "UAST-IO"],
    ["uast", "UAST"],
    ["iast", "IAST"],
    ["devanāgarī", "देवनागरी"],
    ["gu", "ગુજરાતી"],
    ["or", "ଓଡ଼ିଆ"],
    ["kn", "ಕನ್ನಡ"],
    ["te", "తెలుగు"],
    ["ml", "മലയാളം"],
    ["ta", "𑌗𑍍𑌰𑌨𑍍𑌥"],
    ["slp", "SLP1"]
  ] as const;

  let input: string = $state("");
  let from: string = $state(from_opts[0][0]);
  let to: string = $state(to_opts[0][0]);

  const output = $derived(
    input
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
      .join("\n")
  );

  const ph_from = $derived(
    (placeholders[from as keyof typeof placeholders] ?? placeholders["raw"]) +
      "\n\n\n" +
      (from === "devanāgarī" ?
        "भारतवर्षे अनेर्या अनिरुद्धेन च निर्मितम्।"
      : "Made in Bhāratavarṣa by Dhruvil Dave and Aneri Dalwadi")
  );

  const ph_to = $derived(
    placeholders[to as keyof typeof placeholders] ?? placeholders["uast"]
  );
</script>

<main>
  <article>
    <textarea
      autocomplete="off"
      spellcheck="false"
      name="input"
      class="input"
      placeholder={ph_from}
      bind:value={input}
    ></textarea>

    <select
      class="from-select"
      aria-label="from-select"
      name="from-select"
      bind:value={from}
    >
      {#each from_opts as i}
        <option value={i[0]}>{i[1]}</option>
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
      placeholder={ph_to}
      value={output}
    ></textarea>

    <select
      class="to-select"
      aria-label="to-select"
      name="to-select"
      bind:value={to}
    >
      {#each to_opts as i}
        <option value={i[0]}>{i[1]}</option>
      {/each}
    </select>
  </aside>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;

    height: calc(100vh - 3rem);

    article,
    aside {
      flex: 1;

      display: flex;
      flex-direction: column;

      select {
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

      textarea {
        height: 100%;
        resize: none;

        border: none;

        user-select: auto;

        padding: 0.25rem; /* 4px */

        &:focus {
          outline: none;
        }
      }
    }

    article {
      background-color: var(--light-primary-light);
    }

    aside {
      background-color: var(--light-primary-medium);
    }
  }

  textarea,
  select {
    color: var(--light-text-color);

    font-size: 1rem; /* 16px */
    line-height: 1.5rem; /* 24px */

    animation: fade 300ms ease-in-out;
  }

  textarea {
    &.input {
      background-color: var(--light-primary-light);
      padding: 0.5rem; /* 8px */
    }

    &.output {
      background-color: var(--light-primary-medium);
      padding: 0.5rem; /* 8px */
    }
  }

  select {
    &.from-select {
      background-color: var(--light-primary-light);
      padding: 0.5rem; /* 8px */
    }

    &.to-select {
      background-color: var(--light-primary-medium);
      padding: 0.5rem; /* 8px */
    }
  }

  textarea,
  select,
  option {
    font-family:
      var(--font-family-mono), "Noto Sans Devanagari", "Noto Sans Gujarati",
      "Noto Sans Oriya", "Noto Sans Kannada", "Noto Sans Telugu",
      "Noto Sans Malayalam", "Noto Sans Grantha", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings: "wdth" 100;
  }

  @media (prefers-color-scheme: dark) {
    textarea,
    select {
      color: var(--dark-text-color);
    }

    main article,
    textarea.input,
    select.from-select {
      background-color: var(--dark-primary-dark);
    }

    main aside,
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
</style>
