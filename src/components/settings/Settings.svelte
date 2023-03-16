<script>
    import { settingsStore } from "../../lib/stores/SettingsStore";
    import SubContent from "../common/SubContent.svelte";
    import SvgBug from "../icons/SvgBug.svelte";
    import SvgReset from "../icons/SvgReset.svelte";
</script>

<SubContent title="Settings">
    <section>
        <div class='main-content'>
            <div class="setting">
                <h3>Show tutorial</h3>
                <input type="checkbox" bind:value={$settingsStore.showTutorial}/>
            </div>
            <div class="setting">
                <h3>Dark Mode (in developement)</h3>
                <input type="checkbox" bind:value={$settingsStore.darkMode}/>
            </div>
            <div class="last-options">
                <button>
                    <SvgReset/>
                    <p>Reset</p>
                </button>
                <a href="https://github.com/In1th/mail-alias-manager-extension/issues/new">
                    <button>
                        <SvgBug/>
                        <p>Report a bug</p>
                    </button>
                </a>
            </div>
        </div>
    </section>
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
</style>