<script>
function getCurrentDayNumber() {
    const currentDate = new Date();
    const startOfYear = new Date(currentDate.getFullYear(), 0, 1); // January 1st of the current year
    const millisecondsInDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day

    // Calculate the difference in days
    const diffInMilliseconds = currentDate - startOfYear;
    const diffInDays = Math.floor(diffInMilliseconds / millisecondsInDay) + 1;

    return diffInDays;
  }

  function getDate() {
    const dayNumber = getCurrentDayNumber() + 1;
    const date = new Date(2023, 0);
    date.setDate(dayNumber);
    return date.toISOString().split("T")[0];
  }


  function changeWeek(value) {
    dayNumber += value;
    eventsPromises = getAllEvents();
    alert('test');
  }

  async function getAllEvents() {
    const res = await fetch(`http://localhost:3000/events/events/day/${dayNumber}`);
    const values = await res.json();
    return values;
  }

  let dayNumber = getCurrentDayNumber();
  let eventsPromises = getAllEvents();
</script>

<h1 class="text-2xl font-bold border-b-2 mt-0">Geplande Activiteiten</h1>

<div class="button-container">
  <div class="weekbutton-color rounded-2xl h-16" id="weekSelector">
    <div class="w-1/6 h-3/4 bg-white" on:click={() => changeWeek(1)}></div>
    {getDate()}
    {getCurrentDayNumber()}
  </div>
  {#await eventsPromises}
    <li>...waiting</li>
  {:then events}
    {#each events as event, index}
      {#if index === 0 || event.date !== events[index - 1].date}
        <div class="bg-gray-200 h-12 w-4/5 mt-10 rounded-2xl" id="weekSelector">
          Datum: {new Date(event.date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </div>
      {/if}
      <div class="button-color rounded-2xl">
        <h1 class="text-center mt-2 mb-1">{event.name}</h1>
        <div class="text-white ml-2">
          <p>Begin tijd: {event.startingTime}</p>
          <p>Eind tijd: {event.endingTime}</p>
          <p>Locatie: {event.location}</p>
          <!-- <p class="mt-2">
            Datum: {new Date(event.date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p> -->
        </div>
        <p class="text-xs text-sky-600 float-right mb-1 mr-5">
          <a href="activiteit"><button>Details</button></a>
        </p>
      </div>
    {/each}
  {:catch error}
    <li>Error: {error.message}</li>
  {/await}
</div>

<style>
  .button-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .button-color {
    background-color: #ff9d00;
    border: none;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    width: 300%;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .weekbutton-color {
    background-color: #4f4f4f71;
    border: none;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    width: 300%;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .button-color:hover {
    background-color: #ffb84d;
    cursor: pointer;
  }

  .button-color h1 {
    font-size: 18px;
    color: #fff;
    margin: 0;
  }

  .button-color p {
    font-size: 14px;
    color: #fff;
    margin: 5px 0;
  }

  .button-color a {
    text-decoration: none;
  }

  .button-color button {
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
  }

  .button-color button:hover {
    background-color: #fff;
    color: #ff9d00;
  }
</style>
