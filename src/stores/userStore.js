import { writable } from 'svelte/store';

// Create a writable store
export const user = writable({
  id: null,
  name: null,
});

// Function to set the user data
export const setUser = (userSession) => {
  user.set(userSession);
};
