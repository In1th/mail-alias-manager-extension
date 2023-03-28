<script>
    import { tabStore } from "../../lib/stores/TabStore";
    import Search from "../common/Search.svelte";
    import SubContent from "../common/SubContent.svelte";
    import AliasesView from "./AliasesView.svelte";
    import Delete from "./Delete.svelte";

    const closeWindow = () => {
        $tabStore.showDelete = false;
    }
</script>

<SubContent title="Browse">
    <Search/>
    <div>
        <AliasesView/>
    </div>
    {#if $tabStore.showDelete}
         <Delete closeCallback={closeWindow}/>
    {/if}
</SubContent>

<style>
    div {
        margin-inline: 1rem;
    }
</style>