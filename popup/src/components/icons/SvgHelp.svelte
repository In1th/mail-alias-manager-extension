<script>
    export let width = 24;
    export let height = 24;
    export let color = "var(--primary-color-600)";
</script>

<svg
    width={`${width}`}
    height={`${height}`}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <circle cx="12" cy="12" r="9" stroke={color} stroke-width="2" />
    <circle cx="12" cy="18" r="0.5" fill={color} stroke={color} />
    <path
        d="M12 16V14.5811C12 13.6369 12.6042 12.7986 13.5 12.5V12.5C14.3958 12.2014 15 11.3631 15 10.4189V9.90569C15 8.30092 13.6991 7 12.0943 7H12C10.3431 7 9 8.34315 9 10V10"
        stroke={color}
        stroke-width="2"
    />
</svg>
