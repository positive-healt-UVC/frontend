<script>
	import BackButton from "$lib/components/BackButton.svelte";
	import "../app.css";
	import idStore from "../stores/idStore";

	// Use the $ syntax to subscribe to the store
	let currentId = $idStore;
	import { onMount } from "svelte";
	onMount(() => {
	 	let currentUrl = window.location.pathname;
		if (currentUrl !== "/" && currentUrl !== "/login" && !currentId) {
			window.location.replace('/')
		}
	});
</script>

<div class="flex flex-col h-screen bg-sky justify-between">
	<main>
		<slot />
	</main>

	<footer class="text-center">
		<a href="/home"><i class="fa-solid fa-house fa-2xl p-5 mb-2 mt-1" /></a>
		<i class="fa-brands fa-accessible-icon fa-2xl p-5 mb-2 mt-1" />
		<a href="/profile"
			><i class="fa-solid fa-user fa-2xl p-5 mb-2 mt-1" /></a
		>
		<a href="/settings"
			><i class="fa-solid fa-gear fa-2xl p-5 mb-2 mt-1" /></a
		>
	</footer>
</div>

<style>
	footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		text-align: center;
		background-color: #ff9e00;
	}

	.bg-sky {
		background-image: url(".//imgs/BG_Light_Blue.png");
		background-position: center;
	}
</style>
