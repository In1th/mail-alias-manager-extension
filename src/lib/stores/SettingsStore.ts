import { writable } from "svelte/store";

export class SettingsStore {
    showTutorial = true;
    darkMode = false;
}

export const settingsStore = writable(new SettingsStore());