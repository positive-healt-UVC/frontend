<script>
    export let naamActiviteit = "Naam activiteit";
    export let startTijd = "Begin tijd";
    export let eindTijd = "Eind tijd";
    export let locatie = "Locatie";
</script>

<div class="button-color rounded-md h-32">
    <h1 class="text-center text-lg mt-2 mb-1 text-white">{naamActiviteit}</h1>
    <div class="text-sm text-white ml-2">
        <p>Begin tijd: {startTijd}</p>
        <p>Eind tijd:{eindTijd}</p>
        <p class="mt-2">{locatie}</p>
    </div>
    <p class="text-xs text-sky-600 float-right mb-1 mr-5"><a href="activiteit"><button>More ></button></a></p>
</div>

<style>
    .button-color {
        background-color: #FF9D00 ;
      }
</style>
