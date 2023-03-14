<script lang="ts">
    import SvgClose from "../icons/SvgClose.svelte";

    export let searchText: string;

    $: showClear = searchText !== '';

    const clear = () => searchText = '';

    const forbiddenChars = ' '
    const input = () => {
        searchText = searchText.replaceAll(forbiddenChars, '');
    }
</script>

<div>
    <input
        bind:value={searchText}
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