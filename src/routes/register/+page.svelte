<script>
  import { goto } from "$app/navigation";

let userData = { username: "", password: "", age: "", phoneNum: "", handicap: "" };
let errors = {};

const validateForm = () => {
  errors = {};

  if (!userData.username) {
    errors.username = "Dit veld is verplicht";
  }

  if (!userData.password) {
    errors.password = "Dit veld is verplicht";
  }

  if (!userData.age) {
    errors.age = "Dit veld is verplicht";
  }

  if(!userData.phoneNum) {
    errors.phoneNum = "Dit veld is verplicht";
  }

  if (!userData.handicap) {
    errors.handicap = "Dit veld is verplicht";
  }

  return Object.keys(errors).length === 0;
};

const addUser = async () => {
  if (!validateForm()) {
    return;
  }

  const newUserData = {
    name: userData.username,
    password: userData.password,
    age: userData.age,
    phoneNum: userData.phoneNum,
    handicap: userData.handicap,
  };

  try {
    const response = await fetch("http://localhost:3011/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    });

    if (response.ok) {
      console.log("Successfully registered");
      alert("Account aangemaakt! U kunt nu inloggen.")
      goto("../");
    } else {
      console.error("Failed to register...");
    }
  } catch (error) {
    console.error("Error:", error instanceof Error ? error.message : error);
  }
};
</script>

<div class="container mx-auto min-h-screen flex flex-col items-center">
<h1 class="m-5 text-2xl font-bold mb-4 py-4 border-b-2">
  Registreren
</h1>

<form on:submit|preventDefault={addUser} class="max-w-md mx-auto bg-white p-8 rounded-xl">
  <div class="mb-4">
    <label for="userName" class="block text-gray-700 text-sm font-bold mb-2">Gebruikersnaam:</label>
    <input id="userName" type="text" class="w-full px-4 py-2 border rounded-xl focus:border-gray-500" bind:value={userData.username} />
    {#if errors.username}<p class="text-red-500 text-sm mt-1">{errors.username}</p>{/if}
  </div>

  <div class="mb-4">
    <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Wachtwoord:</label>
    <input id="password" class="w-full h-25 px-4 py-2 border rounded-xl focus:border-gray-500" bind:value={userData.password}>
    {#if errors.password}<p class="text-red-500 text-sm mt-1">{errors.password}</p>{/if}
  </div>

  <div class="mb-4">
    <label for="age" class="block text-gray-700 text-sm font-bold mb-2">Leeftijd:</label>
    <input id="age" type="number" class="w-full px-4 py-2 border rounded-xl focus:border-gray-500" bind:value={userData.age} />
    {#if errors.age}<p class="text-red-500 text-sm mt-1">{errors.age}</p>{/if}
  </div>

  <div class="mb-4">
    <label for="phoneNum" class="block text-gray-700 text-sm font-bold mb-2">Telefoonnummer:</label>
    <input id="phoneNum" type="text" class="w-full px-4 py-2 border rounded-xl focus:border-gray-500" bind:value={userData.phoneNum} />
    {#if errors.phoneNum}<p class="text-red-500 text-sm mt-1">{errors.phoneNum}</p>{/if}

  <div class="mb-4">
    <label for="handicap" class="block text-gray-700 text-sm font-bold mb-2">Handicap:</label>
    <input id="handicap" type="text" class="w-full px-4 py-2 border rounded-xl focus:border-gray-500" bind:value={userData.handicap} />
    {#if errors.handicap}<p class="text-red-500 text-sm mt-1">{errors.handicap}</p>{/if}
  </div>

  <button type="submit" class="w-full bg-gray-500 text-white px-4 py-2 rounded-xl hover:bg-green-400">
    Account aanmaken
  </button>
</form>
</div>

<style>
.bg-sky {
  background-image: url(".//imgs/BG_Light_Blue.png");
  background-position: center;
}
.button-color {
  background-color: #ff9d00;
}
</style>
