<script>
    import { onMount } from "svelte";
    import SvgAdd from "../../components/icons/SvgAdd.svelte";
    import SvgBrowse from "../../components/icons/SvgBrowse.svelte";
    import SvgHelp from "../../components/icons/SvgHelp.svelte";
    import SvgMail from "../../components/icons/SvgMail.svelte";
    import SvgSettings from "../../components/icons/SvgSettings.svelte";
    import MainSection from "./MainSection.svelte";
    import { aliasStore } from "../../lib/stores/AliasStores";
    import { tabStore } from "../../lib/stores/TabStore";
    import { FakeApi } from "../../lib/api/FakeApi";

    onMount(() => {
        const api = new FakeApi();
        $aliasStore.aliases = $aliasStore.getAliases(api);
    })

    const showHelp = () => {
        $tabStore.showHelp = true;
    }
</script>
<section>
    <nav>
        <SvgMail color="white"/>
        <h1>Mail Aliaser</h1>
    </nav>
    <input type="text" placeholder="search"/>
    <div id="sections">
        <MainSection
            icon={SvgAdd}
            tab={'add'}
            mainText="Create new Alias"
            secondaryText="Click here to create an email alias"
        />
        <MainSection
            icon={SvgBrowse}
            tab={'browse'}
            mainText="Browse all Aliases"
            secondaryText="See, manage and delete your aliases"
        />
        <MainSection
            icon={SvgSettings}
            tab={'settings'}
            mainText="Settings"
            secondaryText="Change your extension settings"
        />
    </div>
    <footer>
        <button on:click={showHelp}>
            <SvgHelp/>
        </button>
    </footer>
</section>

<style>
    section,#sections{
        display: flex;
        flex-direction: column;
    }
    section > *:not(:first-child) {
        margin-inline: 1rem;
    }
    nav, footer {
        display: flex;
    }
    nav {
        padding: .1rem 1rem;
        gap: .5rem;
        background-color: var(--primary-color-600);
    }
    section {
        height: 100%;
        gap: .5rem;
    }
    #sections {
        gap: 1rem;
    }
    footer{
        margin-top: auto;
        gap: 2rem;
        justify-items: center;
        padding-bottom: 1rem;
    }
    footer button {
        height: 2rem;
        aspect-ratio: 1;
        padding: 0;
        margin-left: auto;
        background-color: unset;
    }
    footer button:hover{
        background-color: var(--primary-color-100);
    }
    input {
        font-size: 1rem;
    }
    h1 {
        color: white;
    }
</style>