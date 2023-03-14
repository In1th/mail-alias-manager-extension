<script>
    export let currentPage;

    const texts = [
        'When signing up to a new website, go here and create a new alias.',
        'The extension will provide a new alias for you. Type it instead of your e-mail',
        'When getting a spam email with our alias, simply search it in the popup and we\'ll tell you who it was.'
    ];

    $: instructions = texts.map((x, i) => {return {id: i, instruction: x}});
</script>

{#each instructions as {id, instruction}}
    {#if id === currentPage}  
        <p>{instruction}</p>
    {/if}
{/each}