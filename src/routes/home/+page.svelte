<script>
  import Buttons from "$lib/components/Buttons.svelte";
  import UpcomingActivity from "$lib/components/UpcomingActivity.svelte";
  import idStore from '../../stores/idStore';

// Use the $ syntax to subscribe to the store
  let currentId = $idStore;
  console.log(currentId)
</script>

<div class="min-h-screen bg-sky flex flex-col items-center">
  <div class="h-2" />
  <!-- Create space at the top -->
  <img
    class="w-40 h-100"
    src=".//imgs/AbilityLink_Logo.png"
    alt="AbilityLinkLogo"
  />

  <div class="h-20 w-80 mt-8 space-y-6 mb-12">
    <Buttons text={"Activiteit aanmaken"} href={"/activities/addActivity"} />

    <Buttons text={"Geplande activiteiten"} href={"/agenda"} />

    <Buttons text={"Groepen"} href={"/groups"} />
  </div>

  <div class="m-20 w-80">
    <UpcomingActivity />
  </div>
</div>

<style>
  .bg-sky {
    background-image: url(".//imgs/BG_Light_Blue.png");
    background-position: center;
  }
</style>
