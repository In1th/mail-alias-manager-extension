<script lang="ts">
    import { aliasStore } from "../../lib/stores/AliasStores";
    import type { AliasViewModel } from "../../lib/model/AliasViewModel";
    import SubContent from "../common/SubContent.svelte";
    import SvgClipboard from "../icons/SvgClipboard.svelte";
    import SvgInfo from "../icons/SvgInfo.svelte";
    import SvgReset from "../icons/SvgReset.svelte";
    import { Email } from "../../lib/utils/emailCoder";

    let name = '';
    let email = Email.generateAlias('krukm634');
    let copied = false;
    $: nameTaken = (aliases: AliasViewModel[]) => aliases.find(a => a.name === name) !== undefined;

    const regenerateAlias = () => {
        email = Email.generateAlias('krukm634');
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
</script>

<SubContent title="New Alias">
    <form>
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
        {#await $aliasStore.aliases then aliases}
            {#if nameTaken(aliases)}
                 <div class="alias-warning">
                     <SvgInfo/>
                     <p>This alias name is already used</p>
                 </div>
            {:else if copied}
                <div class="alias-copied">
                    <SvgInfo color='var(--success-color-800)'/>
                    <p>Alias copied to clipboard</p>
                </div>
            {/if}
            <div class="last" class:lastalign={!nameTaken(aliases) && !copied}>
                <button type="button" on:click={clear} title="Clear inputs">Clear</button>
                <button type="submit" title="Add new alias">Add</button>
            </div>
        {/await}
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
    .alias-warning, .alias-copied {
        display: flex;
        background-color: var(--danger-color-100);
        margin-top: auto;
        gap: .5rem;
        font-size: .8rem;
        align-items: center;
        border-radius: .5rem;
        padding: .5rem;
    }
    .alias-warning {
        background-color: var(--danger-color-100);
    }
    .alias-copied {
        background-color: var(--success-color-100);
    }
    .lastalign {
        margin-top: auto;
    }
</style>