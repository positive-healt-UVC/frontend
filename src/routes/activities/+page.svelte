<script>
    import Activiteit from '$lib/components/Activiteit.svelte';
    import { activities } from '../../stores/activities';
</script>

    <div class="min-h-screen flex flex-col items-center">
        <h1 class=" m-5 py-8 text-2xl font-bold">Activiteiten</h1>
    
        {#each $activities as activity (activity.id)}
        <div class="mb-2">
            <a href={`/activities/${activity.id}`} class="block hover:underline w-60 sm:h-12 bg-amber-500 text-white text-center py-2 rounded-xl font-bold ">{activity.title}</a>
        </div>
        {/each}
    
        <a href="/activities/addActivity" class="block text-blue-500 hover:underline mt-4">Add Activity </a>
    </div>