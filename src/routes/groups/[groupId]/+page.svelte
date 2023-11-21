<script>
  import BackButton from "$lib/components/BackButton.svelte";

  import {page} from '$app/stores';
  const groupId = $page.params.groupId;
</script>

<BackButton href={"/groups"}></BackButton>

<h1>group {groupId}</h1>