<style>
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

  @media (min-width: 1024px) {
    header ul li {
      margin: 0 1rem;
    }
  }
</style>

<script>
  import Icon from './Icon.svelte';
</script>

<header>
  <nav>
    <section>
      <img src="/icon.svg" width="48" height="48" alt="uast logo" />
    </section>
    <section>
      <ul>
        <li>
          <Icon
            alt="arxiv icon"
            href="https://arxiv.org/abs/2203.14277"
            src="https://unpkg.com/simple-icons@latest/icons/arxiv.svg"
          />
        </li>
        <li>
          <Icon
            alt="go icon"
            href="https://github.com/aneri0x4f/uast-cli"
            src="https://unpkg.com/simple-icons@latest/icons/go.svg"
          />
        </li>
        <li>
          <Icon
            alt="typescript icon"
            href="https://github.com/dhruvildave/uast"
            src="https://unpkg.com/simple-icons@latest/icons/typescript.svg"
          />
        </li>
      </ul>
    </section>
  </nav>
</header>
