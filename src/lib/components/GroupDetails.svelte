<script>
    import Buttons from "./Buttons.svelte";
    import UpcomingActivity from "./UpcomingActivity.svelte";
    import DeleteButton from '$lib/components/DeleteButton.svelte';
    import { goto } from '$app/navigation';

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

    async function getGroupMembers(groupId) {
        try {
            const res = await fetch(`http://localhost:3000/groups/members/group/${groupId}`);
            const members = await res.json();
            return members;
        } catch (error) {
            console.error('Error fetching group members:', error);
            throw error;
        }
    }

    let loadingMembers = getGroupMembers(webId);

    async function redirectToMembers() {
    await goto('../members');
  }

  async function redirectToHandicap(id) {
    await goto(`../handicaps/${id}`);
  }

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

  {:catch error}
    <p class="error-message">Error: {error.message}</p>
  {/await}

  <div class="event-grid">
    <button on:click={redirectToMembers} class="ml-4">
      <a class="text-lg font-semibold  text-white">Deelnemers </a> <i class="fa-regular fa-pen-to-square text-white"></i>
    </button>
    {#await loadingMembers}
      <p>Loading members...</p>
    {:then members}
      <table class="min-w-full border-collapse border rounded overflow-hidden">
        <thead class="text-white">
          <tr>
            <th class="py-2 px-4 text-sm font border text-white">Name</th>
            <th class="py-2 px-4 text-sm border text-white">Beperking ID</th>
          </tr>
        </thead>
        <tbody>
          {#each members as member (member.id)}
            <tr class="border-t">
              <td class="py-2 px-4 text-sm border text-white">{member.name}</td>
              <td class="py-2 px-4 text-sm border text-white" on:click={() => redirectToHandicap(member.handicapId)}>{member.handicapId}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    {:catch error}
      <p class="error-message">Error: {error.message}</p>
    {/await}
  </div>

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
