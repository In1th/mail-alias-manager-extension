<script>
    import { tabStore } from "../../lib/stores/TabStore";
    import { AliasStore, aliasStore } from "../../lib/stores/AliasStores";
    import { SettingsStore, settingsStore } from "../../lib/stores/SettingsStore";
    import Modal from "../common/Modal.svelte";
    import SubContent from "../common/SubContent.svelte";
    import SvgBug from "../icons/SvgBug.svelte";
    import SvgReset from "../icons/SvgReset.svelte";

    let showReset = false;

    const resetInit = () => {
        showReset = true;
    }
    const closeReset = () => {
        showReset = false;
    }
    const reset = async () => {
        $aliasStore = new AliasStore();
        $settingsStore = new SettingsStore();
        await $aliasStore.reset();
        await $settingsStore.reset();

        $tabStore.tab = 'login';
        $tabStore.showNotif = true;
        $tabStore.notification = {
            type: 'success',
            description: 'Configuration was resetted!'
        };
    }

    const save = async () => {
        $settingsStore.setSettings();
    }

    const onReport = () => {
        if (chrome.tabs) {
            chrome.tabs.create({url: 'https://github.com/In1th/mail-alias-manager-extension/issues/new'})
        }
    }
</script>

<SubContent title="Settings">
    <section>
        <div class='main-content'>
            <div class="setting">
                <h3>Show tutorial</h3>
                <input type="checkbox" bind:checked={$settingsStore.settings.showTutorial} on:change={save}/>
            </div>
            <div class="setting">
                <h3>Dark Mode (in developement)</h3>
                <input type="checkbox" bind:checked={$settingsStore.settings.darkMode} on:change={save}/>
            </div>
            <div class="last-options">
                <button on:click={resetInit}>
                    <SvgReset color='white'/>
                    <p>Reset</p>
                </button>
                <button on:click={onReport}>
                    <SvgBug/>
                    <p>Report a bug</p>
                </button>
            </div>
        </div>
    </section>
    {#if showReset}
         <Modal icon={SvgReset} title='Reset' closeWindow={closeReset}>
            <section id="reset-everything">
                <article>
                    <p>Are you sure you want to reset your configuration? All your aliases will be lost!</p>
                </article>
                <div>
                    <button on:click={closeReset}>Cancel</button>
                    <button on:click={reset}>Reset</button>
                </div>
            </section>
         </Modal>
    {/if}
</SubContent>

<style>
    .main-content {
        height: 18rem;
        display: flex;
        gap: .1rem;
        flex-direction: column;

        background-color: var(--secondary-color);
        box-shadow: 0px 4px 0px 0px rgb(92, 92, 92);
        border-radius: 1rem;
        margin-inline: 1rem;
        padding: .5rem 1rem;
    }
    .last-options {
        display: flex;
        gap: 0.5rem;
        margin-top: auto;
    }
    .last-options *:first-child {
        margin-left: auto;
    }
    section {
        flex-grow: 1;
    }
    button{
        display: flex;
        gap: .2rem;
        padding-inline: .5rem;
        align-items: center;
    }
    p {
        color: inherit;
    }
    .setting {
        display: flex;
    }
    input {
        margin-left: auto
    }


    #reset-everything {
        flex-grow: 1;
        display: flex;
        gap: 1rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 1rem 1rem;
    }
    #reset-everything > div {
        margin-top: auto;
        display: flex;
        gap: 1rem;
        width: 100%;
    }
    button:first-child {
        margin-left: auto;
    }
    article {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>