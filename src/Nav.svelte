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

  @media (min-width: 1024px) {
    header ul li {
      margin: 0 1rem;
    }
  }
</style>

<header>
  <nav>
    <section>
      <h1>UAST</h1>
    </section>
    <section>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://arxiv.org/abs/2203.14277"
          >
            <img
              src="https://unpkg.com/simple-icons@latest/icons/arxiv.svg"
              alt="arxiv icon"
              width="28"
              height="28"
            />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/aneri0x4f/uast-cli"
          >
            <img
              src="https://unpkg.com/simple-icons@latest/icons/go.svg"
              alt="go icon"
              width="28"
              height="28"
            />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/dhruvildave/uast"
          >
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
