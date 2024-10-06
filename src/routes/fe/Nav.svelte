<script lang="ts">
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
  $: nav = `UAST - ${
    locale === "sa" ? "संस्कृतलिप्यन्तराय सर्वक्षमैकोपकरणम्"
    : locale === "hi" ? "संस्कृत लिप्यंतरण के लिए ऑल-इन-वन टूल"
    : locale === "gu" ? "સંસ્કૃત લિવ્યંતરણ માટે ઓલ-ઇન-વન ટૂલ"
    : locale === "es" ? "Herramienta todo en uno para transliteración sánscrita"
    : locale === "fr" ? "Outil tout-en-un pour la translittération sanskrite"
    : locale === "ko" ? "산스크리트 음역을 위한 올인원 도구"
    : locale === "ja" ? "サンスクリット音訳のためのオールインワン ツール"
    : "All-in-one tool for Saṃskṛta Transliteration"
  }`;
  $: title = `${
    locale === "sa" ? "यूनिकोडवेदि संस्कृतलिप्यन्तरकर्तृ"
    : locale === "hi" ? "यूनिकोड जागरूक संस्कृत लिप्यंतरण"
    : locale === "gu" ? "યુનિકોડ અવેર સંસ્કૃત લિવ્યંતરણ"
    : locale === "es" ? "Transliteración Sánscrita consciente de Unicode"
    : locale === "fr" ? "Translittération sanskrite compatible Unicode"
    : locale === "ko" ? "유니코드 인식 산스크리트 음역"
    : locale === "ja" ? "Unicode 対応のサンスクリット音訳"
    : "Unicode Aware Saṃskṛta Transliteration"
  } - UAST`;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
<header>
  <nav>
    <section>
      <img src="/img/icon.svg" width="48" height="48" alt="uast logo" />
    </section>
    <section>
      <h1>{nav}</h1>
    </section>
    <section>
      <select name="locale" bind:value={locale}>
        {#each langs as i}
          <option value={i[0]}>{i[1]}</option>
        {/each}
      </select>
      <ul>
        <li>
          <Icon
            alt="arxiv icon"
            title="Link to paper on arXiv"
            href="https://arxiv.org/html/2203.14277"
            src="/img/paper.svg"
          />
        </li>
        <li>
          <Icon
            alt="cli icon"
            title="Link to Rust CLI GitHub repository"
            href="https://github.com/dhruvildave/uast.rs"
            src="/img/cli.svg"
          />
        </li>
        <li>
          <Icon
            alt="web icon"
            title="Link to web GitHub repository"
            href="https://github.com/dhruvildave/uast"
            src="/img/web.svg"
          />
        </li>
        <li>
          <Icon
            alt="help icon"
            title="Help"
            href="https://github.com/aneri0x4f/uast-cli"
            src="/img/help.svg"
          />
        </li>
      </ul>
    </section>
  </nav>
</header>

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

      font-family: monospace;
      font-weight: bold;
    }
  }

  @media (prefers-color-scheme: dark) {
    header nav {
      background-color: var(--dark-primary-dark);
    }
  }
</style>
