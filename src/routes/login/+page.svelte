<script>
  import { goto } from "$app/navigation";
  import BackButton from "$lib/components/BackButton.svelte";
  import idStore from "../../stores/idStore.js";
  import { fly } from "svelte/transition";
  import LoginModal from "$lib/components/LoginModal.svelte";
  import Buttons from "$lib/components/Buttons.svelte";
  import AudioHelp from "$lib/components/AudioHelp.svelte";


  let showModal = false;
  let showError = false;

  function openModal() {
    showModal = true;
  }

  function openErrorModal() {
    showError = true;
  }

  function handleModalClick() {
    goto("../home");
  }

  function setId(id) {
    idStore.set(id);
  }

  let userData = { username: "", password: "" };
  let errors = {};

  const validateForm = () => {
    errors = {};

    if (!userData.username) {
      errors.username = "Dit veld is verplicht";
    }

    if (!userData.password) {
      errors.password = "Dit veld is verplicht";
    }

    return Object.keys(errors).length === 0;
  };

  const loginUser = async () => {
    if (!validateForm()) {
      return;
    }

    const userCredentials = {
      username: userData.username,
      password: userData.password,
    };

    try {
      const response = await fetch("http://localhost:3011/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      });

      const data = await response.json();
      if (response.ok) {
        if (data.message === "User logged in successfully") {
          setId(data.userId);
          openModal();
        } else {
          // Handle other cases if needed
          // For example, display a message for invalid credentials
          openErrorModal();
        }
      } else {
        // Handle the case where the server response is not okay (e.g., 404 or 500)
        console.error("Failed to log in. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error:", error instanceof Error ? error.message : error);
    }
  };
</script>

<AudioHelp audioFile={'.//mp3/Login.mp3'}/>

<BackButton />

<LoginModal bind:show={showModal}>
  <p>U bent succesvol ingelogd</p>
  <button class="mt-4 w-30 flex items-center text-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-black button-color md:py-4 md:text-lg md:px-10" on:click={handleModalClick}>Sluiten</button>
</LoginModal>

<LoginModal bind:show={showError}>
  <p class="text-red-600">De gebruikersnaam en of wachtwoord is onjuist.</p>
</LoginModal>

<body transition:fly={{ y: 300, duration: 300 }}>


<div class="container mx-auto min-h-screen flex flex-col items-center">
  <h1 class="m-5 text-2xl font-bold mb-4 py-4 border-b-2">Inloggen</h1>

  <form
    on:submit|preventDefault={loginUser}
    class="max-w-md mx-auto bg-white p-8 rounded-xl"
  >
    <div class="mb-4">
      <label for="userName" class="block text-gray-700 text-sm font-bold mb-2"
        >Gebruikersnaam:</label
      >
      <input
        id="userName"
        type="text"
        class="w-full px-4 py-2 border rounded-xl focus:border-gray-500"
        bind:value={userData.username}
      />
      {#if errors.username}<p class="text-red-500 text-sm mt-1">
          {errors.username}
        </p>{/if}
    </div>

    <div class="mb-4">
      <label for="password" class="block text-gray-700 text-sm font-bold mb-2"
        >Wachtwoord:</label
      >
      <input
        id="password"
        type="password"
        class="w-full h-25 px-4 py-2 border rounded-xl focus:border-gray-500"
        bind:value={userData.password}
      />
      {#if errors.password}<p class="text-red-500 text-sm mt-1">
          {errors.password}
        </p>{/if}
    </div>

    <button
      type="submit"
      class="w-full bg-gray-500 text-white px-4 py-2 rounded-xl hover:bg-green-400"
    >
      Inloggen
    </button>
  </form>

  <div class="mt-8">
    <Buttons text={"Nog geen account?"} href={"/register"}/>
  </div>

</div>

</body>

<style>
  .bg-sky {
    background-image: url("..//imgs/BG_Light_Blue.png");
    background-position: center;
  }

  .button-color {
    background-color: #ff9d00;
  }
</style>