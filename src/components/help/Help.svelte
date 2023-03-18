<script lang="ts">
    import SvgHelp from "../icons/SvgHelp.svelte";
    import SvgLeftArrow from "../icons/SvgLeftArrow.svelte";
    import SvgRightArrow from "../icons/SvgRightArrow.svelte";
    import { tabStore } from "../../lib/stores/TabStore";
    import HelpInstructions from "./HelpInstructions.svelte";
    import ProgressPills from "./ProgressPills.svelte";
    import Modal from "../common/Modal.svelte";


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

    const closeWindow = () => {
        $tabStore.showHelp = false;
    }
</script>
<Modal icon={SvgHelp} title="Help" closeWindow={closeWindow}>
    <div id="help-content">
        <button on:click={leftClick}><SvgLeftArrow color={leftColor}/></button>
        <div id="instructions">
            <HelpInstructions currentPage={page}/>
        </div>
        <button on:click={rightClick}><SvgRightArrow color={rightColor}/></button>
        <ProgressPills noOfPills={3} currPill={page} onClickPill={pillClickCallback}/>
    </div>
</Modal>

<style>
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
