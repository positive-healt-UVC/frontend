<script>
    import Buttons from "./Buttons.svelte";
    import UpcomingActivity from "./UpcomingActivity.svelte";

    let webId = null;
    if (typeof window !== 'undefined') {
        // If running in a browser environment
        webId = window.location.href.split('/').at(-1);
    }
    async function getGroup() {
        const res = await fetch(`http://localhost:3000/groups/groups/with-members/${webId}`);
        const values = await res.json();
        console.log(values);
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
          <p><strong>Groeps nummer:</strong> {group.id}</p>
          <p><strong>Begeleider:</strong> {group.carer}</p>
        </div>
      </div>

      <div class="event-grid">
        <h1><strong>Deelnemers:</strong></h1>
        {#each group.members as member (member.id)}
        <div class="member-container">
          <p><strong>{member.name}</strong></p>
          <p>{member.phoneNum}</p>
      </div>
        {/each}
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
