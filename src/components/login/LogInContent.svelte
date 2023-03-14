<script>
    import SvgRightArrow from "../../components/icons/SvgRightArrow.svelte";
    import { tabStore } from "../../lib/stores/TabStore";

    let loginStarted = false;
    let triggeredValidation = false;

    const click = () => {
        loginStarted = true;
    };

    let email = '';
    
    $: emptyEmailName = email.replace('@gmail.com', '') === '';
    $: invalid = triggeredValidation && (!email.includes('@gmail.com') || emptyEmailName);
    $: emptyEmail = email === '';
    $: invalidMsg = 
        emptyEmail? 'Please enter an email'
        : emptyEmailName? 'No email name'
        : 'Invalid email address!'

    $: success = triggeredValidation && !invalid;

    const onSumbit = () => {
        triggeredValidation = true;

        if (!invalid){
            $tabStore.tab = 'main';
        }
    }
</script>

<form on:submit|preventDefault|stopPropagation ={onSumbit}>
    {#if !loginStarted}
        <p>Set up and find out who</p>
        <p>sold your e-mail addres</p>
        <br />
        <button on:click={click}>Get started</button>
        <br />
    {:else}
        <p>Enter your gmail address</p>
        <p>We only need it once!</p>
        <br/>
        <input
            bind:value={email}
            type="text"
            placeholder="e-mail address"
            class:invalid={invalid}
            class:success={success}/>
        <p id="invalid-msg" class:validationFailed={invalid}>{invalidMsg}</p>
        <br/>
        <div class="last-align">
            <button type="submit">
                <SvgRightArrow/>
            </button>
        </div>
    {/if}
</form>

<style>
    form {
        width: 11rem;
        height: 7.5rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: var(--secondary-color);
        border-radius: 1rem;
        padding: 2rem;
    }
    input {
        width: 100%;
    }
    #invalid-msg {
        font-size: .8rem;
        color: var(--error-color-700);
        opacity: 0;
    }
    #invalid-msg.validationFailed {
        opacity: 1;
    }
    .last-align {
        width: 184px;
        height: fit-content;
        display: flex;
        flex-direction: row-reverse;
    }
    .last-align button {
        height: 30px;
        aspect-ratio: 1;
        padding: 0;
    }
</style>
