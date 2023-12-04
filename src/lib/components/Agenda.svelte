<script>
  function getDate(day) {
    const today = new Date();
    const currentDay = today.getDate() + 1;
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();

    const targetDate = new Date(currentYear, currentMonth - 1, currentDay + day);
    const formattedDate = targetDate.toISOString().split('T')[0];

    return formattedDate;
  }

  async function changeDate(value) {
    changedDate += value;
    date = getDate(changedDate);
    console.log(getDate(0))
    eventsPromises = getAllEvents();
  }

function getWeekNumber(dateString) {
  const date = new Date(dateString);
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 4 - (date.getDay() || 7));
  const yearStart = new Date(date.getFullYear(), 0, 1);
  const weekNumber = Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
  return weekNumber;
}

function getYearFromDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  return year;
}

  async function getAllEvents() {
    const res = await fetch(`http://localhost:3000/events/events/day/${date}`);
    const values = await res.json();
    return values;
  }

  let date = getDate(0);
  let changedDate = 0;
  let eventsPromises = getAllEvents();
</script>

<h1 class="text-2xl font-bold border-b-2 mt-0">Geplande Activiteiten</h1>

<div class="button-container">
  <div class="weekbutton-color rounded-2xl h-16" id="weekSelector">
    <div class="w-1/6 h-3/4 bg-white mt-2 float-left rounded-xl text-center pt-1" on:click={() => changeDate(-7)}>
      <i class="fa-solid fa-angle-left"></i>
    </div> 
    <div class="w-2/3 h-3/4 mt-2 float-left rounded-xl text-center font-medium pt-1">
      Week {getWeekNumber(new Date(getDate(changedDate)))}, {getYearFromDate(new Date(getDate(changedDate)))}
    </div>
    <div class="w-1/6 h-3/4 bg-white float-right mt-2 float-left rounded-xl text-center pt-1" on:click={() => changeDate(7)}>
      <i class="fa-solid fa-angle-left fa-rotate-180"></i>
    </div>
  </div>

  {#await eventsPromises}
    <li>...waiting</li>
  {:then events}
    {#each events as event, index}
      {#if index === 0 || event.date !== events[index - 1].date}
        <div class="h-12 w-4/5 mt-10 rounded-2xl text-center pt-3" style="background-color: #ffcc80;" id="weekSelector">
          {new Date(event.date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </div>
      {/if}
      <div class="button-color rounded-2xl">
        <h1 class="text-center mb-1">{event.name}</h1>
        <div class="text-white ml-2">
          <p>Begin tijd: {event.startingTime}</p>
          <p>Eind tijd: {event.endingTime}</p>
          <p>Locatie: {event.location}</p>
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
