<script>
    import FormInput from "$lib/components/FormInput.svelte";
    import BackButton from "$lib/components/BackButton.svelte";
</script>

<BackButton></BackButton>

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
        <FormInput 
        label={"fname"}
        labeling={"Voornaam"}
        type={"text"}
        ></FormInput>
        
        <FormInput 
        label={"lname"}
        labeling={"Achternaam"}
        type={"text"}
        ></FormInput>
        
        <FormInput 
        label={"geboortedatum"}
        labeling={"Geboortedatum"}
        type={"date"}
        ></FormInput>

        <FormInput 
        label={"handicaps"}
        labeling={"Handicaps"}
        type={"text"}
        ></FormInput>
      </div>
      
      <!-- Submit button outside the flex container -->
      <input type="submit" value="Opslaan" class="w-30 flex items-center text-center 
      justify-center px-8 py-3 
      border border-transparent 
      text-base font-medium 
      rounded-xl 
      text-white 
      button-color 
      md:py-4 md:text-lg md:px-10 
      hover:bg-blue-500 hover:text-white transition
      bottom">
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
