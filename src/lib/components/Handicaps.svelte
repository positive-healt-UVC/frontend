<script>
    async function getAllHandicaps() {
      const res = await fetch("http://localhost:3000/handicaps/handicaps/");
      const values = await res.json();
      return values 
    }
  
    let handicapsPromises = getAllHandicaps();
  </script>
  
  {#await handicapsPromises}
    <li>...Waiting</li>
  {:then handicaps} 
    {#each handicaps as handicap}
    <div class="button-color rounded-2xl">
      <a href="handicaps/{handicap.id}">
      <h1 class="text-center mb-1">{handicap.name}</h1>
        <div class="w-2/4 mx-auto">
        <img class="rounded-2xl" src="{handicap.imagePath}" alt="foto">
        </div>
        <div class="text-white ml-2">
            <p>{handicap.excerpt}</p>
        </div>
      <p class="details-button text-sky-600">
        <a href="handicaps/{handicap.id}"><button>Details</button></a>
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
      padding: 10px;
      padding-bottom: 40px;
      margin: 10px;
      width: 120%;
      margin-left: -25px;
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
      margin-bottom: 10px;
      font-size: x-small;
      float: right;
    }
  </style>