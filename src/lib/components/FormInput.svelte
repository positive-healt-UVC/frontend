<script>
    export let label;
    export let labeling;
    export let type;
</script>

<label for={label} class="mb-1 text-center">{labeling}</label>
<input type={type} id={label} class="w-40 mt-1 resize-none mb-2 p-2 border border-gray-300 rounded"/>
