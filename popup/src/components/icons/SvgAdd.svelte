<script>
    export let width = 24;
    export let height = 24;
    export let color = "var(--primary-color-600)";
</script>

<svg width={`${width}`} height={`${height}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6L12 18" stroke={color} stroke-width="2" stroke-linecap="round"/>
    <path d="M18 12L6 12" stroke={color} stroke-width="2" stroke-linecap="round"/>
</svg>