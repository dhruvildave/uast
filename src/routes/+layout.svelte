<script lang="ts">
  import { beforeNavigate } from "$app/navigation";
  import { updated } from "$app/stores";
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

  beforeNavigate(({ willUnload, to }) => {
    if ($updated && !willUnload && to?.url) {
      location.href = to.url.href;
    }
  });

  injectSpeedInsights();
</script>

<slot />
