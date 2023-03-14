<script lang="ts">
    import SvgRightArrow from "../../components/icons/SvgRightArrow.svelte";
    import { tabStore, type Tab } from "../../lib/stores/TabStore";

    export let icon;
    export let mainText;
    export let secondaryText = '';
    export let tab: Tab;

    const onClick = () => {
        $tabStore.tab = tab;
    }
</script>

<section>
    <svelte:component this={icon}/>
    <div class="text-wrapper">
        <h2>{mainText}</h2>
        <h4>{secondaryText}</h4>
    </div>
    <button class="last" on:click={onClick}><SvgRightArrow color="var(--primary-color-600)"/></button>
</section>
<style>
    section {
        display: flex;
        padding: 1rem .5rem;
        gap: .5rem;
        flex-direction: row;
        align-items: center;
        background-color: var(--secondary-color);
        box-shadow: 0px 4px 0px 0px rgb(92, 92, 92);
        border-radius: 1rem;
        transition: all .2s ease-out;
    }
    section:hover {
        background-color: rgb(226, 226, 226);
    }
    h4 {
        color: rgb(92, 92, 92);
    }
    .text-wrapper{
        display: flex;
        flex-direction: column;
    }
    .last {
        margin-left: auto;
    }
    button {
        background-color: unset;
        cursor: pointer;
    }
</style>