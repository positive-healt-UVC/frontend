<script>
    import { activities } from '../../../stores/activities.js';
    let activityData = { id: '', tiltle: '', time: '' };

    const addActivity = () => {
    //TODO
};
</script>

    <div class="container mx-auto min-h-screen flex flex-col items-center">
        <h1 class="m-5 text-2xl font-bold mb-4 py-4 border-b-2">Activiteit toevoegen</h1>
        
        <form on:submit|preventDefault={addActivity} class="max-w-md mx-auto bg-white p-8 rounded-xl">
            <div class="mb-4">
                <label for="activityName" class="block text-gray-700 text-sm font-bold mb-2">Naam:</label>
                <input
                    id="activityName"
                    type="text"
                    class="w-full px-4 py-2 border rounded-xl focus:border-gray-500"
                    bind:value={activityData.id}
                />
            </div>

            <div class="mb-4">
                <label for="activityDescription" class="block text-gray-700 text-sm font-bold mb-2">Omschrijving:</label>
                <textarea
                    id="activityDescription"
                    class="w-full h-25 px-4 py-2 border rounded-xl focus:border-gray-500"
                    bind:value={activityData.tiltle}
                ></textarea>
            </div>

            <div class="mb-4">
                <label for="activityTime" class="block text-gray-700 text-sm font-bold mb-2">Tijd:</label>
                <input
                    id="activityTime"
                    type="datetime-local"
                    class="w-full px-4 py-2 border rounded-xl focus:border-gray-500"
                    bind:value={activityData.time}
                />
            </div>
    
            <button
                type="submit"
                class="w-full bg-gray-500 text-white px-4 py-2 rounded-xl hover:bg-green-400"
            >
                Activiteit aanmaken
            </button>
        </form>
    </div>
