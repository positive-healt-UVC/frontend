<script>
    import { goto } from '$app/navigation';
    import DeleteButton from '$lib/components/DeleteButton.svelte';

  let webId = null;

  if (typeof window !== 'undefined') {
    // If running in a browser environment
    webId = window.location.href.split('/').at(-1);
  }

  async function getAllEvents() {
    const res = await fetch(`http://localhost:3000/events/events/${webId}`);
    const values = await res.json();
    return values;
  }

  let loadingEvent = getAllEvents();
</script>

<div class="button-container">
  {#await loadingEvent}
    <p>Loading...</p>
  {:then events}
  <h1 class="text-2xl font-bold border-b-2 mt-0 text-center">
    {events.name}
  </h1>  {:catch error}
    <p class="error-message">Error: {error.message}</p>
  {/await}
</div>


<div class="button-container">
  {#await loadingEvent}
    <p>Loading...</p>
  {:then event}
      <div class="event-grid">
        <h1><strong>Algemene informatie:</strong></h1>
        <div class="event-details">
          <p><strong>Start Tijd:</strong> {event.startingTime}</p>
          <p><strong>Eind Tijd:</strong> {event.endingTime}</p>
          <p><strong>Locatie:</strong> {event.location}</p>
        </div>
      </div>

      <div class="event-grid">
        <h1><strong>Beschrijving:</strong></h1>
          <p>{event.description}</p>
      </div>

      <div class="event-grid">
        <p class="mt-2">Datum: {new Date(event.date).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric"
        })}</p>
    </div>
  {:catch error}
    <p class="error-message">Error: {error.message}</p>
  {/await}

  <div class="flex w-max m-4">
    <DeleteButton eventId={webId} />
    <a href="{webId}/edit" class="ml-4">
        <button class="flex text-center justify-center px-8 py-3 rounded-xl text-white button-color bg-blue-500 w-4/5">Aanpassen</button>
    </a>
  </div>
    
</div>

<div class="flex justify-center items-center">
  <div class="p-2 mr-3 text-center">
    <i class="fa-solid fa-address-card fa-3x"></i>
    <p>contact</p>
  </div>
  <div class="p-2 text-center">
    <i class="fa-solid fa-people-group fa-3x"></i>
    <p>deelnemers</p>
  </div>
  <div class="p-2 text-center">
    <i class="fa-solid fa-pen-to-square fa-3x"></i>    
    <p>Aanmelden</p>
  </div>
</div>


<style>
  .button-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
  }

  .event-grid {
      background-color: #FF9D00;
      border: none;
      border-radius: 10px;
      padding: 10px;
      margin: 10px;
      width: 300%;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .event-grid h1 {
      font-size: 18px;
      color: #fff;
      margin: 0;
  }

  .event-grid p {
      font-size: 14px;
      color: #fff;
      margin: 5px 0;
  }

  .event-grid a {
      text-decoration: none;
  }

  .event-grid button {
      background-color: transparent;
      border: 1px solid #fff;
      color: #fff;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 12px;
      cursor: pointer;
  }

  .event-grid button:hover {
      background-color: #fff;
      color: #FF9D00;
  }

  .error-message {
      color: #ff0000;
  }
</style>
