<script lang="ts">
    import { aliasStore } from "../../lib/stores/AliasStores";
    import Alias from "./Alias.svelte";

</script>

<section>
    <div>
        {#await $aliasStore.aliases}
            <p>Waiting ...</p>
        {:then aliases} 
            {#each aliases as alias}
                <Alias {...alias}/>
            {/each}
        {/await}
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
</style>