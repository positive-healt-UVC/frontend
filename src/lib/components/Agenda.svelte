<script>
  let date = getDate(0);
  let year = 2023;
  let changedDate = 0;
  let eventsPromises = getAllEvents();

  async function changeDate(value) {
    if (getWeekNumber(getDate(changedDate)) == 52 && value > 0) {
      year += 1;
    }
    if (getWeekNumber(getDate(changedDate)) == 1 && value < 0) {
      year -= 1;
    }
    changedDate += value;
    date = getDate(changedDate);
    eventsPromises = getAllEvents();
  }

  async function getAllEvents() {
    const res = await fetch(`http://localhost:3000/events/events/date/${date}`);
    const values = await res.json();
    return values;
  }

  function getDate(day) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const daysUntilStartOfWeek = (today.getDay() + 6) % 7;
    const targetDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - daysUntilStartOfWeek + day
    );
    const formattedDate = targetDate.toISOString().split("T")[0];

    return formattedDate;
  }

  function getWeekNumber(dateString) {
    const date = new Date(dateString);
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 4 - (date.getDay() || 7));
    const yearStart = new Date(date.getFullYear(), 0, 1);
    let weekNumber = Math.ceil(((date - yearStart) / 86400000 + 1) / 7) + 1;

    if (weekNumber > 52) {
      weekNumber = 1;
    }
    return weekNumber;
  }

  function hasEventOccurred(event) {
    const eventDateTime = new Date(event.date + 'T' + event.endingTime);
    const currentDate = new Date();
    return eventDateTime <= currentDate;
  }
</script>

<h1 class="text-2xl font-bold border-b-2 mt-0 text-center">Geplande Activiteiten</h1>

<div class="button-container">
  <div class="weekbutton-color rounded-2xl h-16" id="weekSelector">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="w-1/6 h-3/4 bg-white mt-2 float-left rounded-xl text-center pt-1" on:click={() => changeDate(-7)}>
      <i class="fa-solid fa-angle-left"></i>
    </div> 
    <div class="w-2/3 h-3/4 mt-2 float-left rounded-xl text-center font-medium pt-1">
      Week {getWeekNumber(getDate(changedDate))}
      {year}   
     </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="w-1/6 h-3/4 bg-white float-right mt-2 float-left rounded-xl text-center pt-1" on:click={() => changeDate(7)}>
      <i class="fa-solid fa-angle-left fa-rotate-180"></i>
    </div>
  </div>

  {#await eventsPromises}
    <li>...waiting</li>
  {:then events}
  {#if events.length === 0}
    <div class="button-error text-center text-white" id="weekSelector">
      Geen activiteiten gepland
    </div>
  {/if}
    {#each events as event, index}
      {#if index === 0 || event.date !== events[index - 1].date}
      <div class="button-notImportant text-center font-extralight italic" id="weekSelector">
        {new Date(event.date).toLocaleDateString("nl-NL", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </div>      
      {/if}
      {#if hasEventOccurred(event)}
      <div class="button-done rounded-2xl">
        <a href="activities/{event.id}">
        <h1 class="text-center mb-1">{event.name}</h1>
        <div class="text-white ml-2">
          <p>Begin tijd: {event.startingTime}</p>
          <p>Eind tijd: {event.endingTime}</p>
        <p class="text-xs text-sky-600 float-right mb-1 mr-5">
          <a href="activities/{event.id}"><button>Details</button></a>
        </p>
        <p><i class="fa-solid fa-triangle-exclamation fa-xl" style="color: black;"></i> Deze activiteit is al geweest.</p>
        </a>
      </div>
      {:else}
      <div class="button-color rounded-2xl">
        <a href="activities/{event.id}">
        <h1 class="text-center mb-1">{event.name}</h1>
        <div class="text-white ml-2">
          <p>Begin tijd: {event.startingTime}</p>
          <p>Eind tijd: {event.endingTime}</p>
          <p>Locatie: {event.location}</p>
        </div>
        <p class="text-xs text-sky-600 float-right mb-1 mr-5">
          <a href="activities/{event.id}"><button>Details</button></a>
        </p>
        </a>
      </div>
      {/if}
    {/each}
  {:catch error}
    <li>Error: {error.message}</li>
  {/await}
</div>

<style>
  .button-container {
    display: flex;
    flex-wrap: wrap;
    width: 120%;
    margin-left: -10%;
  }

  .button-color,
  .button-error,
  .button-done,
  .weekbutton-color {
    background-color: #ff9d00;
    border: none;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    width: 100%;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .button-done {
    background-color: #c7c7c7;
  }

  .button-notImportant {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    background-color: #FF9D00;
    border-radius: 10px;
    padding: 10px;
    margin: 10px auto;
    width: auto;
  }

  .button-error {
    background-color: rgb(255, 0, 0);
  }

  .weekbutton-color {
    background-color: #FF9D00;
  }

  .button-done:hover,
  .button-color:hover {
    background-color: #ffb84d;
    cursor: pointer;
  }

  .button-done:hover {
    background-color: #6a6a6a;
    cursor: pointer;
  }
  
  .button-color h1 {
    font-weight: bold;
    font-size: 22px;
    color: black;
    margin: 0;
  }

  
  .button-color p {
    font-size: 14px;
    color: black;
    margin: 5px 0;
  }

  .button-done p {
    font-size: 14px;
    color: black;
    margin: 5px 0;
  }

  .button-color a {
    text-decoration: none;
  }

  .button-done a {
    text-decoration: none;
  }

  .button-color button {
    background-color: transparent;
    border: 1px solid black;
    color: black;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
  }

  .button-done button {
    background-color: transparent;
    border: 1px solid black;
    color: black;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
  }

  .button-color button:hover {
    background-color: #fff;
    color: #000000;
  }

  .button-done button:hover {
    background-color: #fff;
    color: #000000;
  }
</style>
