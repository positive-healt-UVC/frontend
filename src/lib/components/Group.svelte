<script>
  async function getAllGroups() {
    const res = await fetch("http://localhost:3000/groups/groups/");
    const values = await res.json();
    return values 
  }

  let groupsPromises = getAllGroups();
</script>

{#await groupsPromises}
  <li>...Waiting</li>
{:then groups} 
  {#each groups as group}
  <div class="button-color rounded-2xl">
    <a href="groups/{group.id}">
    <h1 class="text-center mb-1">{group.name}</h1>
    <div class="text-white ml-2">
      <p>Begeleiders: {group.carer}</p>
    </div>
    <p class="text-xs text-sky-600 float-right mb-10 mr-5 details-button">
      <a href="groups/{group.id}"><button>Details</button></a>
    </p>
    </a>
  </div>
  {/each}
  {:catch error}
  <li>Error: {error.message}</li>
{/await}

<style>

  .button-color {
    background-color: #ff9d00;
    border: none;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    width: 100%;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .button-color h1 {
    font-weight: bold;
    font-size: 22px;
    color: black;
    margin: 0;
  }

  
  .button-color p {
    font-size: 14px;
    color: black;
    margin: 5px 0;
  }


  .button-color a {
    text-decoration: none;
  }


  .button-color button {
    background-color: transparent;
    border: 1px solid black;
    color: black;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
  }

  .button-color button:hover {
    background-color: #fff;
    color: #000000;
  }

  .details-button {
    position: relative;
    bottom: 1.75vh;
  }
</style>