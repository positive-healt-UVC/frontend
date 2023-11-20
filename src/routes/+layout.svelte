<script>
	import "../app.css";
</script>



<div class="flex flex-col h-screen justify-between">
	<main>
		<slot />
		
	</main>

	<footer class="text-center">
		<a href="/"><i class="fa-solid fa-house fa-2xl p-5 mb-2"></i></a>
		<i class="fa-brands fa-accessible-icon fa-2xl p-5 mb-2"></i>
		<i class="fa-solid fa-user fa-2xl p-5 mb-2"></i>
		<i class="fa-solid fa-gear fa-2xl p-5 mb-2"></i>
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
</style>
