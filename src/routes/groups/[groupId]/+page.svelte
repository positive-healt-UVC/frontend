<script>
  import BackButton from "$lib/components/BackButton.svelte";
  import { fly } from "svelte/transition";
  import {page} from '$app/stores';
  const groupId = $page.params.groupId;
</script>

<BackButton href={"/groups"}></BackButton>

<body transition:fly={{ y: 300, duration: 300 }}>
<div class="bg-sky">
  <div class="min-h-screen flex flex-col items-center">
    <div class="w-5/6 rounded-md mt-10">
      <h1 class="text-3xl text-center font-bold">Groep {groupId}</h1>
      <div class="mt-5">
        <img src="../../imgs/sport-group.jpg" alt="zwemmen" class="rounded-md" />
      </div>
      <div class="mt-16">
          <h2 class="font-bold">Begeleider:</h2>
          <p>Willem Alex van Nasau Oranje</p>
          <div>
            <h2 class="font-bold mt-4">Deelnemers:</h2>
            <ul class="float-left">
              <li>piet klaasen</li>
              <li>klaas van de brink</li>
            </ul>
            <ul class="float-right">
              <li>+31 6 48 43 03 72</li>
              <li>+31 6 28 43 33 72</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>

<style>
  .bg-sky {
    background-image: url("../../imgs/BG_Light_Blue.png");
    background-position: center;
  }

  .button-color {
    background-color: #ff9d00;
  }
</style>
