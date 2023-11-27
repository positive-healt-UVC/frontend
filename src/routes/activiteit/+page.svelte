<script>
  import BackButton from "$lib/components/BackButton.svelte";
</script>

<BackButton></BackButton>

<div class="bg-sky">
  <div class="min-h-screen flex flex-col items-center">
    <div class="w-5/6 rounded-md mt-5">
      <h1 class="text-3xl text-center font-bold">Zwemmen</h1>
      <div class="mt-5">
        <img src=".//imgs/zwemmen.jpg" alt="zwemmen" class="rounded-md" />
      </div>
      <div class="mt-5 pb-3">
        <div class="ml-5">
          <p class="font-bold">De Aanloop 1, 4335 AT Middelburg</p>
          <p class="mt-5 font-bold">Groepsnummer: <a href="groups">1</a></p>
          <p class="font-bold">Start tijd:</p>
          <p class="font-bold">Eind tijd:</p>
          <div>
            <p class="font-bold">Handicaps:</p>
            <i class="fa-solid fa-ear-deaf fa-lg" style="color: #000000;" />
            <i
              class="fa-solid fa-eye-slash fa-lg ml-2"
              style="color: #000000;"
            />
            <i
              class="fa-solid fa-wheelchair fa-lg ml-2"
              style="color: #000000;"
            />
          </div>
        </div>
        <div class="button-color rounded-md w-11/12 ml-3 mb-20 pb-5 mt-5">
          <p class="mt-5 font-bold ml-2 text-white pt-2">Beschrijving:</p>
          <p class="mt-2 ml-2 mr-2 text-white">
            Zwemmen voor gehandicapten is een inclusieve en verrijkende
            activiteit die niet alleen fysieke voordelen biedt, maar ook een
            gevoel van vrijheid, ontspanning en sociale integratie bevordert.
            Ongeacht de aard van de beperking biedt het water een unieke
            omgeving waarin mensen met verschillende handicaps kunnen genieten
            van beweging, oefening en plezier.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .bg-sky {
    background-image: url(".//imgs/BG_Light_Blue.png");
    background-position: center;
  }

  .button-color {
    background-color: #ff9d00;
  }
</style>
