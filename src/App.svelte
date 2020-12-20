<script>
import {fade} from "svelte/transition"
import Navbar from "./Components/Navbar.svelte";
import Navigation from "./Components/Navigation.svelte";
import { swipeControl } from "./Scripts/actions";
import { sectionState } from "./Scripts/enum";
import About from "./Sections/About.svelte";
import Commodities from "./Sections/Commodities.svelte";
import Contact from "./Sections/Contact.svelte";
import Home from "./Sections/Home.svelte";
import Services from "./Sections/Services.svelte";
import { sectionStore } from "./stores";

</script>

<main use:swipeControl={$sectionStore}>
	<div class="w-screen h-screen relative overflow-hidden">
		<div class="main-bg {$sectionStore === sectionState.HOME ? "active": ""}" style="background-image: url('/bg_1.jpg')"></div>
		<div class="main-bg bg-white {$sectionStore === sectionState.ABOUT ? "active": ""}"></div>
		<div class="main-bg {$sectionStore === sectionState.SERVICES ? "active": ""}" style="background-image: url('/bg_2.jpg')"></div>
		<div class="main-bg bg-secondary {$sectionStore === sectionState.CONTACT ? "active": ""}"></div>
		
		<Navbar></Navbar>
		<div class="content-height">
			{#if $sectionStore === sectionState.HOME}
			<section transition:fade={{duration: 150}}>
				<Home></Home>
			</section>
			{:else if $sectionStore === sectionState.ABOUT}
			<section transition:fade={{duration: 150}}>
				<About></About>
			</section>
			{:else if $sectionStore === sectionState.COMMODITIES}
			<section transition:fade={{duration: 150}}>
				<Commodities></Commodities>
			</section>
			{:else if $sectionStore === sectionState.SERVICES}
			<section transition:fade={{duration: 150}}>
				<Services></Services>
			</section>
			{:else if $sectionStore === sectionState.CONTACT}
			<section transition:fade={{duration: 150}}>
				<Contact></Contact>
			</section>
			{/if}
		</div>

		<Navigation></Navigation>
	</div>
</main>

<style>
	.content-height {
		@apply relative;
		height: calc(100% - 185px);
	}
	section {
		@apply absolute left-0 top-0 h-full w-full;
	}
	div.main-bg {
		@apply absolute w-full h-full left-0 top-0 bg-center bg-no-repeat bg-cover transition-all duration-150 ease-in-out opacity-0;
		z-index: -1;
	}
	div.main-bg.active {
		@apply opacity-100;
	}
</style>