<script>
    import { aliasStore } from "../../lib/stores/AliasStores";
    import Search from "../common/Search.svelte";
    import SubContent from "../common/SubContent.svelte";
import AliasesView from "./AliasesView.svelte";
</script>

<SubContent title="Browse">
    <Search searchText={$aliasStore.search}/>
    <div>
        <AliasesView/>
    </div>
</SubContent>

<style>
    div {
        margin-inline: 1rem;
    }
</style>