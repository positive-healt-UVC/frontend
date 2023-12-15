<script>
  export let show = false;

  function closeModal() {
    show = false;
  }
</script>

{#if show}
  <div class="modal">
    <div class="modal-content">
      <button><span class="close" on:click={closeModal}>&times;</span></button>
      <slot></slot>
    </div>
  </div>
{/if}

<style>
  .modal {
    display: block;
    position: fixed;
    width: 120%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  .modal-content {
    position: absolute;
    top: 25%;
    left: 45%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
  }
</style>
