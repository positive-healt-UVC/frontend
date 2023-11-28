<script>
  let events = [];

  (async function () {
    try {
      const res = await fetch(`http://localhost:3000/events/events/`);
      const values = await res.json();
      
      values.sort((a, b) => new Date(a.date) - new Date(b.date));
      events = values.slice(-2);
    } catch (error) {
      console.error('Error fetching events:', error.message);
    }
  })();
</script>

<div class="sm:mt-12 lg:m-20">
  <div >
    <i class="fa-solid fa-calendar-days fa-2xl inline ml-3 mb-5 "></i>
    <h1 class="inline">Geplande activiteiten</h1>
  </div>

  <div class="button-container">
    {#if events.length > 0}
      {#each events as event (event.id)}
        <div class="button-item rounded-2xl">
          <div>
            <h1 class="text-center mt-2 mb-1">{event.name}</h1>
            <p>Van: {event.startingTime}</p>
            <p>Tot {event.endingTime}</p>
          </div>
          <p>
            <a href="activiteit">
              <button>Details</button>
            </a>
          </p>
        </div>
      {/each}
    {:else}
      <li>No events available</li>
    {/if}
  </div>
</div>

<style>
  .activity-color {
    background-color: #FFB84D ;
  }
  .button-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .button-item {
        background-color: #FF9D00;
        border: none;
        border-radius: 10px;
        padding: 10px;
        margin: 10px;
        width: 40%;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }

    .button-item:hover {
        background-color: #FFB84D;
        cursor: pointer;
    }

    .button-item h1 {
        font-size: 18px;
        color: #fff;
        margin: 0;
    }

    .button-item p {
        font-size: 14px;
        color: #fff;
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
</style>