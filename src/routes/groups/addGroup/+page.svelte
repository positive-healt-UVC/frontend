<script>
    import BackButton from "$lib/components/BackButton.svelte";

    let groepData = { id: '', begeleider: '', deelnemers: '', telefoonNummer: '' };

    const addActivity = () => {
};
</script>

<BackButton></BackButton>

    <div class="container mx-auto min-h-screen flex flex-col items-center bg-sky">
        <h1 class="m-5 text-2xl font-bold mb-4 py-4 border-b-2">Groep toevoegen</h1>
        
        <form on:submit|preventDefault={addActivity} class="max-w-md mx-auto bg-white p-8 rounded-xl">
            <div class="mb-4">
                <label for="begeleider" class="block text-gray-700 text-sm font-bold mb-2">Begeleider:</label>
                <input
                    id="begeleider"
                    type="text"
                    class="w-full px-4 py-2 border rounded-xl focus:border-gray-500"
                    bind:value={groepData.begeleider}
                />
            </div>
            <div class="mb-4">
                <label for="deelnemers" class="block text-gray-700 text-sm font-bold mb-2">Deelnemers:</label>
                <input
                    id="deelnemers"
                    type="text"
                    class="w-full px-4 py-2 border rounded-xl focus:border-gray-500"
                    bind:value={groepData.deelnemers}
                />
            </div>
            <div class="mb-4">
                <label for="telefoonNummer" class="block text-gray-700 text-sm font-bold mb-2">Telefoon nummer:</label>
                <input
                    id="telefoonNummer"
                    type="int"
                    class="w-full px-4 py-2 border rounded-xl focus:border-gray-500"
                    bind:value={groepData.telefoonNummer}
                />
            </div>
          
    
            <button
                type="submit"
                class="w-full button-color text-white px-4 py-2 rounded-xl hover:bg-green-400">
                Activiteit aanmaken
            </button>
        </form>
    </div>

    <style>
        .bg-sky {
          background-image: url("../../imgs/BG_Light_Blue.png");
          background-position: center;
        }

        .button-color {
            background-color: #ff9d00;
        }
      </style>
