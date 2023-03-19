import type { AliasViewModel } from "../model/AliasViewModel";
import { SettingsViewModel } from "../model/SettingsViewModel";
import type { Api } from "./Api";

export class StorageApi implements Api{
    async getAliases(): Promise<AliasViewModel[]> {
        const {aliases} = await this.requestData('aliases', []);
        return aliases;
    }
    
    async setAliases(aliases: AliasViewModel[]) {
        await this.storeData('aliases', aliases);
    }
    async getEmailPrefix(): Promise<string> {
        const {prefix} = await this.requestData('prefix', '');
        return prefix;    
    }
    async setEmailPrefix(email: string): Promise<void> {
        await this.storeData('prefix', email);
    }
    async getSettings(): Promise<SettingsViewModel> {
        const {settings} = await this.requestData('settings', new SettingsViewModel());
        return settings;
    }
    async setSettings(settings: SettingsViewModel): Promise<void> {
        await this.storeData('settings', settings);
    }

    private requestData(key: string, defaultValue: any){
        return chrome.storage.local.get({[key]: defaultValue});
    }

    private async storeData(key: string, value: any){
        await chrome.storage.local.set({[key]: value});
    }
}