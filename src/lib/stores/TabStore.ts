import { writable } from "svelte/store";

export type Tab = 'login' | 'main' | 'browse' | 'settings' | 'add';

export class TabStore {
    tab: Tab = 'main';
    showHelp = false;
}

export const tabStore = writable(new TabStore());