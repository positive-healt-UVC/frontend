<script>
    import { activities } from '../../../stores/activities.js';
    let activityData = { id: '', tiltle: '' };

    const addActivity = () => {
    // if (activityData.id.trim() !== '' && activityData.tiltle.trim() !== '') {
    // activities.update((currentActivities) => [
    //     ...currentActivities,
    //     { id: Date.now(), ...activityData },
    // ]);

    // Clear the form after adding the activity
    activityData = { id: '', tiltle: '' };
    // }
};
</script>

<div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Activiteit aanmaken</h1>
    
    <form on:submit|preventDefault={addActivity} class="max-w-md mx-auto">
        <label class="block mb-2">
        Naam:
        <input
            class="w-full px-4 py-2 border rounded focus:outline-none focus:border-gray-500"
            bind:value={activityData.id}
        />
        </label>

        <label class="block mb-2">
        Omschrijving:
        <textarea
            class="w-full px-4 py-2 border rounded focus:outline-none focus:border-gray-500"
            bind:value={activityData.tiltle}
        />
        </label>

        <button
        type="submit"
        class="w-full bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none"
        >
        Activiteit aanmaken
        </button>
    </form>
    </div>
