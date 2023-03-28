<script lang="ts">
  import LogIn from "./components/login/LogIn.svelte";
  import { tabStore, type Tab } from "./lib/stores/TabStore";
  import MainView from "./components/main/MainView.svelte";
  import Route from "./components/common/Route.svelte";
  import Browse from "./components/aliases/Browse.svelte";
  import Help from "./components/help/Help.svelte";
  import Settings from "./components/settings/Settings.svelte";
  import NewAliasView from "./components/new/NewAliasView.svelte";
  import { onMount } from "svelte";
  import { aliasStore } from "./lib/stores/AliasStores";
  import Notification from "./components/common/Notification.svelte";
    import { settingsStore } from "./lib/stores/SettingsStore";
  
  const routes = [
    { tab: "login" as Tab, component: LogIn },
    { tab: "main" as Tab, component: MainView },
    { tab: "browse" as Tab, component: Browse },
    { tab: "add" as Tab, component: NewAliasView },
    { tab: "settings" as Tab, component: Settings },
  ];

  let prefix: string;
  let dataLoaded = false;

  onMount(async () => {
    prefix = await $aliasStore.getPrefix();
    $aliasStore.emailPrefix = prefix;

    if (prefix === "") {
      $tabStore.tab = "login";
    }
  });

  $: {
    if (!dataLoaded && prefix !== "") {
      $aliasStore.getAliases()
      .then((response) => {
        $aliasStore.aliases = response
        $aliasStore.aliases = $aliasStore.aliases.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      });
      $settingsStore.getSettings()
      .then((response) => {
        $settingsStore.settings = response;
      });
      dataLoaded = true;
    }
  };

  $: {
    if ($tabStore.showNotif) {
      setTimeout(() => ($tabStore.showNotif = false), 5000);
    }
  };
</script>

<main>
  <div id="routes">
    {#each routes as route}
      <Route tab={route.tab}>
        <svelte:component this={route.component} />
      </Route>
    {/each}
  </div>
  {#if $tabStore.showHelp}
    <Help />
  {/if}
  {#if $tabStore.showNotif}
    <div class="notification-wrapper">
      <Notification {...$tabStore.notification} />
    </div>
  {/if}
</main>

<style>
  main {
    background-color: var(--background-color);
    position: relative;
    height: 400px;
    width: 400px;
    z-index: 0;
  }
  #routes {
    position: absolute;
  }
  .notification-wrapper {
    position: absolute;
    width: calc(400px - 2rem);
    margin-inline: 1rem;
    bottom: 1rem;
  }
</style>
