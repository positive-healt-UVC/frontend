  <script>
    import DeleteModal from './DeleteModal.svelte';
    import { goto } from '$app/navigation';
  
    export let entityId;
    export let entityRoute;
    export let gotoRoute;
  
    let showModal = false;
  
    function deleteEntity() {
      showModal = true;
    }
  
    function confirmDelete() {
      // Delete entity (group or event)
      fetch(`${entityRoute}/${entityId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.ok) {
        goto(gotoRoute)
        } else {
          console.error('Failed to delete Event data');
        }
      })
        .catch((error) => {
          console.error('Error:', error instanceof Error ? error.message : error);
        });
    }
  </script>
  
  <button on:click={deleteEntity} class="flex text-center justify-center px-4 py-3 rounded-xl text-white button-color mb-5 bg-red-900 ml-7">
    Verwijderen
  </button>
  
  <DeleteModal bind:show={showModal} on:confirm={confirmDelete} on:cancel={() => showModal = false} />
