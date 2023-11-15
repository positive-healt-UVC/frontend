<script>

    import Agenda from "$lib/components/Agenda.svelte";

</script>
<div class="min-h-screen bg-sky flex flex-col items-center">
    <div class="bg-slate-500">
        <p>menu</p>
    </div>
    <div class="bg-yellow-500 w-5/6">
    <div class="grid grid-cols-1 gap-4 w-5/6 mt-10 mx-auto mb-10">
        <Agenda />
        <Agenda />
        <Agenda />
      </div>
    </div>
    
</div>
  
  
    <style>
      .bg-sky {
        background-image: url(".//imgs/BG_Light_Blue.png");
        background-position: center;
      }
  
      .button-color {
        background-color: #0C9EFF ;
      }
    </style>
  