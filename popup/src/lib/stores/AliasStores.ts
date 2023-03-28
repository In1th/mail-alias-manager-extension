import { writable } from "svelte/store";
import { AliasViewModel } from "../model/AliasViewModel";
import { ApiUtils } from "../api/ApiUtils";

export class AliasStore {
    private readonly _api = ApiUtils.getApi();
    aliases: AliasViewModel[] = []
    currentAlias = new AliasViewModel();
    emailPrefix = '';
    search = '';

    async getAliases() {
        return this._api.getAliases();
    }
    async setAliases() {
        await this._api.setAliases(this.aliases);
    }
    async getPrefix() {
        return this._api.getEmailPrefix();
    }
    async setPrefix() {
        await this._api.setEmailPrefix(this.emailPrefix);
    }

    async reset() {
        await this.setAliases();
        await this.setPrefix();
    }
}

export const aliasStore = writable(new AliasStore());