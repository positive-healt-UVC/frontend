<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let show = false;

  function confirm() {
    dispatch('confirm');
  }

  function cancel() {
    dispatch('cancel');
  }
</script>

{#if show}
  <div class="modal">
    <div class="modal-content">
      <p>Wil je dit item verwijderen?</p>
      <button class="confirm-button px-6 py-1 border rounded-xl text-white" on:click={confirm}>Ja</button>
      <button class="cancel-button px-6 py-1 border rounded-xl text-white m-2 bg-slate-500 " on:click={cancel}>Nee</button>
    </div>
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 20px;
    text-align: center;
  }

  .confirm-button {
    background-color: #ff9d00;
    width: 40%;

  }
  .cancel-button {
    width: 40%;
  }
</style>
