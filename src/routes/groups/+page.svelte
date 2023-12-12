<script>
  import BackButton from "$lib/components/BackButton.svelte";
  import Buttons from "$lib/components/Buttons.svelte";
  import Group from "$lib/components/Group.svelte";
  import { fly } from "svelte/transition";
</script>

<BackButton></BackButton>

<body transition:fly={{ y: 300, duration: 300 }}>

<div class="min-h-screen bg-sky flex flex-col items-center">
  <div class="h-2" />
  <!-- Create space at the top -->
  <img
    class="w-40 h-100"
    src=".//imgs/AbilityLink_Logo.png"
    alt="AbilityLinkLogo"
  />

  <div class="h-20 mt-8 space-y-6">
    <div class="mb-20">
    <Group href = {"/groups/1"} group={"Groep1"} />

    <Group href = {"/groups/2"} group={"Groep2"} />

    <Group href = {"/groups/3"} group={"Groep3"} />
    </div>

    <div class="mt-10">
      <Buttons 
        text={"Groep aanmaken"} 
        href={"/groups/addGroup"}
        image={""}
        style={"color: #000000"}>
      </Buttons>
    </div>
  </div>
</div>

</body>

<style>
  .bg-sky {
    background-image: url(".//imgs/BG_Light_Blue.png");
    background-position: center;
  }
</style>
