<script lang="ts">
    import { aliasStore } from "../../lib/stores/AliasStores";
    import SubContent from "../common/SubContent.svelte";
    import SvgClipboard from "../icons/SvgClipboard.svelte";
    import SvgReset from "../icons/SvgReset.svelte";
    import { Email } from "../../lib/utils/emailCoder";
    import type { AliasViewModel } from "../../lib/model/AliasViewModel";
    import { tabStore } from "../../lib/stores/TabStore";
    import Notification from "../common/Notification.svelte";
    import { StorageApi } from "../../lib/api/StorageApi";

    let name = '';
    let alias = Email.generateAlias();
    let copied = false;

    $: email = `${$aliasStore.emailPrefix}+${alias}@gmail.com`;
    $: nameTaken = $aliasStore.aliases.find(a => a.name === name) !== undefined;

    const regenerateAlias = () => {
        alias = Email.generateAlias();
    }

    $: {
        if (copied){
            setTimeout(() => copied = false, 5000);
        }
    }
    
    const copy = async () => {
        await navigator.clipboard.writeText(email);
        copied = true;
    }

    const clear = () => {
        name = ''
    }

    const onSubmit = async () => {
        const aliasModel = {
            name,
            alias
        } as AliasViewModel;
        $aliasStore.aliases.push(aliasModel);
        $aliasStore.aliases = $aliasStore.aliases.sort((a,b) => a.name.localeCompare(b.name));
        const api = new StorageApi();
        await api.setAliases($aliasStore.aliases)
        $tabStore.tab = 'main';
        $tabStore.showNotif = true;
        $tabStore.notification = {
            description: 'Alias successfuly added',
            type: 'success'
        };
    }
</script>

<SubContent title="New Alias">
    <form on:submit|preventDefault={onSubmit}>
        <div class="new-alias-option">
            <label for="alias-name">Name</label>
            <input id="alias-name" bind:value={name}/>
        </div>
        <div class="new-alias-option">
            <label for="alias-value">Alias</label>
            <div class="alias-value-field">
                <input id="alias-value" bind:value={email} disabled/>
                <button type="button" on:click={regenerateAlias} title="Generate new alias"><SvgReset color="var(--primary-color-800)"/></button>
                <button type="button" on:click={copy} title="Copy to clipboard"><SvgClipboard/></button>
            </div>
        </div>
        {#if nameTaken}
            <Notification description='This alias name is already used' type='danger'/>
        {:else if copied}
            <Notification description='Alias copied to clipboard' type='success'/>
        {/if}
        <div class="last" class:lastalign={!nameTaken && !copied}>
            <button type="button" on:click={clear} title="Clear inputs">Clear</button>
            <button type="submit" title="Add new alias" disabled={name === ''}>Add</button>
        </div>
    </form>
</SubContent>

<style>
    form {
        height: 18rem;
        display: flex;
        gap: .7rem;
        flex-direction: column;

        background-color: var(--secondary-color);
        box-shadow: 0px 4px 0px 0px rgb(92, 92, 92);
        border-radius: 1rem;
        margin-inline: 1rem;
        padding: .5rem 1rem;
    }
    .new-alias-option {
        display: flex;
        flex-direction: column;
    }
    .last {
        display: flex;
        gap: .5rem;
    }
    .last *:first-child {
        margin-left: auto;
    }
    .alias-value-field {
        display: flex;
        width: 100%;
    }
    .alias-value-field input {
        border-radius: .3rem 0px 0px .3rem;
        flex-grow: 1;
    }
    .alias-value-field button {
        padding: 0;
        border-radius: 0;
        background-color: rgb(226, 226, 226);
        border: 1px solid var(--primary-color-800);

        transition: all .1s ease-in;
    }
    .alias-value-field button:last-child {
        border-radius: 0px .3rem .3rem 0;
    }
    .alias-value-field button:hover {
        background-color: rgb(176, 176, 176);
    }
    .lastalign {
        margin-top: auto;
    }
</style>