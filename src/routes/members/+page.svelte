<script>
  import { onMount } from 'svelte';
  import { goto } from "$app/navigation";
  import BackButton from '$lib/components/BackButton.svelte';
  import DeleteModal from '$lib/components/DeleteModal.svelte';
  import UpdateModal from '$lib/components/Modal.svelte';

  // Function to fetch all members
  const getAllMembers = async () => {
    try {
      const response = await fetch('http://localhost:3000/groups/members/');
      const members = await response.json();
      return members;
    } catch (error) {
      console.error('Error fetching members:', error);
      throw error;
    }
  };

  // Function to fetch handicaps
  async function getAllHandicaps() {
    try {
      const response = await fetch('http://localhost:3000/handicaps/handicaps/');
      const handicaps = await response.json();
      return handicaps;
    } catch (error) {
      console.error('Error fetching handicaps:', error);
      throw error;
    }
  }

  let members = [];
  let showDeleteModal = false;
  let memberToDelete = null;
  let showUpdateModal = false;
  let newMember = {
    name: "",
    handicapId: "",
    groupId: "",
  };
  let handicaps = [];

  onMount(async () => {
    members = await getAllMembers();
    handicaps = await getAllHandicaps();
  });

  // Function to update a specific member
  const updateMember = async (id, data) => {
    try {
      const response = await fetch(`http://localhost:3000/groups/members/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          handicapId: data.handicapId,
          groupId: data.groupId,
        }),
      });

      if (response.ok) {
        console.log(`Member ${id} updated successfully!`);
        // Show the update modal
        showUpdateModal = true;
      } else {
        console.error(`Failed to update Member ${id}`);
      }
    } catch (error) {
      console.error('Error:', error instanceof Error ? error.message : error);
    }
  };

  // Function to delete a specific member
  const deleteMember = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/groups/members/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log(`Member ${id} deleted successfully!`);
        members = members.filter(member => member.id !== id);
      } else {
        console.error(`Failed to delete Member ${id}`);
      }
    } catch (error) {
      console.error('Error:', error instanceof Error ? error.message : error);
    }
  };

  // Function to add a new member
  const addNewMember = async () => {
    try {
      const response = await fetch('http://localhost:3000/groups/members/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMember),
      });

      if (response.ok) {
        console.log('Member added successfully!');
        members = await getAllMembers();
        // Reset the newMember object for the next addition
        newMember = {
          name: "",
          handicapId: "",
          groupId: "",
        };
      } else {
        console.error('Failed to add new member');
      }
    } catch (error) {
      console.error('Error:', error instanceof Error ? error.message : error);
    }
  };

  // Function to open the delete modal
  const openDeleteModal = (id) => {
    memberToDelete = id;
    showDeleteModal = true;
  };

  // Function to handle member deletion
  const handleDelete = async () => {
    await deleteMember(memberToDelete);
    showDeleteModal = false;
    memberToDelete = null;
  };

  // Function to handle modal close and redirect to ./groups
  const handleModalClick = () => {
    showUpdateModal = false;
    goto('./groups');
  };

</script>

<BackButton />

<DeleteModal bind:show={showDeleteModal} on:confirm={handleDelete} on:cancel={() => showDeleteModal = false} />
<UpdateModal bind:show={showUpdateModal}>
  <p>Activiteit toegevoegd!</p>
  <button class="mt-4 w-30 flex items-center text-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl button-color md:py-4 md:text-lg md:px-10" on:click={handleModalClick}>Sluiten</button>
</UpdateModal>

<div class="bg-sky container mx-auto min-h-screen flex flex-col items-center mt-12">
  <h1 class="text-2xl font-bold border-b-2 text-center mb-5">
    Alle Deelnemers bewerken
  </h1>

  <!-- Table for displaying and editing members -->
  <table class="min-w-full border-collapse border rounded overflow-hidden">
    <thead class="">
      <tr>
        <th class="py-2 px-4 text-sm font border">Naam Lid</th>
        <th class="py-2 px-4 text-sm border">Beperking</th>
        <th class="py-2 px-4 text-sm border">Group ID</th>
        <th class="py-2 px-4 text-sm border">Acties</th>
      </tr>
    </thead>
    <tbody>
      {#each members as { id, name, handicapId, groupId }}
        <tr class="border-t">
          <td class="py-2 px-4 text-sm border">
            <input id={`memberName-${id}`} type="text" class="w-full px-2 py-1 border rounded focus:border-gray-500" bind:value={name} />
          </td>
          <td class="py-2 px-4 text-sm border">
            <!-- Dropdown for handicaps -->
            <select bind:value={handicapId} class="w-full px-2 py-1 border rounded focus:border-gray-500">
              {#each handicaps as { id: handicapId, name }}
                <option value={handicapId}>{name}</option>
              {/each}
            </select>
          </td>
          <td class="py-2 px-4 text-sm border">
            <input id={`memberGroupId-${id}`} type="text" class="w-full px-2 py-1 border rounded focus:border-gray-500" bind:value={groupId} />
          </td>
          <td class="py-2 px-4 text-sm border">
            <div class="flex items-center space-x-2">
              <button type="button" class="text-center justify-center px-2 py-1 border border-transparent text-base font-medium rounded-xl button-bg" on:click={() => updateMember(id, { name, handicapId, groupId })}>
                <i class="fa-regular fa-pen-to-square"></i>
              </button>
              <button type="button" class="text-center justify-center px-2 py-1 border border-transparent text-base font-medium rounded-xl button-bg" on:click={() => openDeleteModal(id)}>
                <i class="fa-solid fa-trash-can" style="color: #d01124;"></i>
              </button>
            </div>
          </td>
        </tr>
      {/each}

      <!-- Row for adding a new member -->
      <tr>
        <td class="py-2 px-4 text-sm border">
          <input type="text" bind:value={newMember.name} placeholder="Name" class="w-full px-1 py-1 border rounded focus:border-gray-500" />
        </td>
        <td class="py-2 px-4 text-sm border">
          <!-- Dropdown for handicaps -->
          <select bind:value={newMember.handicapId} class="w-full px-2 py-1 border rounded focus:border-gray-500">
            {#each handicaps as { id, name }}
              <option value={id}>{name}</option>
            {/each}
          </select>
        </td>
        <td class="py-2 px-4 text-sm border">
          <input type="text" bind:value={newMember.groupId} placeholder="Group ID" class="w-full px-2 py-1 border rounded focus:border-gray-500" />
        </td>
        <td class="py-2 px-4 text-sm border">
          <button type="button" on:click={addNewMember} class="text-center justify-center px-2 py-1 border border-transparent text-base font-medium rounded-xl button-bg">
            <i class="fa-solid fa-plus"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="mt-10 mb-20">
    <p>Uitleg symbolen:</p>
    <li><i class="fa-regular fa-pen-to-square mb-1"></i>  Gegevens van deelnemer Aanpassen</li>
    <li><i class="fa-solid fa-trash-can" style="color: #d01124;"></i>  Deelnemer Verwijderen</li>
    <li><i class="fa-solid fa-plus"></i> Nieuwe deelnemer toegevoegd</li>
  </div>

  <style>
    .bg-sky {
      background-image: url('../../../static/imgs/BG_Light_Blue.png');
      background-position: center;
    }
  </style>
</div>

<style>
  /* Styles for the DeleteModal component */
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

    /* Styles for the UpdateModal component */
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

    .button-color {
    background-color: #ff9d00;
  }
</style>
