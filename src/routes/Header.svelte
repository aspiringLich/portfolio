<script lang="ts">
	import folio_h from '$lib/folio-h.png?enhanced';

	import biohazard from '$lib/post-its/biohazard.png?enhanced';
	import dish from '$lib/post-its/dish.png?enhanced';
	import dragon from '$lib/post-its/dragon.png?enhanced';
	import greek from '$lib/post-its/greek.png?enhanced';
	import langs from '$lib/post-its/langs.png?enhanced';
	import rocket from '$lib/post-its/rocket.png?enhanced';
</script>

{#snippet post_it(url: any, classes: string, id: string)}
	<span class="relative">
		<div class="pseudo-window rounded-lg absolute {classes} w-[11rem]" id="post-it">
			<enhanced:img src={url} alt="post-it-{id}" {id} />
		</div>
	</span>
{/snippet}

<div class="relative max-lg:top-[19em] max-lg:h-[44rem]">
	<enhanced:img src={folio_h} class="max-w-[32rem] drop-shadow-lg" alt="Header" />
	{@render post_it(biohazard, 'bottom-[14rem] left-[19rem]', 'biohazard')}
	{@render post_it(rocket, 'bottom-[18rem] left-[10rem]', 'rocket')}
	{@render post_it(dragon, 'bottom-[14rem] left-[2rem]', 'dragon')}
	{@render post_it(langs, 'top-[-1rem] left-[3rem]', 'langs')}
	{@render post_it(dish, 'top-[4rem] left-[12rem]', 'dish')}
	{@render post_it(greek, 'top-[-2rem] left-[19rem]', 'greek')}
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

	span.relative :has(#biohazard) {
		--hue: 300;
		--d: -11s;
		--l: 12s;
		--r: 3deg;
	}
	
	span.relative :has(#dish) {
		--hue: 25;
		--d: 0s;
		--l: 12s;
		--r: 4deg;
	}
	
	span.relative :has(#dragon) {
		--hue: 70;
		--d: -14s;
		--l: 11s;
		--r: -10deg;
	}

	span.relative :has(#greek) {
		--hue: 340;
		--d: -9s;
		--l: 13s;
		--r: -2deg;
	}
	
	span.relative :has(#langs) {
		--hue: 50;
		--d: -2s;
		--l: 12s;
		--r: 1deg;
	}
	
	span.relative :has(#rocket) {
		--hue: 180;
		--d: -5s;
		--l: 11s;
		--r: 0deg;
	}


	@keyframes float {
		0% {
			transform: translate3d(0px, -0.3rem, 0px) rotate(var(--r));
		}
		50% {
			transform: translate3d(0px, 0.3rem, 0px) rotate(var(--r));
		}
		100% {
			transform: translate3d(0px, -0.3rem, 0px) rotate(var(--r));
		}
	}
</style>
