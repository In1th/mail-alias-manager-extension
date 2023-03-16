import { writable } from "svelte/store";
import type { Api } from "../api/Api";
import type { AliasViewModel } from "../model/AliasViewModel";

export class AliasStore {
    aliases: Promise<AliasViewModel[]> = Promise.resolve([]);
    search: string = '';

    async getAliases(api: Api) {
        return api.getAliases();
    }
}

export const aliasStore = writable(new AliasStore());