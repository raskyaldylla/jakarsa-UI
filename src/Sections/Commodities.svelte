<script context="module">
  declare const window: any;
</script>

<script>
import { onMount } from 'svelte';


  import {fade} from 'svelte/transition'

  onMount(() => {
		window.$('#vmap').vectorMap({
			map: 'indonesia_id',
			enableZoom: true,
			showTooltip: true,
			selectedColor: null,
			backgroundColor: "#ffffff",
			color: '#59B2F4',
			onRegionClick: function(event, code, region){
				event.preventDefault();
			}
		});
  })
</script>


<div class="h-full w-full overflow-auto relative">
  <article class="w-full h-full absolute left-0 top-0 p-8" transition:fade={{duration:350}}>
    <div id="vmap" class="w-full h-full"></div>
  </article>
</div>