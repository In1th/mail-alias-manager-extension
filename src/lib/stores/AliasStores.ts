import { writable } from "svelte/store";
import type { Api } from "../api/Api";
import type { AliasViewModel } from "../model/AliasViewModel";
import type Fuse from 'fuse.js';

export class AliasStore {
    aliases: Promise<AliasViewModel[]>;
    searchEngine: Fuse<AliasViewModel>;
    search: string = '';

    async getAliases(api: Api) {
        return api.getAliases();
    }
}

export const aliasStore = writable(new AliasStore());