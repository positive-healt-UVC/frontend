<script>
  import { goto } from "$app/navigation";
  import BackButton from "$lib/components/BackButton.svelte";

  let activityData = {
    name: "",
    description: "",
    date: "",
    startingTime: "",
    endingTime: "",
    location: "",
  };

  let errors = {};

  const validateForm = () => {
    errors = {};

    // Basic validation example, you can add more complex validation rules
    if (!activityData.name) {
      errors.name = "Naam is verplicht";
    }

    if (!activityData.description) {
      errors.description = "Beschrijving is verplicht";
    }

    if (!activityData.date) {
      errors.date = "Datum is verplicht";
    }

    if (!activityData.startingTime) {
      errors.startingTime = "Starttijd is verplicht";
    }

    if (!activityData.endingTime) {
      errors.endingTime = "Eindtijd is verplicht";
    }

    if (!activityData.location) {
      errors.location = "Locatie is verplicht";
    }

    return Object.keys(errors).length === 0;
  };

  const addEvent = async () => {
    if (!validateForm()) {
      return;
    }

    const newEventData = {
      name: activityData.name,
      description: activityData.description,
      date: activityData.date,
      startingTime: activityData.startingTime,
      endingTime: activityData.endingTime,
      location: activityData.location,
    };

    try {
      const response = await fetch("http://localhost:3010/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEventData),
      });

      if (response.ok) {
        console.log("Event data successfully added");
        alert("Activiteit toegevoegd");
        goto("../agenda");
      } else {
        console.error("Failed to add Event data");
      }
    } catch (error) {
      console.error(
        "Error:",
        error instanceof Error ? error.message : error
      );
    }
  };
</script>

<BackButton />

<div class="bg-sky container mx-auto min-h-screen flex flex-col items-center">
  <h1 class="text-2xl font-bold py-4 border-b-2">
    Activiteit toevoegen
  </h1>

  <form on:submit|preventDefault={addEvent} class="max-w-md mx-auto  p-2 rounded-xl">
    <!-- Name -->
    <div class="mb-4">
      <label for="activityName" class="block text-gray-700 text-sm font-bold mb-2">Naam:</label>
      <input id="activityName" type="text" class="w-full px-4 py-2 border rounded-xl focus:border-gray-500" bind:value={activityData.name} />
      {#if errors.name}<p class="text-red-500 text-sm mt-1">{errors.name}</p>{/if}
    </div>
  
    <!-- Description -->
    <div class="mb-4">
      <label for="activityDescription" class="block text-gray-700 text-sm font-bold mb-2">Omschrijving:</label>
      <textarea id="activityDescription" class="w-full h-25 px-4 py-2 border rounded-xl focus:border-gray-500" bind:value={activityData.description}></textarea>
      {#if errors.description}<p class="text-red-500 text-sm mt-1">{errors.description}</p>{/if}
    </div>
  
    <!-- Date -->
    <div class="mb-4">
      <label for="activityDate" class="block text-gray-700 text-sm font-bold mb-2">Datum:</label>
      <input id="activityDate" type="date" class="w-full px-4 py-2 border rounded-xl focus:border-gray-500" bind:value={activityData.date} />
      {#if errors.date}<p class="text-red-500 text-sm mt-1">{errors.date}</p>{/if}
    </div>
  
    <!-- Starting Time -->
    <div class="mb-4">
      <label for="activityStartingTime" class="block text-gray-700 text-sm font-bold mb-2">Begintijd:</label>
      <input id="activityStartingTime" type="time" class="w-full px-4 py-2 border rounded-xl focus:border-gray-500" bind:value={activityData.startingTime} />
      {#if errors.startingTime}<p class="text-red-500 text-sm mt-1">{errors.startingTime}</p>{/if}
    </div>
  
    <!-- Ending Time -->
    <div class="mb-4">
      <label for="activityEndingTime" class="block text-gray-700 text-sm font-bold mb-2">Eindtijd:</label>
      <input id="activityEndingTime" type="time" class="w-full px-4 py-2 border rounded-xl focus:border-gray-500" bind:value={activityData.endingTime} />
      {#if errors.endingTime}<p class="text-red-500 text-sm mt-1">{errors.endingTime}</p>{/if}
    </div>
  
    <!-- Location -->
    <div class="mb-4">
      <label for="activityLocation" class="block text-gray-700 text-sm font-bold mb-2">Locatie:</label>
      <input id="activityLocation" type="text" class="w-full px-4 py-2 border rounded-xl focus:border-gray-500" bind:value={activityData.location} />
      {#if errors.location}<p class="text-red-500 text-sm mt-1">{errors.location}</p>{/if}
    </div>
  
    <div>
      <button type="submit" class="w-30 flex items-center text-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white button-color md:py-4 md:text-lg md:px-10">Activiteit aanmaken</button>
    </div>
  </form>
</div>

<style>
  .bg-sky {
    background-image: url("..//imgs/BG_Light_Blue.png");
    background-position: center;
  }

  .button-color {
    background-color: #ff9d00;
  }
</style>
