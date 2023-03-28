<script>
    import { aliasStore } from "../../lib/stores/AliasStores";
    import { tabStore } from "../../lib/stores/TabStore";
    import Modal from "../common/Modal.svelte";
    import SvgDelete from "../icons/SvgDelete.svelte";

    export let closeCallback;

    const onDelete = async () => {
        $aliasStore.aliases = $aliasStore.aliases.filter(a => a.alias !== $aliasStore.currentAlias.alias);
        await $aliasStore.setAliases();
        $tabStore.showDelete = false;
        $tabStore.showNotif = true;
        $tabStore.notification = {
            description: 'Alias successfuly deleted',
            type: 'success'
        };
    }
</script>


<Modal icon={SvgDelete} title={`Delete "${$aliasStore.currentAlias.name}"?`} closeWindow={closeCallback}>
    <section>
        <article>
            <p>Are you sure you want to delete alias <b>{$aliasStore.currentAlias.name}</b>? You won't be able to revert it!</p>
        </article>
        <div>
            <button on:click={closeCallback}>Cancel</button>
            <button on:click={onDelete}>Delete</button>
        </div>
    </section>
</Modal>

<style>
    section {
        flex-grow: 1;
        display: flex;
        gap: 1rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 1rem 1rem;
    }
    section > div {
        margin-top: auto;
        display: flex;
        gap: 1rem;
        width: 100%;
    }
    button:first-child {
        margin-left: auto;
    }
    article {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>