<script lang='ts'>
    export let noOfPills = 1;
    export let currPill: number;
    export let onClickPill: (i: number) => void;

    const range = (len) => Array.from({length: len}, (x, i) => i);

</script>

<div id="pills">
    {#each range(noOfPills) as no}
        <button 
        on:click={() => onClickPill(no)}
        class="pill"
        class:current={no === currPill}></button>
    {/each}
</div>

<style>
    #pills {
        display: flex;
        gap: .5rem;
        justify-content: center;
        align-items: center;
        grid-column: 1 / span 3;
    }
    .pill {
        background-color: rgb(92, 92, 92);
        width: 2rem;
        height: .5rem;
        padding: 0;
        border-radius: 5px;
        outline: unset;
        cursor: pointer;
    }
    .current {
        background-color: var(--primary-color-600);
    }
</style>