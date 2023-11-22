<script>
    import Buttons from "$lib/components/Buttons.svelte";
    import UpcomingActivity from "$lib/components/UpcomingActivity.svelte";
</script>
<div class="min-h-screen bg-sky flex flex-col items-center">
  <div class="h-2"></div> <!-- Create space at the top -->
    <img class="w-40 h-100" src=".//imgs/AbilityLink_Logo.png" alt="AbilityLinkLogo">

    <div class="h-20 mt-8 space-y-6"> 
        <Buttons 
        text={"Activiteit aanmaken"} 
        href={"/addActivity"}>
        </Buttons>
      
        <Buttons 
        text={"Geplande activiteiten"} 
        href={"/agenda"}>
        </Buttons>

        <Buttons 
        text={"Groepen"} 
        href={"/groups"}>
        </Buttons>
    </div>

    <div class="mt-48 space-y-6">
      <UpcomingActivity></UpcomingActivity>
  </div>
</div>

    <style>
      .bg-sky {
        background-image: url(".//imgs/BG_Light_Blue.png");
        background-position: center;
      }
    </style>
  
