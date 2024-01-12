<script>
    import BackButton from "$lib/components/BackButton.svelte";
    import HandicapDetails from "$lib/components/HandicapDetails.svelte";
    import { fly } from "svelte/transition";
    import Handicaps from "$lib/components/Handicaps.svelte";
  </script>
  
  <BackButton></BackButton>
  
  <body transition:fly={{ y: 300, duration: 300 }}>
  
  <BackButton></BackButton>
  
  <div>
  <div class="min-h-screen flex flex-col items-center">
    <div class="w-5/6 mt-2">
    </div>
    <div class="w-96 rounded-md">
      <div class="grid grid-cols-1 gap-4 mt-10 mx-auto mb-20">
        <HandicapDetails> </HandicapDetails>
      </div>
    </div>
  </div>
  </div>
  </body>