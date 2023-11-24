<!-- Login.svelte -->
<script>
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

<div class="flex flex-col h-screen justify-between bg-sky">
  <main class="p-4">
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

      <button type="submit" class="bg-blue-500 text-white p-2 rounded">
        Login
      </button>
    </form>
  </main>

  <footer class="text-center bg-gradient-to-t from-white via-cyan-400 to-cyan-500 text-white p-4">
    <!-- Your footer links -->
  </footer>
</div>

<style>
  .bg-sky {
    background-image: url(".//imgs/BG_Light_Blue.png");
    background-position: center;
  }
</style>
