<script>
  export let groups = [];
  export let selectedGroup;
</script>

<label for="groupDropdown" class="text-gray-700 text-sm font-bold">Kies groep:</label>
<select id="groupDropdown" bind:value={selectedGroup} class="border rounded-xl p-1 mb-2"> 
  {#each groups as group (group.id)}
    <option value={group.id}>{group.name}</option>
  {/each}
</select>
