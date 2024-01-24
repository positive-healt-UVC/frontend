<script>
  import Buttons from "$lib/components/Buttons.svelte";
  import Logout from "$lib/components/Logout.svelte";
  import UpcomingActivity from "$lib/components/UpcomingActivity.svelte";
  import { fly } from "svelte/transition";
</script>

<body transition:fly={{ y: 300, duration: 300 }}>
  
  <Logout />

<div class="min-h-screen bg-sky flex flex-col items-center">
  <div class="h-2" />
  <!-- Create space at the top -->


  <div class="h-20 w-80 mt-8 space-y-6 mb-20">
    <Buttons text={"Groepen"} href={"/groups"} />
    
    <Buttons text={"Activiteit aanmaken"} href={"/activities/addActivity"} />

    <Buttons text={"Geplande activiteiten"} href={"/agenda"} />

  </div>

    <img
    class="w-40 h-100"
    src=".//imgs/AbilityLink_Logo.png"
    alt="AbilityLinkLogo"
  />

  <div class="m-40 w-20">
    <UpcomingActivity />
  </div>
</div>

</body>
