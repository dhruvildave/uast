<style>
  header {
    width: 100vw;
  }

  header nav {
    width: 100%;
    height: 3rem; /* 48px */

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    user-select: none;

    font-family: var(--font-family-mono);
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

  @media (min-width: 1024px) {
    header ul li {
      margin: 0 1rem;
    }

    header nav section:nth-child(2) {
      display: block;
    }
  }

  img {
    filter: invert(100%);
  }

  @media (prefers-color-scheme: dark) {
    img {
      filter: invert(0%);
    }

    header nav {
      background-color: var(--dark-primary-dark);
    }
  }
</style>

<script>
  import Icon from './Icon.svelte';
</script>

<header>
  <nav>
    <section>
      <img src="/img/icon.svg" width="48" height="48" alt="uast logo" />
    </section>
    <section>
      <h1>UAST: All in one tool for Sanskrit transliteration</h1>
    </section>
    <section>
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
