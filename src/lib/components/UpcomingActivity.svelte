<script>
  let events = [];

  (async function () {
    try {
      const res = await fetch(`http://localhost:3000/events/events/`);
      const values = await res.json();
      
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0); // Set time to midnight

      // Filter events that occur after the current date
      const upcomingEvents = values.filter(event => {
        const eventDate = new Date(event.date);
        eventDate.setHours(0, 0, 0, 0); // Set time to midnight
        return eventDate >= currentDate;
      });

      // Sort the upcoming events based on their date
      upcomingEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

      // Take the first two upcoming events
      events = upcomingEvents.slice(0, 2);
    } catch (error) {
      console.error('Error fetching events:', error.message);
    }
  })();
</script>


<div class="sm:mt-10 lg:m-10">
  <div class="mt-3 mb-5 ml-11">
    <i class="fa-solid fa-calendar-days fa-2xl inline"></i>
    <h1 class="inline mt-10">Aankomende Activiteiten</h1>
  </div>

  <div class="button-container">
    {#if events.length > 0}
      {#each events as event (event.id)}
        <div class="button-item m-1">
          <a href="activities/{event.id}">
            <div>
              <h1 class="text-center">{event.name}</h1>
              <p>Van: {event.startingTime}</p>
              <p>Tot: {event.endingTime}</p>
            </div>
            <div class="float-right -mt-14">
              <p class="text-right">{event.location}</p>
              <p>{new Date(event.date).toLocaleDateString("nl-NL", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}</p>
            </div>
          </a>
        </div>
      {/each}
    {:else}
    <div class="button-error text-center text-white" id="weekSelector">
      Geen aankomende activiteiten gevonden.
    </div>    
    {/if}
  </div>
</div>

<style>
  .button-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .button-item {
        background-color: #ffcc80;
        border: none;
        border-radius: 10px;
        padding: 10px;
        width: 100%;
        height: 60%;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }

    .button-item:hover {
        background-color: #FFB84D;
        cursor: pointer;
    }

    .button-item h1 {
      font-weight: bold;
      font-size: 22px;
      color: black;
      margin: 0;
    }

    .button-item p {
      font-size: 14px;
      color: black;
      margin: 5px 0;
    }

    .button-item a {
        text-decoration: none;
    }
    .button-item button {
        background-color: transparent;
        border: 1px solid #fff;
        color: #fff;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 12px;
        cursor: pointer;
    }

    .button-item button:hover {
        background-color: #fff;
        color: #FF9D00;
    }

    .button-error {
      background-color: rgb(255, 0, 0);
      border: none;
      border-radius: 10px;
      padding: 10px;
      margin: 10px;
      width: 100%;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }
</style>