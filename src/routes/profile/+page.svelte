<script>
  import Buttons from "$lib/components/Buttons.svelte";
  import UpcomingActivity from "$lib/components/UpcomingActivity.svelte";
</script>

<div class="min-h-screen bg-sky flex flex-col items-center">
  <div class="h-2" />
  <!-- Create space at the top -->
  <img
    class="rounded-full w-40 h-100"
    src=".//imgs/Placeholder_Profile.png"
    alt="Placeholder"
  />

  <div class="h-40 mt-8 space-y-6">
    <form action="/profile" class="flex flex-col">
      <div class="flex flex-col mb-4">
        <label for="fname" class="mb-1 text-center">Voornaam</label>
        <input type="text" id="fname" class="w-40 mt-1 resize-none mb-2 p-2 border border-gray-300 rounded"/>
        
        <label for="lname" class="mb-1 text-center">Achternaam</label>
        <input type="text" id="lname" class="w-40 mt-1 resize-none mb-2 p-2 border border-gray-300 rounded"/>
        
        <label for="geboortedatum" class="mb-1 text-center">Geboortedatum</label>
        <input type="date" id="geboortedatum" class="w-40 mt-1 resize-none mb-2 p-2 border border-gray-300 rounded"/>
        
        <label for="handicaps" class="mb-1 text-center">Handicaps</label>
        <input type="text" id="handicaps" class="w-40 mt-1 resize-none mb-2 p-2 border border-gray-300 rounded"/>
      </div>
      
      <!-- Submit button outside the flex container -->
      <input type="submit" value="Submit" class="w-30 flex items-center text-center 
      justify-center px-8 py-3 
      border border-transparent 
      text-base font-medium 
      rounded-xl 
      text-white 
      button-color 
      md:py-4 md:text-lg md:px-10 
      hover:bg-blue-500 hover:text-white transition">
    </form>
  </div>

  <div class="mt-48 space-y-6" />
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
