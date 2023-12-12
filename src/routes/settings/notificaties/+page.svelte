<script>
    import BackButton from "$lib/components/BackButton.svelte";
    import { fly } from "svelte/transition";
  let emailNotifications = true;
  let pushNotifications = true;
  let soundNotifications = true;

// Voeg hier functions toe die daadwerkeleijk wat doen.

</script>

<BackButton></BackButton>

<body transition:fly={{ y: 300, duration: 300 }}>

<div class="bg-sky min-h-screen flex flex-col items-center">
  <div class="h-2"></div> <!-- Create space at the top -->
  <img class="w-40 h-100 pb-10" src="..//imgs/AbilityLink_Logo.png" alt="AbilityLinkLogo">

  <h1>Instellingen notificaties</h1>

  <div class="rounded-switch">
    <label class="switch">
      <input type="checkbox" onclick="functie()" checked>
      <span class="slider"></span>
    </label>
    <span>Email notificaties</span>
  </div>
  
  <div class="rounded-switch">
    <label class="switch">
      <input type="checkbox" onclick="functie()" checked>
      <span class="slider"></span>
    </label>
    <span>Push notificaties</span>
  </div>
  
  <div class="rounded-switch">
    <label class="switch">
      <input type="checkbox" onclick="functie()" checked>
      <span class="slider"></span>
    </label>
    <span>Geluids notificaties</span>
  </div>
</div>

</body>

<style>
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  div {
    margin-bottom: 1rem;
  }

  .bg-sky {
    background-image: url(".//imgs/BG_Light_Blue.png");
    background-position: center;
  }

 
  .rounded-switch {
    border-radius: 10px; 
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 30px; 
    height: 17px; 
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    border-radius: 10px;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 13px;
    width: 13px; 
    left: 2px;
    bottom: 2px;
    background-color: white;
    border-radius: 50%;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(13px);
    -ms-transform: translateX(13px);
    transform: translateX(13px);
  }
</style>
