<script>
  import BackButton from "$lib/components/BackButton.svelte";
  import Buttons from "$lib/components/Buttons.svelte";

          let darkMode = false;

          function toggleDarkMode() {
            console.log("Dark mode toggled");
            darkMode = !darkMode;
            // Voeg darkmode logic toe.
          }

</script>

<BackButton></BackButton>

<div class="bg-sky ">
  <div class="min-h-screen flex flex-col items-center">
    <div class="h-2"></div> <!-- Create space at the top -->


    <img class="w-40 h-100" src="..//imgs/AbilityLink_Logo.png" alt="AbilityLinkLogo">

    <div class="h-20 mt-8 space-y-6"> 

        <Buttons 
          text={"Dark/Light Mode"}
          href={"darkmode"}
          image={"pr-2 l-2 fa-solid fa-circle-half-stroke fa-xl"}
          style={"color: #000000"}
          on:click={toggleDarkMode}
        ></Buttons>

        <Buttons 
        text={"Colors"} 
        href={"colors"}
        image={"pr-2 l-2 fa-solid fa-palette fa-xl"}
        style={"color: #000000"}>
        </Buttons>
    </div>
  
  
</div>
</div>

<style>
  .bg-sky {
    background-image: url(".//imgs/BG_Light_Blue.png");
    background-position: center;
  }
</style>
