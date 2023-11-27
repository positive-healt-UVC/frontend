<script>  
    async function getAllEvents() {
        const res = await fetch(`http://localhost:3011/events`);
        const values = await res.json();
        return values;
    }

    let eventsPromises = getAllEvents();
</script>

<div>
    {#await eventsPromises}
    <li>...waiting</li>
    {:then events}
    {#each events as event}
        <div class="button-color rounded-md h-32">
        <h1 class="text-center text-lg mt-2 mb-1 text-white">{event.name}</h1>
        <div class="text-sm text-white ml-2">
            <p>Begin tijd: {event.startingTime}</p>
            <p>Eind tijd: {event.endingTime}</p>
            <p class="mt-2">{event.location}</p>
        </div>
        <p class="text-xs text-sky-600 float-right mb-1 mr-5"><a href="activiteit"><button>More></button></a></p>
    </div>
    {/each}
    {:catch error}
    <li>Error: {error.message}</li>
    {/await}

</div>
<style>
    .button-color {
        background-color: #FF9D00 ;
        }
</style>
