<script>
  import { onMount } from 'svelte';
  import Buttons from '$lib/components/Buttons.svelte';
  import AudioHelp from '$lib/components/AudioHelp.svelte';

  let currentIndex = 0;
  let text = [
    { text: 'Ability Link transformeert communicatie voor mensen met beperkingen en biedt een gebruiksvriendelijk platform dat is afgestemd op hun behoeften.' },
    { text: 'Ability Link revolutioneert communicatie voor mensen met beperkingen en biedt een toegankelijk en intuïtief platform dat naadloze interactie mogelijk maakt.' },
    { text: 'Ability Link geeft mensen met beperkingen de kracht door communicatie te revolutioneren met behulp van een toegankelijk en intuïtief platform.' }
  ];

  let feedbackUser = [
    { feedbackUser: 'Berend Botje' },
    { feedbackUser: 'Arend Zijlstra' },
    { feedbackUser: 'Piet Paulisma' },
  ];

  let profileImage = [
    { profileImage: './imgs/Profile1.jpg' },
    { profileImage: './imgs/Profile2.png' },
    { profileImage: './imgs/Profile3.png' },
  ];

  let fadeIn = false;

  onMount(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % text.length;
      fadeIn = !fadeIn; // Toggle the value to trigger the fade-in animation
    }, 5000);

    return () => clearInterval(interval);
  });
</script>

<body>
  <div class="min-h-screen bg-sky flex flex-col items-center">

    <img
      class="w-40 h-100 mt-4"
      src=".//imgs/Logo-Blanc.png"
      alt="AbilityLinkLogo"
    />

    <img
      class="w-80 mt-4"
      src=".//imgs/Welcome-Text.png"
      alt="AbilityLinkLogo"
    />

    <div class="italic text-center text-xs mt-2 ml-4 mr-4">
      <p>
        "Wij helpen mensen met het verbeteren van communicatie tussen mensen met een beperking en hun begeleiders."
      </p>
    </div>

    <div class="text-center text-xs mt-6 -mb-4 ml-4 mr-4">
      <p>
        Gelieve aan te melden of te registreren om verder te gaan.
      </p>
    </div>

    <div class="h-20 w-80 mt-8 space-y-6 mb-12">
      <Buttons text={"Inloggen"} href={"/login"}/>
      <Buttons text={"Registreren"} href={"/register"}/>
    </div>

    <AudioHelp audioFile={'.//mp3/HomePagina2.mp3'}/>

    <div class="{fadeIn ? 'fade-in' : ''}">
      <img class="rounded-3xl mt-10 w-15 h-12" src="{profileImage[currentIndex].profileImage}" alt="ProfileImage"/>
    </div>
    
    <div class="text-center mt-3 {fadeIn ? 'fade-in' : ''}">
      <div>
        <p class="ml-2 mr-2 text-xs">"{text[currentIndex].text}"</p>
        <p class="mt-2 text-xs italic">- {feedbackUser[currentIndex].feedbackUser}</p>
      </div>
    </div>

  </div>
</body>

<style>
  .bg-sky {
    background-image: url("./imgs/BG_Light_Blue.png");
    background-position: center;
  }

  .fade-in {
    animation: fadeIn 2s ease-in-out;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
