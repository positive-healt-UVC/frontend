<script>  
    async function getAllEvents() {
        const res = await fetch(`http://localhost:3000/events/events`);
        const values = await res.json();
        return values;
    }

    let eventsPromises = getAllEvents();
</script>

<h1 class="text-2xl font-bold border-b-2 mt-0">
    Geplande Activiteiten
  </h1>


  <div class="button-container">
    {#await eventsPromises}
    <li>...waiting</li>
    {:then events}
    {#each events as event}
        <div class="button-color rounded-2xl">
            <h1 class="text-center mt-2 mb-1">{event.name}</h1>
            <div class="text-white ml-2">
                <p>Begin tijd: {event.startingTime}</p>
                <p>Eind tijd: {event.endingTime}</p>
                <p class="mt-2">Datum: {new Date(event.date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                })}</p>
            </div>
            <p class="text-xs text-sky-600 float-right mb-1 mr-5"><a href="activiteit"><button>Details</button></a></p>
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
        background-color: #FF9D00;
        border: none;
        border-radius: 10px;
        padding: 10px;
        margin: 10px;
        width: 300%;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }

    .button-color:hover {
        background-color: #FFB84D;
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
        color: #FF9D00;
    }
</style>