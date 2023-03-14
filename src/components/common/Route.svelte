<script lang="ts">
    import { tabStore, type Tab } from "../../lib/stores/TabStore";

    export let tab: Tab;
</script>

{#if $tabStore.tab === tab}
    <slot/>
{/if}