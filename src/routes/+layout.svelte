<script lang="ts">
  import { beforeNavigate } from "$app/navigation";
  import { updated } from "$app/state";
  import type { Snippet } from "svelte";

  beforeNavigate(({ willUnload, to }) => {
    if (updated.current && !willUnload && to?.url) {
      location.href = to.url.href;
    }
  });

  let { children }: { children: Snippet } = $props();
</script>

{@render children()}
