<script>
    import Buttons from "./Buttons.svelte";
    import UpcomingActivity from "./UpcomingActivity.svelte";
    import DeleteButton from '$lib/components/DeleteButton.svelte';

    let webId;
    if (typeof window !== 'undefined') {
        // If running in a browser environment
        webId = window.location.href.split('/').at(-1);
    }
    async function getHandicap() {
        const res = await fetch(`http://localhost:3000/handicaps/handicaps/${webId}`);
        const values = await res.json();
        console.log(values);
        return values; 
    }
    let loadingEvent = getHandicap();

</script>

<div class="button-container">
  {#await loadingEvent}
    <p>Loading...</p>
  {:then handicap}
  <h1 class="text-2xl font-bold border-b-2 mt-0 text-center">
    {handicap[0].name}
  </h1>  {:catch error}
    <p class="error-message">Error: {error.message}</p>
  {/await}
</div>

<div class="button-container">
    {#await loadingEvent}
      <p>Loading...</p>
    {:then handicap}
        <div class="event-grid">
            <img src="{handicap[0].imagePath}" alt="foto">
          <h1><strong>Algemene informatie:</strong></h1>
            <div class="event-details mt-3">
                <p><strong>Handicap:</strong> {handicap[0].name}</p>
                <p><strong>Handicap omschrijving:</strong><br>{handicap[0].description}</p>
            </div>
          <div class="event-details mt-3">
                <p><strong>Instructies</strong><br>{@html handicap[0].instruction}</p>
          </div>
        </div>
    {:catch error}
      <p class="error-message">Error: {error.message}</p>
    {/await}
    
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
      padding: 20px;
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
  .member-container {
        display: flex;
        justify-content: space-between;
    }
</style>
