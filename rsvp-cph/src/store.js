import { writable } from 'svelte/store';

export const user = writable({
  name: '',
  email: '',
});

export const state = writable('startScreen');
