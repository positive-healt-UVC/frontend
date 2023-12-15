<script>
  import BackButton from "$lib/components/BackButton.svelte";
  import UpcomingActivity from "$lib/components/UpcomingActivity.svelte";
  import GroupDetails from "$lib/components/GroupDetails.svelte";
  import { fly } from "svelte/transition";
</script>

<BackButton href={"/groups"}></BackButton>

<body transition:fly={{ y: 300, duration: 300 }}>

<BackButton></BackButton>

<div>
<div class="min-h-screen flex flex-col items-center">
  <div class="w-5/6 mt-2">
  </div>
  <div class="w-5/6 rounded-md">
    <div class="grid grid-cols-1 gap-4 w-5/6 mt-10 mx-auto mb-20">
      <GroupDetails></GroupDetails>
    </div>
  </div>
</div>
</div>
</body>