<script lang="ts">
    import LogIn from "./components/login/LogIn.svelte";
    import { tabStore, type Tab } from "./lib/stores/TabStore";
    import MainView from "./components/main/MainView.svelte";
    import Route from "./components/common/Route.svelte";
    import Browse from "./components/aliases/Browse.svelte";
    import Help from "./components/help/Help.svelte";

    const routes = [
      {tab: 'login' as Tab, component: LogIn},
      {tab: 'main' as Tab, component: MainView},
      {tab: 'browse' as Tab, component: Browse},
    ]
</script>

<main>
  <div id="routes">
    {#each routes as route}
      <Route tab={route.tab}>
        <svelte:component this={route.component}/>
      </Route>
    {/each}
  </div>
  {#if $tabStore.showHelp}
    <Help/>
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
</style>