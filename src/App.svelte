<script>
import Navbar from "./Components/Navbar.svelte";
import { sectionState } from "./Scripts/enum";

let sw_prevY: number;
let section: sectionState = sectionState.HOME;
function swipeControl(e) {
	let changedTouch = 0;
	let eventType = e.type;
	const distance = 50;
	let direction: string;
	const sectionSize = Object.entries(sectionState).length/2;
	if(eventType === 'touchstart' || eventType === 'touchend') changedTouch = e.changedTouches[0].clientY
	else if(eventType === 'mousedown' || eventType === 'mouseup') changedTouch = e.clientY

	if(sw_prevY - distance > changedTouch) direction = "up";
	if(sw_prevY + distance < changedTouch) direction = "down";

	if(eventType === 'touchstart' || eventType === 'mousedown') sw_prevY = changedTouch
	if(eventType === 'touchend' || eventType === 'mouseup') {
		if(direction === "up" && section < sectionSize - 1) section++
		if(direction === "down" && section > 0) section--;
	}
}

$: {
	console.log({section})
}
</script>

<main>
	<div class="w-screen h-screen relative overflow-hidden">
		<div class="absolute w-full h-full left-0 top-0 bg-center bg-no-repeat bg-cover" style="background-image: url('/bg_1.jpg'); z-index: -1"></div>
		
		<Navbar></Navbar>
		<div class="content-height" on:mousedown={swipeControl} on:touchstart={swipeControl} on:mouseup={swipeControl} on:touchend={swipeControl}>
			<div class="p-8 h-full w-full md:w-3/4 mx-auto flex flex-no-wrap flex-col justify-center items-center text-left">
				<h2 class="text-3xl font-title font-black leading-tight">We are the new kids on the block. A <b class="text-primary-light">Disruptor</b>, a new challenger, your friendly partner.</h2>
				<p>Praesent commodo mi eu efficitur ultricies. Nam congue consectetur augue. Maecenas rhoncus scelerisque leo, vitae efficitur nunc iaculis non. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</div>
		</div>
	</div>
</main>

<style>
	.content-height {
		height: calc(100% - 90px);
	}
</style>