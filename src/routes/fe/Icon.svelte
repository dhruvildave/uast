<script lang="ts">
  export let href: string;
  export let src: string;
  export let alt: string;
  export let title: string;
</script>

<a target="_blank" {title} rel="noreferrer" {href}>
  <img {src} {alt} width="28" height="28" />
</a>

<style>
  a {
    display: flex;
    align-items: center;
  }

  img {
    filter: invert(0%);
  }

  @media (prefers-color-scheme: dark) {
    img {
      filter: invert(100%);
    }
  }
</style>
