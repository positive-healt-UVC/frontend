// src/store/idStore.js
import { writable } from 'svelte/store';

// Initial value for the store
const initialId = null;

// Create a writable store
const idStore = writable(initialId);

export default idStore;