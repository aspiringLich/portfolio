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
	<section class="flex-1 z-10">section 2</section>
</main>

<style>
</style>
