<script>
  import { onMount } from 'svelte';

  let isPlaying = false;
  let audio;
  export let audioFile;

  function playAudio() {
    audio.play();
    isPlaying = true;
  }

  function stopAudio() {
    audio.pause();
    isPlaying = false;
  }

  onMount(() => {
    audio = new Audio(audioFile); // specify the path to your audio file here
  });
</script>

<style>
  .audio-control {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
  }

  .hearing-color {
    background-color: #FF9D00 ;
  }

  .hearing-color:hover {
    background-color: #FFB84D;
  }
</style>

<div class="audio-control">
  <button
    class="hearing-color text-white font-bold py-2 px-4 rounded-full"
    on:click={isPlaying ? stopAudio : playAudio}
  >
    {#if isPlaying}
    <i class="fa-solid fa-ear-listen"></i>
    {:else}
    <i class="fa-solid fa-ear-deaf"></i>
    {/if}
  </button>
</div>

