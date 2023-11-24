<script>
  import Agenda from "$lib/components/Agenda.svelte";
    import BackButton from "$lib/components/BackButton.svelte";
  import WeekNumber from "$lib/components/WeekNumber.svelte";
</script>

<BackButton></BackButton>

<div class="bg-sky">
  <div class="min-h-screen flex flex-col items-center">
    <div class="w-5/6">
      <WeekNumber />
    </div>
    <div class="w-5/6 rounded-md">
      <div class="grid grid-cols-1 gap-4 w-5/6 mt-10 mx-auto mb-20">
        <Agenda />
      </div>
    </div>
  </div>
</div>

<style>
  .bg-sky {
    background-image: url(".//imgs/BG_Light_Blue.png");
    background-position: center;
  }
</style>
