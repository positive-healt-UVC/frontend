<script>
  import { onMount } from "svelte";
  import BackButton from "$lib/components/BackButton.svelte";
  import Logout from "$lib/components/Logout.svelte";
  import idStore from "../../stores/idStore";

  const userStore = $idStore;

  let data = { user: { name: "", age: "", handicap: "", phoneNum: "" } };
  let updatedData = { ...data.user };

  async function fillUserData() {
    try {
      const res = await fetch(`http://localhost:3011/users/${userStore}`);
      data = await res.json();
      updatedData = { ...data.user };
      console.log(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  }

  async function updateUserData() {
    try {
      const response = await fetch(`http://localhost:3011/users/${userStore}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        console.log("User data updated successfully");
        // Reload user data after successful update
        await fillUserData();
      } else {
        console.error("Failed to update user data");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
      throw error;
    }
  }

  onMount(fillUserData);
</script>

<BackButton />
<Logout />

<body>
  <div class="min-h-screen bg-sky flex flex-col items-center">
    <div class="h-2" />

    <img
      class="rounded-full w-40 h-100"
      src=".//imgs/Placeholder_Profile.png"
      alt="Placeholder"
    />

    <div class="h-40 mt-8 space-y-6">
      <form
        on:submit|preventDefault={updateUserData}
        action="/profile"
        class="flex flex-col"
      >
        <div class="flex flex-col mb-4">
          <label for="name">Name:</label>
          <input bind:value={updatedData.name} type="text" id="name" name="name" />

          <label for="age">Age:</label>
          <input bind:value={updatedData.age} type="text" id="age" name="age" />

          <label for="handicap">Handicap:</label>
          <input
            bind:value={updatedData.handicap}
            type="text"
            id="handicap"
            name="handicap"
          />

          <label for="phoneNum">Phonenumber:</label>
          <input
            bind:value={updatedData.phoneNum}
            type="text"
            id="phoneNum"
            name="phoneNum"
          />
        </div>
        <input
          type="submit"
          value="Opslaan"
          class="w-30 flex items-center text-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white button-color md:py-4 md:text-lg md:px-10 hover:bg-blue-500 hover:text-white transition bottom"
        />
      </form>
    </div>

    <div class="mt-48 space-y-6" />
  </div>
</body>

<style>
  .bg-sky {
    background-image: url(".//imgs/BG_Light_Blue.png");
    background-position: center;
  }

  .button-color {
    background-color: #ff9d00;
  }
</style>
