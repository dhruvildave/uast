<style>
  header nav {
    height: 3rem; /* 48px */

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    user-select: text;

    font-family: var(--font-family-mono), monospace;
    background-color: var(--light-primary-light);
  }

  header nav h1 {
    font-size: 1rem; /* 16px */
    font-weight: bold;
  }

  header nav section {
    margin: 0 1rem;

    display: flex;
    align-items: center;
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

    display: flex;
    align-items: center;
  }

  header nav section:nth-child(2) {
    display: none;
  }

  header nav select {
    display: none;
  }

  @media (min-width: 1024px) {
    header ul li {
      margin: 0 1rem;
    }

    header nav section:nth-child(2) {
      display: block;
    }

    header nav select {
      display: inline-block;
      background-color: transparent;
      border: none;
      outline: none;
    }
  }

  @media (prefers-color-scheme: dark) {
    header nav {
      background-color: var(--dark-primary-dark);
    }
  }
</style>

<script lang="ts">
  import { goto } from "$app/navigation";
  import Icon from "./Icon.svelte";

  const langs = [
    ["en", "English"],
    ["sa", "संस्कृत"],
    ["fr", "Français"],
    ["gu", "ગુજરાતી"],
    ["hi", "हिंदी"],
    ["ja", "日本語"],
    ["ko", "한국인"],
    ["es", "Español"]
  ] as const;

  let locale: string;
  $: goto(`/${locale}`, {
    replaceState: true,
    keepFocus: true,
    noScroll: true
  });

  export let nav: string;
</script>

<header>
  <nav>
    <section>
      <img src="/img/icon.svg" width="48" height="48" alt="uast logo" />
    </section>
    <section>
      <h1>{nav}</h1>
    </section>
    <section>
      <select bind:value="{locale}">
        {#each langs as i}
          <option value="{i[0]}">{i[1]}</option>
        {/each}
      </select>
      <ul>
        <li>
          <Icon
            alt="arxiv icon"
            title="Link to paper on arXiv"
            href="https://arxiv.org/abs/2203.14277"
            src="https://unpkg.com/simple-icons@latest/icons/arxiv.svg"
          />
        </li>
        <li>
          <Icon
            alt="go icon"
            title="Link to CLI GitHub repository"
            href="https://github.com/aneri0x4f/uast-cli"
            src="https://unpkg.com/simple-icons@latest/icons/go.svg"
          />
        </li>
        <li>
          <Icon
            alt="typescript icon"
            title="Link to web GitHub repository"
            href="https://github.com/dhruvildave/uast"
            src="https://unpkg.com/simple-icons@latest/icons/typescript.svg"
          />
        </li>
        <li>
          <Icon
            alt="help icon"
            title="Help"
            href="https://github.com/aneri0x4f/uast-cli/wiki"
            src="/img/help.svg"
          />
        </li>
      </ul>
    </section>
  </nav>
</header>
