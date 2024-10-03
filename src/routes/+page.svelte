<script lang="ts">
	import '../app.css';
	import '$lib/7.css';

	import Header from './Header.svelte';
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="" content="" />
</svelte:head>

<main class="w-full h-screen flex flex-col lg:flex-row">
	<section class="z-10 max-lg:h-[44rem] lg:w-[32rem] flex items-center justify-center relative">
		<Header />
	</section>
	<section class="flex-1 z-10 flex flex-col justify-center items-center px-12 xl:px-24">
		<div id="item">
			<div></div>
		</div>
	</section>
</main>

<style lang="postcss">
	#item {
		@apply max-w-2xl w-full bg-stone-200/40 p-4 rounded-md;
		backdrop-filter: blur(5px);
	}
</style>
