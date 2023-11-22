<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import Buttons from "$lib/components/Buttons.svelte";
    import BackButton from '$lib/components/BackButton.svelte';
</script>

<BackButton></BackButton>

<div class="min-h-screen bg-sky flex flex-col items-center text-center">

  <img class="w-40 h-100 pb-10" src=".//imgs/AbilityLink_Logo.png" alt="AbilityLinkLogo">


  <h1>404 Error - Pagina niet gevonden.</h1>
  <p class="pb-5">Het lijkt erop dat de pagina die je zocht niet gevonden kon worden (fout 404).</p>
  <p class="pb-5">Geen zorgen! Je wordt automatisch binnen 20 seconden teruggeleid naar de homepagina.</p>
  <p class="pb-5">Mocht dit niet gebeuren, klik dan op de onderstaande link om direct terug te keren:</p>

  <div class="mt-5"> 
    <Buttons 
    text={"Keer terug naar de homepagina"} 
    href={"/"}>
    </Buttons>
  </div>

  <div>
    <img class="w-40 h-100 pt-10" src=".//imgs/Warning.png" alt="WarningIcon">
  </div>
</div>


<style>
  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
  }

  .bg-sky {
        background-image: url(".//imgs/BG_Light_Blue.png");
        background-position: center;
      }
</style>
