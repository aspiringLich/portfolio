<script lang="ts">
	import Window from './Window.svelte';

	import folio_h from '$lib/folio-h.png?enhanced';

	import biohazard from '$lib/post-its/biohazard.png?enhanced';
	import dish from '$lib/post-its/dish.png?enhanced';
	import greek from '$lib/post-its/greek.png?enhanced';
	import rocket from '$lib/post-its/rocket.png?enhanced';
</script>

{#snippet post_it(url: any, classes: string, id: string)}
	<span class="relative">
		<div class="pseudo-window absolute {classes}" id="post-it">
			<div class="w-[13rem] h-[13rem]">
				<enhanced:img class="w-full h-full" src={url} alt="post-it-{id}" {id} />
			</div>
		</div>
	</span>
{/snippet}

<div class="relative max-lg:top-[19em] max-lg:h-[44rem]">
	<enhanced:img src={folio_h} class="max-w-[32rem] drop-shadow-lg" alt="Header" />
	{@render post_it(biohazard, 'bottom-[14rem] left-[17rem]', 'biohazard')}
	{@render post_it(rocket, 'bottom-[16rem] left-[6rem]', 'rocket')}
	<span class="relative">
		<div class="absolute bottom-[11.5rem] left-[1rem]">
			<Window class="w-[19rem]" title="Intro1">
				<h5 class="mb-2">Welcome!</h5>
				<p class="my-2">
					Hey, thanks for checking me out! My name is Brandon Li, and I like making things.
				</p>
				<div class="divider"></div>
				<div class="flex flex-row-reverse gap-2">
					<button>Cancel</button>
					<button>OK</button>
				</div>
			</Window>
		</div>
	</span>
	{@render post_it(dish, 'top-[-3rem] left-[7rem]', 'dish')}
	{@render post_it(greek, 'top-[-1rem] left-[15rem]', 'greek')}
</div>

<style lang="postcss">
	#post-it {
		@apply border-2;
		background: linear-gradient(0deg, hsl(var(--hue) 60% 90%), hsl(var(--hue) 60% 85%));
		border-color: hsl(var(--hue), 30%, 60%);
		animation-name: float;
		animation-duration: var(--l);
		animation-timing-function: ease-in-out;
		animation-iteration-count: infinite;
		animation-delay: var(--d);
		animation-direction: var(--dir);
		transform: translate3d(0);
	}

	span.relative :has(#rocket) {
		--hue: 70;
		--d: -5s;
		--l: 11s;
	}

	span.relative :has(#biohazard) {
		--hue: 300;
		--d: -11s;
		--l: 12s;
	}

	span.relative :has(#dish) {
		--hue: 50;
		--d: 0s;
		--l: 12s;
	}

	span.relative :has(#greek) {
		--hue: 200;
		--d: -9s;
		--l: 17s;
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
