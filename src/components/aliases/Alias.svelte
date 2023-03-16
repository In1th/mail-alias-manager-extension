<script lang="ts">
    import SvgDelete from "../icons/SvgDelete.svelte";
import SvgEdit from "../icons/SvgEdit.svelte";

    export let name: string;
    export let alias: string;
</script>

<section>
    <div>
        <h4>{name}</h4>
        <p>{alias}</p>
    </div>
    <div class="last">
        <button><SvgEdit/></button>
        <button><SvgDelete/></button>
    </div>
</section>

<style>
    section {
        display: flex;
        align-items: center;
        padding: .2rem .1rem;
        transition: all .2s ease-out;
    }
    section:hover {
        background-color: rgb(226, 226, 226);
    }
    button {
        padding: 0;
        background-color: unset;
        outline: unset;
    }
    .last {
        margin-left: auto;
    }
    p {
        font-size: .8rem;
    }
</style>