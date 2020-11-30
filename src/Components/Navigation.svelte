<script>
import { sectionStore } from "../stores"
import Icons from "./Icons.svelte";
import { sectionState } from "../Scripts/enum";
import { fade } from "svelte/transition"


const sectionLength = (Object.keys(sectionState).length / 2)

function controlClick(state) {
  if(state === "next")
    sectionStore.update((v) => v + 1)
  else if (state === "prev")
    sectionStore.update((v) => v - 1)
}
</script>

<div class="absolute bottom-0 left-0 w-full h-auto p-4">
  <div class="flex flex-wrap md:flex-no-wrap items-center justify-center">
    {#if $sectionStore < sectionLength-1}
    <div class="font-black text-xs flex cursor-pointer py-2 px-4 rounded-full bg-white mx-4 transition-all duration-150 ease-in-out my-1 md:my-0" transition:fade|local="{{ duration: 150 }}" on:click={() => controlClick('next')}>
      <p>Swipe up to <b class="capitalize">{sectionState[$sectionStore + 1].toLowerCase()} page</b></p>
      <div class="w-4"><Icons name="up"></Icons></div>
    </div>
    {/if}
    {#if $sectionStore > 0}
    <div class="font-black text-xs flex cursor-pointer py-2 px-4 rounded-full bg-white mx-4 transition-all duration-150 ease-in-out my-1 md:my-0" transition:fade|local="{{ duration: 150 }}" on:click={() => controlClick('prev')}>
      <p>Swipe down to <b class="capitalize">{sectionState[$sectionStore - 1].toLowerCase()} page</b></p>
      <div class="w-4"><Icons name="down"></Icons></div>
    </div>
    {/if} 
  </div>
</div>