<script>
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import BackButton from '$lib/components/BackButton.svelte';
    import Modal from '$lib/components/Modal.svelte';
  
    let showModal = false;
    let webId = null;
  
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      const segments = url.pathname.split('/');
      const idIndex = segments.indexOf('edit') - 1;
  
      if (idIndex >= 0) {
        webId = segments[idIndex];
      }
    }
  
    function openModal() {
      showModal = true;
    }
  
    function handleModalClick() {
      goto(`/groups`);
    }
  
    export let groupData = {
      name: '',
      carer: '',
      // Add other fields as needed
    };
  
    let errors = {};
  
    const validateForm = () => {
      errors = {};
  
      const fields = [
        { name: 'name', label: 'Naam is verplicht' },
        { name: 'carer', label: 'Begeleider is verplicht' },
        // Add other fields as needed
      ];
  
      fields.forEach((field) => {
        if (!groupData[field.name]) {
          errors[field.name] = field.label;
        }
      });
  
      return Object.keys(errors).length === 0;
    };
  
    const updateGroup = async () => {
      if (!validateForm()) {
        return;
      }
  
      const updatedGroupData = {
        name: groupData.name,
        carer: groupData.carer,
        // Add other fields as needed
      };
  
      try {
        const response = await fetch(`http://localhost:3000/groups/groups/${webId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedGroupData),
        });
  
        if (response.ok) {
          openModal();
        } else {
          console.error('Failed to update Group data');
        }
      } catch (error) {
        console.error('Error:', error instanceof Error ? error.message : error);
      }
    };
  
    const getGroupDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/groups/groups/${webId}`);
        if (response.ok) {
          const groupDetails = await response.json();
  
          groupData = {
            name: groupDetails.name || '',
            carer: groupDetails.carer || '',
            // Add other fields as needed
          };
        } else {
          console.error('Failed to fetch Group data');
        }
      } catch (error) {
        console.error('Error:', error instanceof Error ? error.message : error);
      }
    };
  
    onMount(getGroupDetails);
  </script>
  <BackButton />
  
  <Modal bind:show={showModal}>
    <p>Groep aangepast!</p>
    <button
      class="mt-4 w-30 flex items-center text-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white button-color md:py-4 md:text-lg md:px-10"
      on:click={handleModalClick}
    >
      Sluiten
    </button>
  </Modal>
  
  <div class="bg-sky container mx-auto min-h-screen flex flex-col items-center">
    <h1 class="mt-10 text-2xl font-bold border-b-2 text-center mb-5">
      Groep bewerken
    </h1>
    <p class="text-xs text-center -mt-4">* = verplicht</p>
    <form
      on:submit|preventDefault={updateGroup}
      class="max-w-md mx-auto p-2 rounded-xl"
    >
      <div class="mb-4">
        <label for="groupName" class="block text-gray-700 text-sm font-bold mb-2">
          Naam Groep: *
        </label>
        <input
          id="groupName"
          type="text"
          class="w-full px-4 py-2 border rounded-xl focus:border-gray-500"
          bind:value={groupData.name}
        />
        {#if errors.name}<p class="text-red-500 text-sm mt-1">{errors.name}</p>{/if}
      </div>
  
      <div class="mb-4">
        <label for="groupCarer" class="block text-gray-700 text-sm font-bold mb-2">
          Begeleider: *
        </label>
        <input
          id="groupCarer"
          type="text"
          class="w-full px-4 py-2 border rounded-xl focus:border-gray-500"
          bind:value={groupData.carer}
        />
        {#if errors.carer}<p class="text-red-500 text-sm mt-1">{errors.carer}</p>{/if}
      </div>
  
      <div>
        <button
          type="submit"
          class="w-30 flex items-center text-center justify-center px-8 py-3 text-base font-medium rounded-xl text-white button-color mb-20"
        >
          Groep Aanpassen
        </button>
      </div>
    </form>
  </div>
  
  <style>
    .bg-sky {
      background-image: url('public/static/imgs/BG_Light_Blue.png');
      background-position: center;
    }
  
    .button-color {
      background-color: #ff9d00;
    }
  </style>
  
