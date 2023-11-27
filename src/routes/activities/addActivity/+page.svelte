<script>
  import { goto } from "$app/navigation";
  
  let activityData = { name: "", description: "", date: "", startingTime: "", endingTime: "", location: ""};
  
    const addEvent = async () => {
      const newEventData = {
        name: activityData.name,
        description: activityData.description,
        date: activityData.date,
        startingTime: activityData.startingTime,
        endingTime: activityData.endingTime,
        location: activityData.location,
      };
      try {
        console.log(JSON.stringify(newEventData));
        const response = await fetch("http://localhost:3000/events/events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newEventData),
        });
  
        if (response.ok) {
                console.log("Event data successfully added");
              // goto("../agenda");
            } else {
                console.error("Failed to add Event data");
            }
      } catch (error) {
        console.error("Error:", error instanceof Error ? error.message : error);
      }
    };
  </script>
  
<div class="container mx-auto min-h-screen flex flex-col items-center">
  <h1 class="m-5 text-2xl font-bold mb-4 py-4 border-b-2">
    Activiteit toevoegen
  </h1>

  <form on:submit|preventDefault={addEvent} class="max-w-md mx-auto bg-white p-8 rounded-xl">
    <div class="mb-4">
      <label
        for="activityName"
        class="block text-gray-700 text-sm font-bold mb-2">Naam:</label
      >
      <input
        id="activityName"
        type="text"
        class="w-full px-4 py-2 border rounded-xl focus:border-gray-500"
        bind:value={activityData.name}
      />
    </div>

    <div class="mb-4">
      <label
        for="activityDescription"
        class="block text-gray-700 text-sm font-bold mb-2">Omschrijving:</label
      >
      <textarea
        id="activityDescription"
        class="w-full h-25 px-4 py-2 border rounded-xl focus:border-gray-500"
        bind:value={activityData.description}
      />
    </div>

    <div class="mb-4">
      <label
        for="activityDate"
        class="block text-gray-700 text-sm font-bold mb-2">datum:</label
      >
      <input
        id="activityDate"
        type="datetime-local"
        class="w-full px-4 py-2 border rounded-xl focus:border-gray-500"
        bind:value={activityData.date}
      />
    </div>

    <div class="mb-4">
      <label
        for="activityStartingTime"
        class="block text-gray-700 text-sm font-bold mb-2">begintijd:</label
      >
      <input
        id="activityStartingTime"
        type="time"
        class="w-full px-4 py-2 border rounded-xl focus:border-gray-500"
        bind:value={activityData.startingTime}
      />
    </div>

    <div class="mb-4">
      <label
        for="activityEndingTime"
        class="block text-gray-700 text-sm font-bold mb-2">Eindtijd:</label
      >
      <input
        id="activityEndingTime"
        type="time"
        class="w-full px-4 py-2 border rounded-xl focus:border-gray-500"
        bind:value={activityData.endingTime}
      />
    </div>

    <div class="mb-4">
      <label
        for="activityLocation"
        class="block text-gray-700 text-sm font-bold mb-2">locatie:</label
      >
      <input
        id="activityLocation"
        type="text"
        class="w-full px-4 py-2 border rounded-xl focus:border-gray-500"
        bind:value={activityData.location}
      />
    </div>
    <div class="mb-20">
      <button
      type="submit"
      class="w-full bg-gray-500 text-white px-4 py-2 rounded-xl hover:bg-green-400">
      Activiteit aanmaken
    </button>
    </div>
  </form>
</div>

