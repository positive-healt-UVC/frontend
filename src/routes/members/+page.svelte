<script>
  import { onMount } from 'svelte';
  import BackButton from '$lib/components/BackButton.svelte';

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

  let members = [];

  onMount(async () => {
    members = await getAllMembers();
  });

  // Function to update a specific member
  const updateMember = async (id, data) => {
    try {
      const response = await fetch(`http://localhost:3000/groups/members/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log(`Member ${id} updated successfully!`);
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
        // Optionally, update the members array to reflect the changes
        members = members.filter(member => member.id !== id);
      } else {
        console.error(`Failed to delete Member ${id}`);
      }
    } catch (error) {
      console.error('Error:', error instanceof Error ? error.message : error);
    }
  };
  
</script>

<BackButton />

<div class="bg-sky container mx-auto min-h-screen flex flex-col items-center">
  <h1 class="mt-10 text-2xl font-bold border-b-2 text-center mb-5">
    Deelnemers bewerken
  </h1>

  <!-- Table for displaying and editing members -->
<table class="min-w-full border-collapse border rounded overflow-hidden">
  <thead class="">
    <tr>
      <th class="py-2 px-4 text-sm font border">Naam Lid</th>
      <th class="py-2 px-4 text-sm border">Beperking ID</th>
      <th class="py-2 px-4 text-sm border">Group ID</th> <!-- Add this line -->
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
          <input id={`memberHandicap-${id}`} type="text" class="w-full px-2 py-1 border rounded focus:border-gray-500" bind:value={handicapId} />
        </td>
        <td class="py-2 px-4 text-sm border">
          <input id={`memberGroupId-${id}`} type="text" class="w-full px-2 py-1 border rounded focus:border-gray-500" bind:value={groupId} />
        </td>
        <td class="py-2 px-4 text-sm border">
          <button type="button" class="text-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-xl button-color button-bg" on:click={() => updateMember(id, { name, handicapId, groupId })}>
            <i class="fa-regular fa-pen-to-square"></i>
          </button>
          <button type="button" class="text-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-xl button-color button-bg" on:click={() => deleteMember(id)}>
            <i class="fa-solid fa-trash-can" style="color: #d01124;"></i>
          </button>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

  <div class="mt-10">
    <p>Betekenis symbolen:</p>
    <li><i class="fa-regular fa-pen-to-square "></i> = Aanpassen</li>
    <li><i class="fa-solid fa-trash-can" style="color: #d01124;"></i>= Verwijderen</li>
  </div>

  <style>
    .bg-sky {
      background-image: url('public/static/imgs/BG_Light_Blue.png');
      background-position: center;
    }

  </style>
</div>
