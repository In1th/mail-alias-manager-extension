<script lang="ts">
  import type { AliasViewModel } from "../../lib/model/AliasViewModel";
  import { aliasStore } from "../../lib/stores/AliasStores";
  import { tabStore } from "../../lib/stores/TabStore";
  import SvgDelete from "../icons/SvgDelete.svelte";
  import SvgEdit from "../icons/SvgEdit.svelte";

  export let alias: AliasViewModel;

  export let editOn = false;

  const onEdit = () => {
    editOn = !editOn;
  };

  function clickOutside(node, { enabled: initialEnabled, cb }) {
    const handleOutsideClick = ({ target }) => {
      console.log(node, target)
      if (!node.contains(target)) {
        cb();
      }
    };

    const handleKeyPressed = (e: KeyboardEvent) => {
      console.log(e)
      if (e.key === 'Enter'){
        cb();
      }
    }

    async function update({ enabled }) {
      if (enabled) {
        window.addEventListener("click", handleOutsideClick);
        window.addEventListener("keydown", handleKeyPressed);
      } else {
        await updateAliases();
        window.removeEventListener("click", handleOutsideClick);
        window.removeEventListener("keydown", handleKeyPressed);
      }
    }

    update({ enabled: initialEnabled });
    return {
      update,
      destroy() {
        window.removeEventListener("click", handleOutsideClick);
        window.removeEventListener("keydown", handleKeyPressed);
      },
    };
  }

  const updateAliases = async () => {
    await $aliasStore.setAliases();
  };

  const onDelete = async () => {
    $aliasStore.currentAlias = alias;
    $tabStore.showDelete = true;
  };
</script>

<section use:clickOutside={{ enabled: editOn, cb: () => (editOn = false) }}>
  <div class="main-info-wrapper">
    {#if editOn}
      <input class="edit-name" type="text" bind:value={alias.name} />
    {:else}
      <h4>{alias.name}</h4>
      <p>{`${$aliasStore.emailPrefix}+${alias.alias}@gmail.com`}</p>
    {/if}
  </div>
  <div class="last">
    <button on:click={onEdit}><SvgEdit /></button>
    <button on:click={onDelete}><SvgDelete /></button>
  </div>
</section>

<style>
  section {
    display: flex;
    align-items: center;
    padding: 0.2rem 0.1rem;
    transition: all 0.2s ease-out;
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
    font-size: 0.8rem;
  }
  .edit-name {
    height: 1.8rem;
    width: calc(100% - 10px);
    font-size: 1rem;
  }
  .main-info-wrapper {
    flex-grow: 1;
  }
</style>
