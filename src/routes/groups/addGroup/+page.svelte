<script>
    import { goto } from "$app/navigation";
    import BackButton from "$lib/components/BackButton.svelte";
  
    let groupData = {
      carer: "",
      name: "",
    };
  
    let errors = {};
  
    const validateForm = () => {
      errors = {};
  
      // Basic validation example, you can add more complex validation rules
      if (!groupData.carer) {
        errors.carer = "begeleider is verplicht";
      }
  
      if (!groupData.name) {
        errors.name = "deelnamers zijn verplicht";
      }
  
      return Object.keys(errors).length === 0;
    };
  
    const addGroup = async () => {
      if (!validateForm()) {
        return;
    }
  
    const newGroupData = {
      carer: groupData.carer,
      name: groupData.name,
    };
  
    try {
      const response = await fetch("http://localhost:3000/groups/groups/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newGroupData),
        });
  
      if (response.ok) {
        console.log("Group successfully added");
        alert("Group toegevoegd");
        goto("../groups");
      } else {
          console.error("Failed to add group data");
        }
    } 
    catch (error) {
      console.error(
        "Error:",
        error instanceof Error ? error.message : error
      );
    }
  }
  </script>
  
  <BackButton></BackButton>
  
      <div class="container mx-auto min-h-screen flex flex-col items-center bg-sky">
          <h1 class="m-5 text-2xl font-bold mb-4 py-4 border-b-2">Groep toevoegen</h1>
          
          <form on:submit|preventDefault={addGroup} class="max-w-md mx-auto bg-white p-8 rounded-xl">
              <div class="mb-4">
                  <label for="begeleider" class="block text-gray-700 text-sm font-bold mb-2">Begeleider:</label>
                  <input
                      id="begeleider"
                      type="text"
                      class="w-full px-4 py-2 border rounded-xl focus:border-gray-500"
                      bind:value={groupData.carer}
                  />
              </div>
              <div class="mb-4">
                  <label for="groepsNaam" class="block text-gray-700 text-sm font-bold mb-2">Groeps naam:</label>
                  <input
                      id="groepsNaam"
                      type="text"
                      class="w-full px-4 py-2 border rounded-xl focus:border-gray-500"
                      bind:value={groupData.name}
                  />
              </div>
      
              <button
                  type="submit"
                  class="w-full button-color text-white px-4 py-2 rounded-xl hover:bg-green-400">
                  Activiteit aanmaken
              </button>
          </form>
      </div>
  
      <style>
          .bg-sky {
            background-image: url("../../imgs/BG_Light_Blue.png");
            background-position: center;
          }
  
          .button-color {
              background-color: #ff9d00;
          }
        </style>