import { writable } from "svelte/store";

export type Tab = 'login' | 'main' | 'browse' | 'settings' | 'add';
export type Notification = 'success' | 'danger' | 'error' | 'info';

export class TabStore {
    tab: Tab = 'main';
    showHelp = false;

    showNotif = false;
    notification: NotificationViewModel = new NotificationViewModel();
}

export class NotificationViewModel {
    description = '';
    type: Notification = "success";
}

export const tabStore = writable(new TabStore());