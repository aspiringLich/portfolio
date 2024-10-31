<script>
	import Carousel from 'svelte-carousel';

	import sketch1 from './sketch1.png?enhanced';
	import sketch2 from './sketch2.jpg?enhanced'; // jpgs because i corrected the color on color.io
	import whiteboard1 from './whiteboard1.jpg?enhanced';
	import whiteboard2 from './whiteboard2.jpg?enhanced';
	import laser from './laser2.gif';
</script>

<span class="flex flex-col max-w-xl w-full">
	<div
		class="pseudo-window self-end mr-4 prose-sm z-20 mt-4 rotate-2"
		id="post-it"
		style:--hue={100}
	>
		<h3>Art</h3>
		<p>It's nothing incredibly expansive, but I enjoy making art in a variety of mediums.</p>
	</div>
	<section class="h-[18rem]">
		<enhanced:img
			src={sketch1}
			class="absolute w-64 bottom-[3rem] left-4 rotate-6"
			alt="sketchbook page 1"
		/>
		<enhanced:img
			src={sketch2}
			class="absolute w-64 -bottom-12 right-12 -rotate-2"
			alt="sketchbook page 2"
		/>
		<div class="absolute pseudo-window prose-sm w-96 left-0 bottom-0" id="item">
			<h4>Sketchbook</h4>
			<p>
				I only started sketching fairly recently, so my technique still needs improvement, but it's
				a decent showing of my artistic abilities.
			</p>
		</div>
	</section>
	<section>
		<img src={laser} class="h-[28rem] mt-4" alt="laser" />
		<div class="pseudo-window absolute right-0 top-20 w-96 prose-sm" id="item">
			<h4>Pixel Art</h4>
			<p>
				I did the art for one of my friend's games where you solve puzzles by directing lasers
				around.
			</p>
		</div>
	</section>
	<section class="h-[27rem]">
		<enhanced:img
			src={whiteboard2}
			class="absolute w-[24rem] -right-2 top-[9rem] -rotate-1"
			alt="whiteboard two"
		/>
		<enhanced:img
			src={whiteboard1}
			class="absolute w-[18rem] right-2 -top-52 rotate-3"
			alt="whiteboard one"
		/>
		<div class="max-w-80 pseudo-window prose-sm mt-4" id="item">
			<h4>Whiteboards</h4>
			<p>
				I've always liked drawing on public whiteboards. I think I just like leaving my mark on the
				surrounding space, at least for a little while.
			</p>
			<p>
				The lower image was drawn in the NYU makerspace while I was there for their summer program.
				Hopefully it's still up.
			</p>
		</div>
	</section>
</span>

<style lang="postcss">
	section {
		@apply max-w-xl relative;
	}

	:global(.sc-carousel__carousel-container) {
		@apply overflow-clip;
	}

	img {
		@apply drop-shadow-xl;
	}
</style>
