<style>
  main {
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: calc(100vh - 3rem);
  }

  main div {
    flex: 1;

    display: flex;
    flex-direction: column;
  }

  main div:first-child {
    background-color: var(--primary-medium);
  }

  main div:last-child {
    background-color: var(--primary-dark);
  }

  main div select {
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

  main div textarea {
    height: 100%;
    width: 100%;
    resize: none;

    border: none;

    user-select: auto;

    padding: 0.25rem; /* 4px */
  }

  textarea,
  select {
    color: var(--text-color);

    font-size: 1rem; /* 16px */
    line-height: 1.5rem; /* 24px */
  }

  textarea#input,
  select#from-select {
    background-color: var(--primary-medium);
  }

  textarea#output,
  select#to-select {
    background-color: var(--primary-dark);
  }

  textarea.sans {
    font-family: var(--font-family-sans);
  }

  textarea.iast {
    font-family: var(--font-family-iast);
  }

  textarea.mono {
    font-family: var(--font-family-mono);
  }

  textarea.guj {
    font-family: var(--font-family-guj);
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

  main div textarea:focus {
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
  <div>
    <textarea
      class="{from === 'devanagari'
        ? 'sans'
        : from === 'iast'
        ? 'iast'
        : 'mono'}"
      label="input"
      autocomplete="off"
      spellcheck="false"
      name="input"
      id="input"
      bind:value="{input}"></textarea>

    <select id="from-select" name="from" bind:value="{from}">
      <option selected value="uast">UAST</option>
      <option value="iast">IAST</option>
      <option value="devanagari">देवनागरी (devanāgarī)</option>
      <option value="raw">Raw</option>
      <option value="slp">SLP1</option>
    </select>
  </div>
  <div>
    <textarea
      class="{to === 'devanagari'
        ? 'sans'
        : to === 'iast'
        ? 'iast'
        : to === 'guj'
        ? 'guj'
        : 'mono'}"
      autocomplete="off"
      spellcheck="false"
      disabled
      label="output"
      name="output"
      id="output"
      value="{output}"></textarea>

    <select id="to-select" bind:value="{to}" name="to">
      <option selected value="devanagari">देवनागरी (devanāgarī)</option>
      <option value="iast">IAST</option>
      <option value="uast">UAST</option>
      <option value="guj">ગુજરાતી (gujarātī)</option>
    </select>
  </div>
</main>
