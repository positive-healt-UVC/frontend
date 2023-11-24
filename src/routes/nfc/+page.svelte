<script>
  import BackButton from "$lib/components/BackButton.svelte";
  import Buttons from "$lib/components/Buttons.svelte";

  async function readNfc() {
    const logThing = document.getElementById('log');
    logThing.innerHTML = "Scanning...";

    try {
      const ndef = new NDEFReader();
      await ndef.scan();

      ndef.addEventListener("readingerror", () => {
        logThing.innerHTML = "Argh! Cannot read data from the NFC tag. Try another one?";
      });

      ndef.addEventListener("reading", ({ message, serialNumber }) => {
        logThing.innerHTML = `> Serial Number: ${serialNumber}`;
        logThing.innerHTML = `> Records: (${message.records.length})`;
      });
    } catch (error) {
      logThing.innerHTML = "Argh! " + error;
    }
  }
</script>

<BackButton href={"/"} />

<div>
  <div class="min-h-screen bg-sky flex flex-col items-center">
    <div class="h-2" />

    <img
      class="w-40 h-100"
      src=".//imgs/AbilityLink_Logo.png"
      alt="AbilityLinkLogo"
    />

    <div class="h-20 mt-8 space-y-6" on:click={readNfc}>
      <Buttons
        text={"Horloge Scannen"}
        href={"#"}
        image={"pr-2 l-2 fa-brands fa-nfc-directional fa-xl"}
        style={"color: #000000"}
      />
    </div>

    <p id="log">Start Scanning</p>
  </div>
</div>

<style>
  .bg-sky {
    background-image: url(".//imgs/BG_Light_Blue.png");
    background-position: center;
  }
</style>
