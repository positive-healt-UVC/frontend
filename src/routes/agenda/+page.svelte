<script>
  import Agenda from "$lib/components/Agenda.svelte";
    import BackButton from "$lib/components/BackButton.svelte";
</script>

<BackButton></BackButton>

<div>
  <div class="min-h-screen flex flex-col items-center">
    <div class="w-5/6 mt-2">
    </div>
    <div class="w-5/6 rounded-md">
      <div class="grid grid-cols-1 gap-4 w-5/6 mt-10 mx-auto mb-20">
        <Agenda />
      </div>
    </div>
  </div>
</div>