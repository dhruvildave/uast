<script lang="ts">
  let {
    href,
    src,
    alt,
    title
  }: { href: string; src: string; alt: string; title: string } = $props();
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

    @media (prefers-color-scheme: dark) {
      & {
        filter: invert(100%);
      }
    }
  }
</style>
