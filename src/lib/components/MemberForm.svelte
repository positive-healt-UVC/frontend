<!-- <script>
  import { onMount } from 'svelte';

  export let memberId;
  export let memberName;
  export let memberHandicapId;
  export let onUpdate;

  let name = memberName;
  let handicapId = memberHandicapId;
  let errors = {};

  const updateMember = () => {
    if (validateForm()) {
      onUpdate({ id: memberId, name, handicapId });
    }
  };

  const validateForm = () => {
    errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    if (!handicapId.trim()) {
      errors.handicapId = 'Beperking ID is required';
    }

    return Object.keys(errors).length === 0;
  };

  onMount(() => {
    name = memberName;
    handicapId = memberHandicapId;
  });
</script>

<table class="min-w-full border-collapse border rounded overflow-hidden">
  <thead class="">
    <tr>
      <th class="py-2 px-4 text-sm font border">Name</th>
      <th class="py-2 px-4 text-sm border ">Beperking ID</th>
      <th class="py-2 px-4 text-sm border">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-t">
      <td class="py-2 px-4 text-sm border">
        <input id={`memberName-${memberId}`} type="text" class="w-full px-2 py-1 border rounded focus:border-gray-500" bind:value={name} />
        {#if errors.name}<p class="text-red-500 text-sm mt-1">{errors.name}</p>{/if}
      </td>
      <td class="py-2 px-4 text-sm border">
        <input id={`memberHandicap-${memberId}`} type="text" class="w-full px-2 py-1 border rounded focus:border-gray-500" bind:value={handicapId} />
        {#if errors.handicapId}<p class="text-red-500 text-sm mt-1">{errors.handicapId}</p>{/if}
      </td>
      <td class="py-2 px-4 text-sm border">
        <button type="button" class="text-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-xl text-white button-color" on:click={updateMember}>
          Aanpassen
        </button>
      </td>
    </tr>
  </tbody>
</table> -->
