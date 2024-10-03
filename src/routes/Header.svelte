<script lang="ts">
	import folio_h from '$lib/folio-h.png';
	import Window from './Window.svelte';

	import biohazard from '$lib/post-its/biohazard.png';
	import dish from '$lib/post-its/dish.png';
	import greek from '$lib/post-its/greek.png';
	import rocket from '$lib/post-its/rocket.png';
</script>

{#snippet post_it(url: string, classes: string, id: string)}
	<span class="fixed">
		<div class="window absolute {classes}" id="post-it">
			<div class="w-[13rem] h-[13rem]">
				<img class="w-full h-full" src={url} alt="post-it" {id} />
			</div>
		</div>
	</span>
{/snippet}

<div>
	{@render post_it(rocket, 'bottom-[15rem] left-[6rem]', 'rocket')}
	<img
		src={folio_h}
		class="max-w-[32rem] drop-shadow-lg"
		alt="Header"
		width={956}
		height={454}
	/>
	{@render post_it(biohazard, 'bottom-[27rem] left-[17rem]', 'biohazard')}
	<span class="fixed">
		<Window class="absolute w-[19rem] bottom-[20.5rem] left-[1rem]" title="Intro1">
			<h5 class="mb-2">Welcome!</h5>
			<p class="my-2">
				Hey, thanks for checking me out! My name is Brandon Li, and I like making things.
			</p>
			<!-- <div role="progressbar" class="animate">
				<div style="width: 20%"></div>
			</div> -->
			<div class="divider"></div>
			<div class="flex flex-row-reverse gap-2">
				<button>Cancel</button>
				<button>Okay</button>
			</div>
		</Window>
	</span>
	{@render post_it(dish, 'bottom-[3rem] left-[4rem]', 'dish')}
	{@render post_it(greek, 'bottom-[1rem] left-[15rem]', 'greek')}
</div>

<style lang="postcss">
	#post-it {
		@apply border-2;
		background: linear-gradient(0deg, hsl(var(--hue) 60% 90%), hsl(var(--hue) 60% 85%));
		border-color: hsl(var(--hue), 30%, 60%);
		animation-name: float;
		animation-duration: 12s;
		animation-timing-function: ease-in-out;
		animation-iteration-count: infinite;
		animation-delay: var(--d);
		animation-direction: var(--dir);
		transform: translate3d(0);
	}

	#post-it::before {
		background: none;
	}

	span.fixed :has(#rocket) {
		--hue: 70;
		--d: -5s;
	}

	span.fixed :has(#biohazard) {
		--hue: 300;
		--d: -10s;
	}

	span.fixed :has(#dish) {
		--hue: 50;
		--d: -6s;
	}

	span.fixed :has(#greek) {
		--hue: 200;
		--d: -11s;
	}

	@keyframes float {
		0% {
			transform: translate3d(0px, -0.3rem, 0px);
		}
		50% {
			transform: translate3d(0px, 0.3rem, 0px);
		}
		100% {
			transform: translate3d(0px, -0.3rem, 0px);
		}
	}
</style>
