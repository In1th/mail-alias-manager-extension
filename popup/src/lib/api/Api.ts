import type { AliasViewModel } from "../model/AliasViewModel";
import type { SettingsViewModel } from "../model/SettingsViewModel";

export interface Api {
    getEmailPrefix(): Promise<string>;
    setEmailPrefix(email: string): Promise<void>;

    getAliases(): Promise<AliasViewModel[]>;
    setAliases(aliases: AliasViewModel[]): Promise<void>;

    getSettings(): Promise<SettingsViewModel>;
    setSettings(settings: SettingsViewModel): Promise<void>;
}