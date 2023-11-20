import { writable } from 'svelte/store';

export const activities = writable([
    { id: 1, title: 'Zwemmen' },
    { id: 2, title: 'Basketbal' }
]);
