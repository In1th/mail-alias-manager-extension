import type { Alias } from "../model/Alias";

export interface Api {
    getAliases(): Promise<Alias[]>;
}