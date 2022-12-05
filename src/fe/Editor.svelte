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

    font-family: var(--font-family-mono);
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

  textarea#input,
  select#from-select {
    background-color: var(--light-primary-light);
    padding: 0.5rem; /* 8px */
  }

  textarea#output,
  select#to-select {
    background-color: var(--light-primary-medium);
    padding: 0.5rem; /* 8px */
  }

  textarea.sans {
    font-family: var(--font-family-sans);
  }

  textarea.mono {
    font-family: var(--font-family-mono);
  }

  textarea.guj,
  textarea.sans,
  textarea.odia,
  textarea.kn,
  textarea.te,
  textarea.ml {
    font-size: 1.5rem; /* 24px */
    line-height: 2rem; /* 32px */
  }

  textarea.guj {
    font-family: var(--font-family-guj);
  }

  textarea.odia {
    font-family: var(--font-family-odia);
  }

  textarea.kn {
    font-family: var(--font-family-kn);
  }

  textarea.te {
    font-family: var(--font-family-te);
  }

  textarea.ml {
    font-family: var(--font-family-ml);
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

    textarea#input,
    select#from-select {
      background-color: var(--dark-primary-dark);
    }

    textarea#output,
    select#to-select {
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
      class="{from === 'devanagari' ? 'sans' : 'mono'}"
      label="input"
      autocomplete="off"
      spellcheck="false"
      name="input"
      id="input"
      placeholder="{(from === 'slp'
        ? 'tasmAdyogI BavArjuna'
        : from === 'iast'
        ? 'tasmādyogī bhavārjuna'
        : from === 'raw'
        ? 'tasm/a/dyog/i/ bhav/a/rjuna'
        : from === 'devanagari'
        ? 'तस्माद्योगी भवार्जुन'
        : 'ts-m/a/d-yog/i/ bhv/a/r-jun') +
        '\n\n\n' +
        (from === 'devanagari'
          ? 'भारतवर्षे अनेर्या अनिरुद्धेन च प्रणयात् एव निर्मित।'
          : 'Made with 🫶🏼 in Bhāratavarṣa by Aneri Dalwadi and Dhruvil Dave')}"
      bind:value="{input}"></textarea>

    <select id="from-select" name="from" bind:value="{from}">
      <option selected value="uast">UAST</option>
      <option value="iast">IAST</option>
      <option value="devanagari">देवनागरी</option>
      <option value="raw">Raw</option>
      <option value="slp">SLP1</option>
    </select>
  </article>

  <aside>
    <textarea
      class="{to === 'devanagari'
        ? 'sans'
        : to === 'guj'
        ? 'guj'
        : to === 'odia'
        ? 'odia'
        : to === 'kn'
        ? 'kn'
        : to === 'te'
        ? 'te'
        : to === 'ml'
        ? 'ml'
        : 'mono'}"
      autocomplete="off"
      spellcheck="false"
      disabled
      label="output"
      name="output"
      id="output"
      placeholder="{to === 'devanagari'
        ? 'तस्माद्योगी भवार्जुन'
        : to === 'iast'
        ? 'tasmādyogī bhavārjuna'
        : to === 'guj'
        ? 'તસ્માદ્યોગી ભવાર્જુન'
        : to === 'odia'
        ? 'ତସ‍୍ମାଦ‍୍ୟୋଗୀ ଭୱାର‍୍ଜୁନ'
        : to === 'kn'
        ? 'ತಸ್ಮಾದ್ಯೊಗೀ ಭವಾರ್ಜುನ'
        : to === 'te'
        ? 'తస్మాద్యొగీ భవార్జున'
        : to === 'ml'
        ? 'തസ്മാദ്യൊഗീ ഭവാര്ജുന'
        : 'ts-m/a/d-yog/i/ bhv/a/r-jun'}"
      value="{output}"></textarea>

    <select id="to-select" bind:value="{to}" name="to">
      <option selected value="devanagari">देवनागरी</option>
      <option value="iast">IAST</option>
      <option value="uast">UAST</option>
      <option value="guj">ગુજરાતી</option>
      <option value="odia">ଓଡ଼ିଆ</option>
      <option value="kn">ಕನ್ನಡ</option>
      <option value="te">తెలుగు</option>
      <option value="ml">മലയാളം</option>
    </select>
  </aside>
</main>
