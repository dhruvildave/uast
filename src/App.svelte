<style>
  :root {
    --primary-dark: rgb(0 0 0);
    --primary-light: rgb(34 34 34);
    --primary-medium: rgb(17 17 17);

    --font-family-mono: 'IBM Plex Mono', monospace;
    --font-family-sans: 'Noto Sans Devanagari', sans-serif;
    --text-color: rgb(255 255 255);
  }

  header {
    width: 100vw;

    color: var(--text-color);
  }

  header nav {
    width: 100%;
    height: 3rem; /* 48px */

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    user-select: none;

    background-color: var(--primary-dark);
  }

  header nav section {
    margin: 0 1rem;
  }

  header nav h1 {
    font-size: 1.25rem; /* 20px */
    font-family: var(--font-family-mono);
  }

  header nav section:last-child ul {
    display: flex;
    flex-direction: row;
  }

  header ul {
    list-style: none;
  }

  header ul li {
    margin: 0 0.5rem;
  }

  header nav img {
    filter: invert(100%);
  }

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

  textarea.mono {
    font-family: var(--font-family-mono);
  }

  @media (min-width: 1024px) {
    main {
      flex-direction: row;
    }

    header ul li {
      margin: 0 1rem;
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
  import * as utils from './utils';

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

<header>
  <nav>
    <section>
      <h1>UAST</h1>
    </section>
    <section>
      <ul>
        <li>
          <a href="https://arxiv.org/abs/2203.14277">
            <img
              src="https://unpkg.com/simple-icons@latest/icons/arxiv.svg"
              alt="arxiv icon"
              width="28"
              height="28"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/aneri0x4f/uast-cli">
            <img
              src="https://unpkg.com/simple-icons@latest/icons/go.svg"
              alt="go icon"
              width="28"
              height="28"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/dhruvildave/uast">
            <img
              src="https://unpkg.com/simple-icons@latest/icons/typescript.svg"
              alt="typescript icon"
              width="28"
              height="28"
            />
          </a>
        </li>
      </ul>
    </section>
  </nav>
</header>

<main>
  <div>
    <textarea
      class="{from === 'devanagari' ? 'sans' : 'mono'}"
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
    </select>
  </div>
  <div>
    <textarea
      class="{to === 'devanagari' ? 'sans' : 'mono'}"
      autocomplete="off"
      spellcheck="false"
      disabled
      name="output"
      id="output"
      value="{output}"></textarea>

    <select id="to-select" bind:value="{to}" name="to">
      <option selected value="devanagari">देवनागरी (devanāgarī)</option>
      <option value="iast">IAST</option>
      <option value="uast">UAST</option>
      <option value="raw">Raw</option>
    </select>
  </div>
</main>
