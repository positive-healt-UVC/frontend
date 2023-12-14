<script>
    import Buttons from "./Buttons.svelte";
    import Group from "./Group.svelte";

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

  async function getAllGroups() {
    const res = await fetch(`http://localhost:3000/groups/groups/`);
    const values = await res.json();
    return values;
  }

  let loadingEvent = getAllEvents();
  let groupsPromises = getAllGroups();

    // Selected group state
    let selectedGroup = null;
    let selectedGroupName = null;

    // Event handler for dropdown change
    function handleDropdownChange(event) {      
        for (let i = 0; i < event.target.options.length; i++) {
          if (selectedGroup === event.target.options[i].value) {
            selectedGroupName = event.target.options[i].text;
          }
        }
    }
</script>

<div class="button-container">
  {#await loadingEvent}
    <p>Loading...</p>
  {:then events}
  {#if events.length === 0}
    <div class="button-error text-center text-white" id="weekSelector">
      Geen activiteiten en groepen gevonden
    </div>
  {/if}
  <h1 class="text-2xl font-bold border-b-2 mt-0 text-center">
    {events.name}
  </h1>  {:catch error}
    <p class="error-message">Error: {error.message}</p>
  {/await}
</div>


<div class="button-container">
  {#await Promise.all([loadingEvent, groupsPromises])}
    <p>Loading...</p>
  {:then [event, groupTable]}
      <div class="event-grid">
        <h1><strong>Algemene informatie:</strong></h1>
        <div class="event-details">
          <p><strong>Start Tijd:</strong> {event.startingTime}</p>
          <p><strong>Eind Tijd:</strong> {event.endingTime}</p>
            <p><strong>Groep:</strong> 
                <select bind:value={selectedGroup} on:change={handleDropdownChange} class="group-selecter">
                    {#each groupTable as group}
                        <option value={group.id}>{group.name}</option>
                    {/each}
                </select>
              </p>
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
</div>

<div class="flex justify-center items-center">
  <div class="p-2 mr-3 text-center">
    <i class="fa-solid fa-address-card fa-3x"></i>
    <p>contact</p>
  </div>
  <div class="p-2 text-center">
    <a href="/groups/{selectedGroup}"><i class="fa-solid fa-people-group fa-3x"></i></a>  
    <a href="/groups/{selectedGroup}"><p>deelnemers</p></a>
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
  .group-selecter {
    background-color: #FF9D00;

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
  .error-message {
      color: #ff0000;
  }
</style>
