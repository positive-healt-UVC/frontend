<script>
    import { activities } from '../../stores/activities';
    import Activity from '$lib/components/activities/Activity.svelte';
</script>

    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Activiteiten</h1>
    
        {#each $activities as activity (activity.id)}
        <div class="mb-2">
            <a href={`/activities/${activity.id}`} class="block text-blue-500 hover:underline">{activity.title}</a>
        </div>
        {/each}
    
        <a href="/activities/addActivity" class="block text-blue-500 hover:underline mt-4">Add Activity</a>
    </div>
