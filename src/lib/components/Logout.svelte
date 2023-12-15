<script>
  let isHovered = false;

function goToHome() {
  window.location.href = '/home';
}
</script>

<div on:mouseenter={() => isHovered = true} on:mouseleave={() => isHovered = false}>
  <div class="absolute top-4 right-4" on:click={goToHome} style="cursor: pointer;">
  <i class="{isHovered ? 'fa-solid fa-right-from-bracket fa-beat' : 'fa-solid fa-right-from-bracket'} fa-2xl" style="color: #000000;"></i>
  </div>
</div>
