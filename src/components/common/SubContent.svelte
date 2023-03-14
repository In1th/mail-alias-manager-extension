<script>
    import SvgLeftArrow from "./icons/SvgLeftArrow.svelte";
    import { tabStore } from "./stores/TabStore";

    export let title;

    const onClick = () => {
        $tabStore.tab = 'main';
    }
</script>

<section>
    <nav>
        <button on:click={onClick}>
            <SvgLeftArrow/>
        </button>
        <h1>{title}</h1>
    </nav>
    <slot/>
</section>

<style>
    nav {
        display: flex;
        padding: .1rem 1rem;
        gap: .5rem;
        background-color: var(--primary-color-600);
    }
    section {
        display: flex;
        flex-direction: column;
        height: 400px;
        width: 400px;
        gap: .5rem;
    }
    h1 {
        color: white;
    }
    button {
        padding: 0;
        background-color: unset;
    }
    section > *:not(:first-child) {
        margin-inline: 1rem;
    }
</style>