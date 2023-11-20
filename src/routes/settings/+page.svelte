<script>
  import BackButton from "$lib/components/BackButton.svelte";
  import Buttons from "$lib/components/Buttons.svelte";
</script>

<BackButton href={"/"}></BackButton>

<div>
  <div class="min-h-screen bg-sky flex flex-col items-center">
    <div class="h-2"></div> <!-- Create space at the top -->


    <img class="w-40 h-100" src=".//imgs/AbilityLink_Logo.png" alt="AbilityLinkLogo">

    <div class="h-20 mt-8 space-y-6"> 
        <Buttons 
        text={"Notificaties"} 
        href={"notificaties"}
        image={"pr-2 l-2 fa-solid fa-bell-slash fa-shake fa-xl"}
        style={"color: #000000"}>
        </Buttons>

        <Buttons 
        text={"Terms and Services"} 
        href={"terms"}
        image={"pr-2 l-2 fa-solid fa-file-alt fa-xl"}
        style={"color: #000000"}>
        </Buttons>

        <Buttons 
        text={"Toegankelijkheid"} 
        href={"toegankelijkheid"}
        image={"pr-2 l-2 fa-solid fa-circle-half-stroke"}
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
