<script lang="ts">
	import '../app.css';
	import '$lib/7.css';

	import Header from './Header.svelte';
	
	import Item1 from './1.svelte';
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="" content="" />
</svelte:head>

<main class="w-full h-screen flex flex-col lg:flex-row max-lg:overflow-scroll">
	<section class="z-10 max-lg:h-[50rem] lg:w-[32rem] flex items-center justify-center relative">
		<Header />
	</section>
	<section class="flex-1 z-10 flex flex-col items-center px-2 pb-[50vh] lg:overflow-scroll">
		<Item1 />
	</section>
</main>

<style lang="postcss">
	:global(#item) {
		@apply max-w-xl bg-white/70 border-white;
		backdrop-filter: blur(2px);
	}

	:global(.prose-sm h4) {
		font-weight: bold;
		margin-bottom: 0.5rem;
	}
</style>
