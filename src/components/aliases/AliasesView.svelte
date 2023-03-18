<script lang="ts">
    import { aliasStore } from "../../lib/stores/AliasStores";
    import Alias from "./Alias.svelte";

    $: search = $aliasStore.search.toLowerCase();

    $: searchedAliases = $aliasStore.aliases.filter(a => a.alias.toLowerCase().includes(search) || a.name.toLowerCase().includes(search)) 
</script>

<section>
    <div>
        {#each searchedAliases as alias}
            <Alias alias={alias}/>
        {:else}
            <div class='no-results'>
                <h1>No results</h1>
            </div>
        {/each}
    </div>
</section>

<style>
    section {
        height: 18rem;
        background-color: var(--secondary-color);
        box-shadow: 0px 4px 0px 0px rgb(92, 92, 92);
        border-radius: 1rem;
        padding-inline: 1rem;
        padding-block: .4rem;
    }
    div {
        height: 100%;
        overflow: hidden scroll;
        display: flex;
        flex-direction: column;
        gap: .3rem;
    }
    .no-results {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>