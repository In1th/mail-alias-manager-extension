import type { AliasViewModel } from "../model/AliasViewModel";

export interface Api {
    getAliases(): Promise<AliasViewModel[]>;
}