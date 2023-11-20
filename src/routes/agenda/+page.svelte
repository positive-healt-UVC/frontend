<script>

    import Agenda from "$lib/components/Agenda.svelte";
    import WeekNumber from "$lib/components/WeekNumber.svelte";

</script>
<div class="bg-sky">
  <div class="min-h-screen flex flex-col items-center">
    <div class="bg-slate-500 w-full h-2/5">
        <p>menu</p>
    </div>
  <div class="w-5/6">
    <WeekNumber />
  </div>
    <div class="bg-white w-5/6 rounded-md">
    <div class="grid grid-cols-1 gap-4 w-5/6 mt-10 mx-auto mb-10">
        <Agenda />
        <Agenda />
        <Agenda />
        <Agenda />
        <Agenda />
        <Agenda />
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
  