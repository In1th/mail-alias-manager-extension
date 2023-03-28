<script>
    import SvgClose from "../icons/SvgClose.svelte";

    export let icon;
    export let title;
    export let closeWindow;
</script>

<section>
    <div id="help-window">
        <div id="help-nav">
            <svelte:component this={icon}/>
            <h3>{title}</h3>
            <button on:click={closeWindow}><SvgClose/></button>
        </div>
        <slot/>
    </div>
</section>

<style>
    section {
        position: absolute;
        z-index: 5;
        height: 400px;
        width: 400px;
        background-color: rgba(0, 0, 0, 0.2);
        color: white;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    #help-window {
        width: 20rem;
        aspect-ratio: 1;
        border-radius: .5rem;
        background-color: var(--secondary-color);

        display: flex;
        flex-direction: column;
    }
    #help-nav {
        display: flex;
        padding: .2rem;
        padding-left: .2rem;
        gap: .2rem;
        align-items: center;
    }
    #help-nav button {
        margin-left: auto;
        padding: 0;
    }
</style>
