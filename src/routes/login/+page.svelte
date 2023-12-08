<script>
  import { goto } from "$app/navigation";

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
      console.log(data.message);

      if (data.message === 'User logged in successfully') {
        alert("U bent ingelogd.");
        goto("../home");
      } else {
        // Handle other cases if needed
        // For example, display a message for invalid credentials
        alert("Ongeldige inloggegevens. Controleer uw gebruikersnaam en wachtwoord.");
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
</div>
