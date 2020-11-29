<script>
  export let name: string;
</script>

{#if name === 'burger'}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z" fill="currentColor"/></svg>
{:else if name === 'close'}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="currentColor"/></svg>
{/if}