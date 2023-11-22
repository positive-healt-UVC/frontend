<script>
  let isHovered = false;

    function goBack() {
      history.back(); // This will navigate to the previous page in the history
    }
</script>

<div on:mouseenter={() => isHovered = true} on:mouseleave={() => isHovered = false}>
  <div class="absolute mt-4 ml-4" on:click={goBack} style="cursor: pointer;">
    <i class="{isHovered ? 'fa-solid fa-delete-left fa-beat' : 'fa-solid fa-delete-left'} fa-2xl" style="color: #000000;"></i>
  </div>
</div>
