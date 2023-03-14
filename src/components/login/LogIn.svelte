<script>
    import SvgMail from "../icons/SvgMail.svelte";
    import LogInContent from "./LogInContent.svelte";
</script>

<section>
    <div id="login-bg"></div>
    <div id="login-gradient"></div>
    <div id="login-main">
        <SvgMail height={50} width={50}/>
        <h1>Mail Aliaser</h1>
        <b>Chrome Extension</b>
        <LogInContent/>
        <div class="last">2023 by Mateusz Kruk</div>
    </div>
</section>

<style>
    section{
        height: 100%;
        width: 100%;

        position: relative;
        z-index: 0;
    }
    #login-bg {
        position: absolute;

        height: 100%;
        width: 100%;

        background-color: var(--background-color);
        opacity: .7;
        background-image: linear-gradient(45deg, #c824f1 50%, #ffffff 50%);
        background-size: 7px 7px;
        background-position: 0 0, 7px 7px;
        z-index: 1;

        animation: slide-bg 5s ease 0 infinite;
    }
    #login-gradient {
        position: absolute;

        height: 100%;
        width: 100%;
        background: rgb(0,0,0);
        background: linear-gradient(180deg, rgba(0,0,0,0) 2%, rgba(255,255,255,0.40379901960784315) 15%, rgba(255,255,255,0.7315301120448179) 40%, var(--background-color) 95%);
        z-index: 2;
    }
    #login-main {
        position: absolute;

        height: calc(100% - 2rem);
        width: calc(100% - 2rem);
        z-index: 3;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: .75rem;
        padding: 1rem;
    }
    h1 {
        font-size: 2rem;
    }
    .last {
        margin-top: auto;
        width: 100%;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        gap: .5rem;
    }   
</style>