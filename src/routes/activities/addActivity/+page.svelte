<script>
  import { goto } from "$app/navigation";
  import BackButton from "$lib/components/BackButton.svelte";
  import Modal from "$lib/components/Modal.svelte";
  import GroupsDropdown from "$lib/components/GroupsDropdown.svelte";

  let showModal = false;
  let groups = [];

  // get all groups for the dropdown
  async function fetchGroups() {
    try {
      const response = await fetch('http://localhost:3000/groups/groups/');
      groups = await response.json();
    } catch (error) {
      console.error('Error fetching groups:', error);
    }
  }

  fetchGroups();

  function openModal() {
    showModal = true;
  }

  function handleModalClick() {
    goto("../agenda");
  }

  let activityData = {
    name: "",
    description: "",
    date: "",
    startingTime: "",
    endingTime: "",
    location: "",
    selectedGroup: null
  };

  let errors = {};

  const validateForm = () => {
    errors = {};

    const fields = [
      { name: "name", label: "Naam is verplicht" },
      { name: "date", label: "Datum is verplicht" },
      { name: "startingTime", label: "Starttijd is verplicht" },
      { name: "endingTime", label: "Eindtijd is verplicht" },
      { name: "location", label: "Locatie is verplicht" },
    ];

    fields.forEach((field) => {
      if (!activityData[field.name]) {
        errors[field.name] = field.label;
      }
    });

    const selectedDate = new Date(activityData.date);
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      errors.date = "Datum mag niet in het verleden liggen";
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
      groupId: activityData.selectedGroup
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
        openModal();
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

<BackButton/>

<Modal bind:show={showModal}>
  <p>Activiteit toegevoegd!</p>
  <button class="mt-4 w-30 flex items-center text-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white button-color md:py-4 md:text-lg md:px-10" on:click={handleModalClick}>Sluiten</button>
</Modal>

<div class="bg-sky container mx-auto min-h-screen flex flex-col items-center">
  <h1 class="mt-10 text-2xl font-bold border-b-2 text-center mb-5">
    Activiteit toevoegen
  </h1>
  <p class="text-xs text-center -mt-4">
    * = verplicht


  <form on:submit|preventDefault={addEvent} class="max-w-md mx-auto p-2 rounded-xl">
    <div class="mb-4">
      <label for="activityName" class="block text-gray-700 text-sm font-bold mb-2">Naam Activiteit: *</label>
      <input id="activityName" type="text" class="w-full px-4 py-2 border rounded-xl focus:border-gray-500" bind:value={activityData.name} />
      {#if errors.name}<p class="text-red-500 text-sm mt-1">{errors.name}</p>{/if}
    </div>

    <div class="mb-4">
      <label for="activityDescription" class="block text-gray-700 text-sm font-bold mb-2">Omschrijving:</label>
      <textarea id="activityDescription" class="w-full h-25 px-4 py-2 border rounded-xl focus:border-gray-500" bind:value={activityData.description}></textarea>
      {#if errors.description}<p class="text-red-500 text-sm mt-1">{errors.description}</p>{/if}
    </div>

    <div class="mb-4">
      <label for="activityDate" class="block text-gray-700 text-sm font-bold mb-2">Datum: *</label>
      <input id="activityDate" type="date" class="w-full px-4 py-2 border rounded-xl focus:border-gray-500" bind:value={activityData.date} />
      {#if errors.date}<p class="text-red-500 text-sm mt-1">{errors.date}</p>{/if}
    </div>

    <div class="mb-4">
      <label for="activityStartingTime" class="block text-gray-700 text-sm font-bold mb-2">Begintijd: *</label>
      <input id="activityStartingTime" type="time" class="w-full px-4 py-2 border rounded-xl focus:border-gray-500" bind:value={activityData.startingTime} />
      {#if errors.startingTime}<p class="text-red-500 text-sm mt-1">{errors.startingTime}</p>{/if}
    </div>

    <div class="mb-4">
      <label for="activityEndingTime" class="block text-gray-700 text-sm font-bold mb-2">Eindtijd: *</label>
      <input id="activityEndingTime" type="time" class="w-full px-4 py-2 border rounded-xl focus:border-gray-500" bind:value={activityData.endingTime} />
      {#if errors.endingTime}<p class="text-red-500 text-sm mt-1">{errors.endingTime}</p>{/if}
    </div>

    <div class="mb-4">
      <label for="activityLocation" class="block text-gray-700 text-sm font-bold mb-2">Locatie: *</label>
      <input id="activityLocation" type="text" class="w-full px-4 py-2 border rounded-xl focus:border-gray-500" bind:value={activityData.location} />
      {#if errors.location}<p class="text-red-500 text-sm mt-1">{errors.location}</p>{/if}
    </div>

    <div class="mb-4">
      <GroupsDropdown bind:groups={groups} bind:selectedGroup={activityData.selectedGroup} />
    </div>

    <div>
      <button type="submit" class="w-30 flex items-center text-center justify-center px-8 py-3 text-base font-medium rounded-xl text-white button-color mb-20">Activiteit aanmaken</button>
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
