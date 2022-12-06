<style>
  main {
    display: flex;
    flex-direction: column;

    width: 100vw;
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
    width: 100%;
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
    font-family: var(--font-family-mono), 'Noto Sans Devanagari',
      'Noto Sans Gujarati', 'Noto Sans Oriya', 'Noto Sans Kannada',
      'Noto Sans Telugu', 'Noto Sans Malayalam', 'Noto Sans Grantha', sans-serif;
  }

  textarea {
    font-size: 1.5rem; /* 24px */
    line-height: 2rem; /* 32px */
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
  }

  @media (min-width: 768px) {
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

<script lang="ts">
  import * as utils from '../be/utils';

  const placeholders = {
    uast: 'ts-m/a/d-yog/i/ bhv/a/r-jun',
    iast: 'tasmādyogī bhavārjuna',
    guj: 'તસ્માદ્યોગી ભવાર્જુન',
    odia: 'ତସ‍୍ମାଦ‍୍ୟୋଗୀ ଭୱାର‍୍ଜୁନ',
    devanagari: 'तस्माद्योगी भवार्जुन',
    slp: 'tasmAdyogI BavArjuna',
    kn: 'ತಸ್ಮಾದ್ಯೊಗೀ ಭವಾರ್ಜುನ',
    te: 'తస్మాద్యొగీ భవార్జున',
    ta: '𑌤𑌸𑍍𑌮𑌾𑌦𑍍𑌯𑍋𑌗𑍀 𑌭𑌵𑌾𑌰𑍍𑌜𑍁𑌨',
    ml: 'തസ്മാദ്യൊഗീ ഭവാര്ജുന',
    raw: 'tasm/a/dyog/i/ bhav/a/rjuna',
  } as const;

  let input: string = '';
  let from: string;
  let to: string;

  $: output = input
    .split('\n')
    .map(i => {
      return i
        .split(' ')
        .map(j => {
          for (const f of utils.convertor[from]?.[to] ?? []) {
            j = f(j);
          }
          return j;
        })
        .join(' ');
    })
    .join('\n');
</script>

<main>
  <article>
    <textarea
      label="input"
      autocomplete="off"
      spellcheck="false"
      name="input"
      class="input"
      placeholder="{(from === 'slp'
        ? placeholders['slp']
        : from === 'iast'
        ? placeholders['iast']
        : from === 'raw'
        ? placeholders['raw']
        : from === 'devanagari'
        ? placeholders['devanagari']
        : from === 'guj'
        ? placeholders['guj']
        : from === 'odia'
        ? placeholders['odia']
        : from === 'kn'
        ? placeholders['kn']
        : placeholders['uast']) +
        '\n\n\n' +
        (from === 'devanagari'
          ? 'भारतवर्षे अनेर्या अनिरुद्धेन च प्रणयात् एव निर्मित।'
          : 'Made with 🫶🏼 in Bhāratavarṣa by Aneri Dalwadi and Dhruvil Dave')}"
      bind:value="{input}"></textarea>

    <select class="from-select" name="from" bind:value="{from}">
      <option selected value="uast">UAST</option>
      <option value="iast">IAST</option>
      <option value="devanagari">देवनागरी</option>
      <option value="guj">ગુજરાતી</option>
      <option value="odia">ଓଡ଼ିଆ</option>
      <option value="kn">ಕನ್ನಡ</option>
      <option value="raw">Raw</option>
      <option value="slp">SLP1</option>
    </select>
  </article>

  <aside>
    <textarea
      autocomplete="off"
      spellcheck="false"
      disabled
      label="output"
      name="output"
      class="output"
      placeholder="{to === 'devanagari'
        ? placeholders['devanagari']
        : to === 'iast'
        ? placeholders['iast']
        : to === 'guj'
        ? placeholders['guj']
        : to === 'odia'
        ? placeholders['odia']
        : to === 'kn'
        ? placeholders['kn']
        : to === 'te'
        ? placeholders['te']
        : to === 'ml'
        ? placeholders['ml']
        : to === 'ta'
        ? placeholders['ta']
        : placeholders['uast']}"
      value="{output}"></textarea>

    <select class="to-select" bind:value="{to}" name="to">
      <option selected value="devanagari">देवनागरी</option>
      <option value="iast">IAST</option>
      <option value="uast">UAST</option>
      <option value="guj">ગુજરાતી</option>
      <option value="odia">ଓଡ଼ିଆ</option>
      <option value="kn">ಕನ್ನಡ</option>
      <option value="te">తెలుగు</option>
      <option value="ml">മലയാളം</option>
      <option value="ta">𑌗𑍍𑌰𑌨𑍍𑌥</option>
    </select>
  </aside>
</main>
