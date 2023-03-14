import type { Alias } from "../model/Alias";
import { Email } from "../utils/emailCoder";
import type { Api } from "./Api";

export class FakeApi implements Api {
    async getAliases(): Promise<Alias[]> {
        const email = 'krukm634'
        const res: Alias[] = [
            {
                name: 'Facebook',
                alias: Email.generateAlias(email)
            },
            {
                name: 'Google',
                alias: Email.generateAlias(email)
            },
            {
                name: 'Destiny',
                alias: Email.generateAlias(email)
            },
            {
                name: 'WP',
                alias: Email.generateAlias(email)
            },
            {
                name: 'Github',
                alias: Email.generateAlias(email)
            },
        ];

        return res;
    }

}