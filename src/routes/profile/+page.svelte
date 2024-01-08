<script>
  import { onMount } from 'svelte';
  import FormInput from "$lib/components/FormInput.svelte";
  import BackButton from "$lib/components/BackButton.svelte";
  import { fly } from "svelte/transition";
  import Logout from "$lib/components/Logout.svelte";
  import idStore from "../../stores/idStore";
  import { error } from "@sveltejs/kit";

  const userStore = $idStore;
  console.log($idStore);
  let data = null; // Initialize data as null initially

  async function fillUserData() {
    try {
      const res = await fetch(`http://localhost:3011/users/${userStore}`);
      const values = await res.json();
      console.log(values);
      return values;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error; // Re-throw the error to be caught by the {:catch} block
    }
  }

  onMount(async () => {
    try {
      data = await fillUserData();
    } catch (error) {
      // Handle errors if needed
    }
  });
</script>

<BackButton />
<Logout />

<body transition:fly={{ y: 300, duration: 300 }}>
  <div class="min-h-screen bg-sky flex flex-col items-center">
    <div class="h-2" />
    <img
      class="rounded-full w-40 h-100"
      src=".//imgs/Placeholder_Profile.png"
      alt="Placeholder"
    />
    
    {#if data !== null}
      <div class="h-40 mt-8 space-y-6">
        <form action="/profile" class="flex flex-col">
          <div class="flex flex-col mb-4">
            { console.log(data) }
            <h1>Name: {data.name}</h1>
            <h1>Age: {data.age}</h1>
            <h1>Handicap: {data.handicap}</h1>
            <h1>Phonenumber:</h1>
          </div>
          <input
            type="submit"
            value="Opslaan"
            class="w-30 flex items-center text-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white button-color md:py-4 md:text-lg md:px-10 hover:bg-blue-500 hover:text-white transition bottom"
          />
        </form>
      </div>
    {/if}

    {#if data === null}
      <p>Loading...</p>
    {/if}

    <div class="mt-48 space-y-6" />
  </div>
</body>

<style>
  .bg-sky {
    background-image: url(".//imgs/BG_Light_Blue.png");
    background-position: center;
  }

  .button-color {
    background-color: #ff9d00;
  }
</style>
