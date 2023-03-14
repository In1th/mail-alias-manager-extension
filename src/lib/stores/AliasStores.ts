import { writable } from "svelte/store";
import type { Api } from "../api/Api";
import type { Alias } from "../model/Alias";

export class AliasStore {
    aliases: Promise<Alias[]>;

    async getAliases(api: Api) {
        return api.getAliases();
    }
}

export const aliasStore = writable(new AliasStore());