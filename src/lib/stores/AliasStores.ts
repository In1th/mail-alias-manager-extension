import { writable } from "svelte/store";
import type { Api } from "../api/Api";
import { AliasViewModel } from "../model/AliasViewModel";

export class AliasStore {
    aliases: AliasViewModel[] = []
    currentAlias: AliasViewModel = new AliasViewModel();
    search: string = '';

    async getAliases(api: Api) {
        return api.getAliases();
    }
}

export const aliasStore = writable(new AliasStore());