<script>

    import Agenda from "$lib/components/Agenda.svelte";
    import WeekNumber from "$lib/components/WeekNumber.svelte";

</script>
<div class="bg-sky">
  <div class="min-h-screen flex flex-col items-center">
    <div class="bg-slate-500 w-full">
        <p>menu</p>
    </div>
    <div class="w-5/6 rounded-md mt-5">
        <h1 class="text-3xl text-center font-bold">Zwemmen</h1>
        <div class="mt-5">
            <img src=".//imgs/zwemmen.jpg" alt="zwemmen" class="rounded-md">
        </div>
        <div class="mt-5 bg-white rounded-md pb-3">
            <div class="ml-5">
            <p class="font-bold">De Aanloop 1, 4335 AT Middelburg</p>
            <p class="mt-5 font-bold">Start tijd:</p>
            <p class="font-bold">Eind tijd:</p>
        </div>
        <div class="button-color rounded-md w-11/12 ml-3">
            <p class="mt-5 font-bold ml-2">Beschrijving:</p>
            <p class="mt-2 ml-2 mr-2">Zwemmen voor gehandicapten is een inclusieve en verrijkende activiteit die niet alleen fysieke voordelen biedt, 
                maar ook een gevoel van vrijheid, ontspanning en sociale integratie bevordert. 
                Ongeacht de aard van de beperking biedt het water een unieke omgeving waarin mensen met verschillende handicaps kunnen genieten van beweging, 
                oefening en plezier.</p>
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
            background-color: #FF9D00 ;
        }
    </style>
  