<script>
  export let href;
  export let text;
  export let image;
  export let style;
</script>

<div>
  <div class="grid grid-cols-1 gap-4 mb-5 mx-5">
    <a href={href}
          class="w-30 flex items-center text-center 
          justify-center px-8 py-3 
          border border-transparent 
          text-base font-medium 
          rounded-xl 
          text-white 
          button-color 
          md:py-4 md:text-lg md:px-10">
          {#if image}
            <i class={image} style={style}></i>
          {/if}
          {text}
    </a>
  </div>
</div>

<style>
  .bg-sky {
    background-image: url(".//imgs/BG_Light_Blue.png");
    background-position: center;
  }

  .button-color {
    background-color: #FF9D00 ;
  }

  .button-color:hover {
    background-color: #FFB84D;
  }
</style>