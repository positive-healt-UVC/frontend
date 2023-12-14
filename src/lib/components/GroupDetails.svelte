<script>
    import Buttons from "./Buttons.svelte";
    import UpcomingActivity from "./UpcomingActivity.svelte";
    import DeleteButton from '$lib/components/DeleteButton.svelte';

    let webId = null;
    if (typeof window !== 'undefined') {
        // If running in a browser environment
        webId = window.location.href.split('/').at(-1);
    }
    async function getGroup() {
        const res = await fetch(`http://localhost:3000/groups/groups/${webId}`);
        const values = await res.json();
        return values 
    }

    let loadingEvent = getGroup();

</script>

<div class="button-container">
  {#await loadingEvent}
    <p>Loading...</p>
  {:then group}
  <h1 class="text-2xl font-bold border-b-2 mt-0 text-center">
    {group.name}
  </h1>  {:catch error}
    <p class="error-message">Error: {error.message}</p>
  {/await}
</div>


<div class="button-container">
  {#await loadingEvent}
    <p>Loading...</p>
  {:then group}
      <div class="event-grid">
        <h1><strong>Algemene informatie:</strong></h1>
        <div class="event-details">
          <p><strong>Begeleider:</strong> {group.carer}</p>
          <p><strong>Deelnemers:</strong> {group.id}</p>
        </div>
      </div>

      <div class="event-grid">
        <h1><strong>Deelnemers:</strong></h1>
          <p>{group.id}</p>
      </div>
  {:catch error}
    <p class="error-message">Error: {error.message}</p>
  {/await}

  <div class="flex w-max m-4">
    <DeleteButton entityRoute="http://localhost:3000/groups/groups" entityId={webId} gotoRoute = '/groups' />
    <a href="{webId}/edit" class="ml-4">
        <button class="flex text-center justify-center px-8 py-3 rounded-xl text-white button-color bg-blue-500 w-4/5">Aanpassen</button>
    </a>
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
  .error-message {
      color: #ff0000;
  }
</style>
