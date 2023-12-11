<script>
  import Buttons from "$lib/components/Buttons.svelte";
</script>

<div class="min-h-screen bg-sky flex flex-col items-center">
<div class="h-2"></div> <!-- Create space at the top -->
  <img class="w-40 h-100" src=".//imgs/AbilityLink_Logo.png" alt="AbilityLinkLogo">

  <div class="h-20 w-80 mt-8 space-y-6 mb-12"> 
      <Buttons 
      text={"Inloggen"} 
      href={"/login"}>
      </Buttons>
    
      <Buttons 
      text={"Registeren"} 
      href={"/register"}>
      </Buttons>
  </div>
</div>

<style>
  .bg-sky {
      background-image: url(".//imgs/BG_Light_Blue.png");
      background-position: center;
  }
</style>
