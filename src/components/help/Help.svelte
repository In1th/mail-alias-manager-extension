<script lang="ts">
    import SvgClose from "../icons/SvgClose.svelte";
    import SvgHelp from "../icons/SvgHelp.svelte";
    import SvgLeftArrow from "../icons/SvgLeftArrow.svelte";
    import SvgRightArrow from "../icons/SvgRightArrow.svelte";
    import { tabStore } from "../stores/TabStore";
    import HelpInstructions from "./HelpInstructions.svelte";
    import ProgressPills from "./ProgressPills.svelte";

    const closeWindow = () => {
        $tabStore.showHelp = false;
    }

    let page: number = 0;
    const activeColor = 'var(--primary-color-600)';
    const deactiveColor = 'rgb(92, 92, 92)';

    $: leftColor = page === 0 ? deactiveColor : activeColor;
    $: rightColor = page === 2 ? deactiveColor : activeColor;

    const leftClick = () => {
        if (page > 0){
            page--;
        }
    }

    const rightClick = () => {
        if (page < 2){
            page++;
        }
    }

    const pillClickCallback = (i: number) => {
        page = i;
    }
</script>
<section>
    <div id="help-window">
        <div id="help-nav">
            <SvgHelp/>
            <h3>Help</h3>
            <button on:click={closeWindow}><SvgClose/></button>
        </div>
        <div id="help-content">
            <button on:click={leftClick}><SvgLeftArrow color={leftColor}/></button>
            <div id="instructions">
                <HelpInstructions currentPage={page}/>
            </div>
            <button on:click={rightClick}><SvgRightArrow color={rightColor}/></button>
            <ProgressPills noOfPills={3} currPill={page} onClickPill={pillClickCallback}/>
        </div>
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
    }
    #help-nav button {
        margin-left: auto;
        padding: 0;
    }
    #help-content {
        flex-grow: 1;
        display: grid;
        grid-template-columns: 1fr 6fr 1fr;
        grid-template-rows: 4fr 1fr;
    }
    #help-content button {
        background-color: unset;
        padding: 0;
    }
    #instructions {
        display: flex;
        padding-inline: .5rem;
        align-items: center;
    }
</style>
