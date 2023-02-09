<script lang="ts">
  import "../../app.css";
  import Editor from "../fe/Editor.svelte";
  import Nav from "../fe/Nav.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>
<Nav nav="{data.nav}" />
<Editor />
