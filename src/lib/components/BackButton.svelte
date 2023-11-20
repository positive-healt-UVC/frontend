<script>
  export let href;
  let isHovered = false;
</script>

<div on:mouseenter={() => isHovered = true} on:mouseleave={() => isHovered = false}>
  <div class="absolute mt-4 ml-4">
    <a href={href}>
      <i class="{isHovered ? 'fa-solid fa-delete-left fa-beat' : 'fa-solid fa-delete-left'} fa-2xl" style="color: #000000;"></i>
    </a>
  </div>
</div>

