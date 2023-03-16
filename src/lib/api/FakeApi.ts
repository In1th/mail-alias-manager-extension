import type { AliasViewModel } from "../model/AliasViewModel";
import { Email } from "../utils/emailCoder";
import type { Api } from "./Api";

export class FakeApi implements Api {
    async getAliases(): Promise<AliasViewModel[]> {
        const email = 'krukm634'
        const res: AliasViewModel[] = [
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