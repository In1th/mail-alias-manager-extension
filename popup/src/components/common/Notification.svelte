<script>
    import SvgInfo from "../icons/SvgInfo.svelte";
    
    export let description;
    export let type;

    $: color = `var(--${type}-color-800)`
</script>

<div
    class:success={type === 'success'}
    class:danger={type === 'danger'}
    class:info={type === 'info'}
    class:error={type === 'error'}
    >
    {#if type === 'success' || type === 'info' || type === 'danger'}
        <SvgInfo color={color}/>
    {/if}
    <p>{description}</p>
</div>

<style>
    div {
        display: flex;
        margin-top: auto;
        gap: .5rem;
        font-size: .8rem;
        align-items: center;
        border-radius: .5rem;
        padding: .5rem;
        z-index: 1000;
    }
    .success {
        background-color: var(--success-color-100);
        color: var(--success-color-800);
    }
    .danger { 
        background-color: var(--danger-color-100);
    }
    .info {
        background-color: var(--info-color-100);
    }
    .error {
        background-color: var(--error-color-100);  
    }
</style>