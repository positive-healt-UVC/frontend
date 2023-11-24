<script>
  import Buttons from "$lib/components/Buttons.svelte";
  import UpcomingActivity from "$lib/components/UpcomingActivity.svelte";
  import BackButton from "$lib/components/BackButton.svelte";

  let username = "";
  let password = "";

  const handleLogin = () => {
    // Add your login logic here
    console.log("Logging in with username:", username);
    console.log("Password:", password);
    // You may want to send the login credentials to your server for authentication
  };
</script>

<div class="min-h-screen flex flex-col items-center bg-sky">
  <div class="mr-96">
  <BackButton></BackButton>
  </div>
<div class="h-2"></div> <!-- Create space at the top -->
  <img class="w-40 h-100" src=".//imgs/AbilityLink_Logo.png" alt="AbilityLinkLogo">

  <div class="h-20 mt-8 space-y-6"> 
    <form on:submit|preventDefault={handleLogin} class="space-y-4">
      <label class="block text-black">
        <span>Username:</span>
        <input
          class="mt-1 p-2 w-full border rounded-md text-black"
          bind:value={username}
          type="text"
          placeholder="Enter your username"
        />
      </label>

      <label class="block text-black">
        <span>Password:</span>
        <input
          class="mt-1 p-2 w-full border rounded-md text-black"
          bind:value={password}
          type="password"
          placeholder="Enter your password"
        />
      </label>

      <button
      type="submit"
      class="w-full button-color text-white px-4 py-2 rounded-xl hover:bg-green-400"
  >
      Activiteit aanmaken
  </button>
    </form>
  </div>
</div>


  <style>
    .bg-sky {
      background-image: url(".//imgs/BG_Light_Blue.png");
      background-position: center;
    }

    .button-color {
        background-color: #FF9D00 ;
      }
  </style>


