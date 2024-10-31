<script lang="ts">
	import '../app.css';

	import Header from './Header.svelte';

	import Notes from './Notes/Notes.svelte';
	import Art from './Art/Art.svelte';
	import Projects from './Projects/Projects.svelte';
	
	import '@fontsource/patrick-hand-sc';
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="" content="" />
</svelte:head>

<main class="w-full h-screen flex flex-col lg:flex-row max-lg:overflow-scroll">
	<section class="z-10 max-lg:h-[50rem] lg:w-[32rem] flex items-center justify-center relative">
		<Header />
	</section>
	<section
		class="flex-1 z-10 flex flex-col items-center px-2 pb-[50vh] lg:overflow-y-scroll overflow-x-visible"
		id="content"
	>
		<Notes />
		<Art />
		<Projects />
	</section>
</main>

<style lang="postcss">
	:global(#item) {
		@apply bg-white/70 border-white;
		backdrop-filter: blur(2px);
	}

	:global(.prose-sm) {
		@apply p-2;
	}

	:global(.prose-sm h3, h4) {
		font-weight: bold;
		margin-bottom: 0.5rem;
	}
	
	:global(.prose-sm a) {
		@apply underline text-cyan-600;
	}

	:global(#post-it) {
		@apply border-2 w-[11rem] h-[11rem] rounded-lg;
		background: linear-gradient(0deg, hsl(var(--hue) 60% 90%), hsl(var(--hue) 60% 85%));
		border-color: hsl(var(--hue), 30%, 60%);
	}
	
	:global(#post-it.prose-sm h3) {
		@apply font-extrabold text-2xl text-justify;
		font-family: 'Patrick Hand SC', cursive;
	}
</style>
