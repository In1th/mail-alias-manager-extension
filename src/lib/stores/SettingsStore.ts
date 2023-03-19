import { writable } from "svelte/store";
import { ApiUtils } from "../api/ApiUtils";
import { SettingsViewModel } from "../model/SettingsViewModel";

export class SettingsStore {
    settings = new SettingsViewModel();

    async getSettings(){
        const api = ApiUtils.getApi()
        return await api.getSettings();
    }

    async setSettings(){
        const api = ApiUtils.getApi()
        await api.setSettings(this.settings);
    }

    async reset(){
        await this.setSettings();
    }
}

export const settingsStore = writable(new SettingsStore());