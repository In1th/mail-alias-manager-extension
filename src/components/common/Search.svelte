<script lang="ts">
    import { aliasStore } from "../../lib/stores/AliasStores";
    import SvgClose from "../icons/SvgClose.svelte";

    $: showClear = $aliasStore.search !== '';

    const clear = () => $aliasStore.search = '';

    const forbiddenChars = ' '
    const input = () => {
        $aliasStore.search = $aliasStore.search.replaceAll(forbiddenChars, '');
    }
</script>

<div>
    <input
        bind:value={$aliasStore.search}
        type="text"
        placeholder="search"
        on:input={input}
    />
    <button class:show={showClear} on:click={clear}><SvgClose color='var(--primary-color-600)'/></button>
</div>

<style>
    div {
        margin-inline: 1rem;
        position: relative;
        height: 1.5rem;
    }
    input {
        width: calc(100% - 0.3rem - 1px);
        position: absolute;
        font-size: 1rem;
    }
    button {
        position: absolute;
        padding: 0;
        background-color: unset;
        outline: unset;
        right: 0;
        display: none;
    }
    .show {
        display: block;
    }
</style>