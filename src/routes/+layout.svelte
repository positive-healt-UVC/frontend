<script>
	import BackButton from "$lib/components/BackButton.svelte";
	import "../app.css";
</script>


<div class="flex flex-col h-screen bg-sky justify-between">
	<main>
		<slot />
		
	</main>

	<footer class="text-center">
		<a href="/"><i class="fa-solid fa-house fa-2xl p-5 mb-2 mt-2"></i></a>
		<i class="fa-brands fa-accessible-icon fa-2xl p-5 mb-2 mt-2"></i>
		<a href="/profile"><i class="fa-solid fa-user fa-2xl p-5 mb-2 mt-2"></i></a>
		<a href="/settings"><i class="fa-solid fa-gear fa-2xl p-5 mb-2 mt-2"></i></a>
	</footer>
	
</div>

<style>
	footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
	border-top: 4px solid white;
	background-color: #ff9e00;
	}

	.bg-sky {
		background-image: url(".//imgs/BG_Light_Blue.png");
		background-position: center;
	}
</style>
