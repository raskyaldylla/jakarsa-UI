<script>
  import {fade} from "svelte/transition"
import Icons from "../Components/Icons.svelte";


  enum subsection_state {
    ABOUT,
    VISION_MISSION,
    CORE_VALUES
  }

  let local_state:subsection_state = subsection_state.ABOUT
</script>

<div class="h-full w-full overflow-auto relative">
  {#if local_state === subsection_state.ABOUT}
  <article class="w-full h-full absolute left-0 top-0 p-8" transition:fade={{duration:350}}>
    <div class="flex flex-no-wrap flex-col md:flex-row w-full h-full items-center md:justify-center">
      <div class="w-full md:order-last">
        <figure class="p-8 w-full">
          <img class="object-contain mx-auto" src="./sample-team.jpg" alt="team">
        </figure>
      </div>
      <div class="w-full">
        <h1 class="text-secondary font-black font-title text-3xl leading-none">About Us</h1>
        <p class="my-2 text-justify">
          PT. Jakarsa Mandiri Internasional is one of the leading International Trading Company of Crude
          Palm Oil (CPO) and Palm Kernel (PK) products in Indonesia. Our company business focused on exporting high quality CPO and PK products.
        </p>
        <p class="my-2 text-justify">
          The palm oil plantation and industry have been become the Company’s main business in the recent years. The palm oil business segment has contributed the Company's revenue of more than 80% of the total revenue.
        </p>
        <p class="my-2 text-justify">
          We are able to meet the needs of consumers on the field of delivery of agricultural focus exports by upholding professionalism reliable, competitive and friendly service. Excellent service provided to customers is our commitment to satisfy customers with various services including the most superior is an export as well.        
        </p>
        <div>
          <button class="px-6 py-2 rounded-lg bg-primary-dark font-bold text-white mt-4 border-2 border-transparent hover:bg-transparent hover:text-primary-dark hover:border-primary-dark md:mb-4" on:click={() => {local_state = subsection_state.VISION_MISSION}}>Know Us More</button>
          <button class="px-6 py-2 rounded-lg bg-primary-dark font-bold text-white mt-4 border-2 border-transparent hover:bg-transparent hover:text-primary-dark hover:border-primary-dark md:mb-4" on:click={() => {local_state = subsection_state.CORE_VALUES}}>Our Core Values</button>
        </div>
      </div>
    </div>
  </article>
  {:else if local_state === subsection_state.VISION_MISSION}
  <article class="w-full h-full absolute left-0 top-0 p-8" transition:fade={{duration:350}}>
    <div class="flex flex-no-wrap flex-col md:flex-row w-full h-full items-center md:justify-center">
      <div class="w-full">
        <figure class="p-8 w-full">
          <img class="object-contain mx-auto" src="./sample-mission.jpg" alt="team">
        </figure>
      </div>
      <div class="w-full">
        <h1 class="text-secondary font-black font-title text-3xl leading-none">Vision &amp; Mission</h1>
        <div class="my-2 text-justify">
          <b>Vision:</b>
          <p>To be one of the world’s best companies in Asia- Pacific in general trades and continue our legacy as the most and honest ethical trade partner of choice.</p>
        </div>
        <div class="my-2 text-justify">
          <b>Mission:</b>
          <p>To operate the best general trades business. We establish long lasting relationships with the business partner by exceeding their expectations and gaining their trust through exceptional performance by every member of our team. Above all, we expect to surpass our clients expectations and add value to the communities we serve. 
          </p>
        </div>
        <div>
          <button class="px-6 py-2 rounded-lg bg-primary-dark font-bold text-white mt-4 border-2 border-transparent hover:bg-transparent hover:text-primary-dark hover:border-primary-dark md:mb-4" on:click={() => {local_state = subsection_state.ABOUT}}>About Us</button>
          <button class="px-6 py-2 rounded-lg bg-primary-dark font-bold text-white mt-4 border-2 border-transparent hover:bg-transparent hover:text-primary-dark hover:border-primary-dark md:mb-4" on:click={() => {local_state = subsection_state.CORE_VALUES}}>Our Core Values</button>
        </div>
      </div>
    </div>
  </article>
  {:else if local_state === subsection_state.CORE_VALUES}
  <article class="w-full h-full absolute left-0 top-0 p-8" transition:fade={{duration:350}}>
    <h1 class="text-secondary font-black font-title text-3xl leading-none">Our Core Values</h1>
    <div class="flex flex-no-wrap min-w-full md:w-full overflow-x-auto md:overflow-x-hidden py-12 no-scrollbar">
      <div class="w-64 md:w-1/5 md:flex-shrink-1 flex-shrink-0 mx-4 md:mx-0 px-0 md:px-4">
        <div class="w-32 p-8 rounded-full mx-auto bg-primary-light text-white mb-4"><Icons name="tie"></Icons></div>
        <h3 class="font-black text-xl leading-loose">Integrity</h3>
        <p>We venerate honesty and never compromise the truth. We will always do what is right and our business is based on trust. We adhere to the highest ethical standards and pledge to be transparent, just and consistent in word and deed.</p>
      </div>
      <div class="w-64 md:w-1/5 md:flex-shrink-1 flex-shrink-0 mx-4 md:mx-0 px-0 md:px-4">
        <div class="w-32 p-8 rounded-full mx-auto bg-primary-light text-white mb-4"><Icons name="network"></Icons></div>
        <h3 class="font-black text-xl leading-loose">Gratitude</h3>
        <p>We are truly thankful for the opportunities we have been given and believe this is the key to true greatness. Our positive minded team embraces gratitude as what gets poured into the glass to make it half full. Where there is gratitude, there is courtesy; there is concern for the happiness and well-being for others.</p>
      </div>
      <div class="w-64 md:w-1/5 md:flex-shrink-1 flex-shrink-0 mx-4 md:mx-0 px-0 md:px-4">
        <div class="w-32 p-8 rounded-full mx-auto bg-primary-light text-white mb-4"><Icons name="brain"></Icons></div>
        <h3 class="font-black text-xl leading-loose">Excellence</h3>
        <p>We strive to always improve. We live by the notion that if you're not getting better, you're falling behind. We teach and encourge our team to improve performance and efficiency in order to add value beyond what is expected. We always base team rewards on results and promotion on ability.</p>
      </div>
      <div class="w-64 md:w-1/5 md:flex-shrink-1 flex-shrink-0 mx-4 md:mx-0 px-0 md:px-4">
        <div class="w-32 p-8 rounded-full mx-auto bg-primary-light text-white mb-4"><Icons name="bulb"></Icons></div>
        <h3 class="font-black text-xl leading-loose">Passion</h3>
        <p>We show pride, enthusiasm and dedication in everything we do. We are commited to delivering superior value to our clients</p>
      </div>
      <div class="w-64 md:w-1/5 md:flex-shrink-1 flex-shrink-0 mx-4 md:mx-0 px-0 md:px-4">
        <div class="w-32 p-8 rounded-full mx-auto bg-primary-light text-white mb-4"><Icons name="team"></Icons></div>
        <h3 class="font-black text-xl leading-loose">Teamwork</h3>
        <p>Our primary asset is people. We are unified team working together to meet common goals. Our team is supportive each other's efforts, loyal to one another and cares for each other both personally and profesionally.</p>
      </div>
    </div>
    <div>
      <button class="px-6 py-2 rounded-lg bg-primary-dark font-bold text-white mt-4 border-2 border-transparent hover:bg-transparent hover:text-primary-dark hover:border-primary-dark md:mb-4" on:click={() => {local_state = subsection_state.ABOUT}}>About Us</button>
      <button class="px-6 py-2 rounded-lg bg-primary-dark font-bold text-white mt-4 border-2 border-transparent hover:bg-transparent hover:text-primary-dark hover:border-primary-dark md:mb-4" on:click={() => {local_state = subsection_state.VISION_MISSION}}>Our Vision &amp; Mission</button>
    </div>
  </article>
  {/if}
</div>

<style>
  .no-scrollbar::-webkit-scrollbar {
    @apply h-1;
  }
  .no-scrollbar::-webkit-scrollbar-track {
    @apply h-1 bg-transparent;
  }
  .no-scrollbar::-webkit-scrollbar-thumb {
    @apply h-1 bg-white rounded-full;
  }
</style>