<script lang="ts">
  import { beforeNavigate } from "$app/navigation";
  import { updated } from "$app/stores";
  import type { Snippet } from "svelte";

  beforeNavigate(({ willUnload, to }) => {
    if ($updated && !willUnload && to?.url) {
      location.href = to.url.href;
    }
  });

  let { children }: { children: Snippet } = $props();
</script>

{@render children()}
