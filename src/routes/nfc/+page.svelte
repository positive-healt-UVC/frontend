<script>
    import BackButton from "$lib/components/BackButton.svelte";
    import Buttons from "$lib/components/Buttons.svelte";

    async function readNfc() {
        try {
            const ndef = new NDEFReader();
            await ndef.scan();

            ndef.addEventListener("readingerror", () => {
                console.log("Argh! Cannot read data from the NFC tag. Try another one?");
            });

            ndef.addEventListener("reading", ({ message, serialNumber }) => {
                console.log(`> Serial Number: ${serialNumber}`);
                console.log(`> Records: (${message.records.length})`);
            });
        } catch (error) {
            console.log("Argh! " + error);
        }
    }
  </script>
  
  <BackButton href={"/"}></BackButton>
  
  <div>
    <div class="min-h-screen bg-sky flex flex-col items-center">
      <div class="h-2"></div> <!-- Create space at the top -->
  
        <img class="w-40 h-100" src=".//imgs/AbilityLink_Logo.png" alt="AbilityLinkLogo">
    
        <div class="h-20 mt-8 space-y-6" on:click={readNfc}> 
            <Buttons
            text={"Horloge Scannen"} 
            href={"#"}
            image={"pr-2 l-2 fa-brands fa-nfc-directional fa-xl"}
            style={"color: #000000"}>
            </Buttons>
        </div>
    
    </div>
  </div>
  
  <style>
    .bg-sky {
      background-image: url(".//imgs/BG_Light_Blue.png");
      background-position: center;
    }
  </style>
  