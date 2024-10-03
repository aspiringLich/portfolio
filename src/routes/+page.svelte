<script lang="ts">
	import '../app.css';
	import '$lib/7.css';

	import Header from './Header.svelte';
	import Magnifier from '$lib/Magnifier.svelte';

	import notes from '$lib/notes.jpeg?enhanced';

	console.log(notes);
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="" content="" />
</svelte:head>

<main class="w-full h-screen flex flex-col lg:flex-row">
	<section class="z-10 max-lg:h-[44rem] lg:w-[32rem] flex items-center justify-center relative">
		<Header />
	</section>
	<section class="flex-1 z-10 flex flex-col items-center px-2 pb-[50vh] lg:overflow-scroll">
		<span class="mt-[calc(50vh-19rem)]">
			<div class="pseudo-window w-80 relative left-4" id="item">
				<div class="prose-sm p-2">
					<h4>Notes</h4>
					<p>
						I am very organized and detail-oriented. The best way I can prove this is with the notes
						I've taken:
					</p>
				</div>
			</div>
			<div class="pseudo-window relative -top-2" id="item">
				<Magnifier src={notes.img.src} alt="notes" width={notes.img.w} height={notes.img.h} />
			</div>
		</span>
	</section>
</main>

<style lang="postcss">
	#item {
		@apply max-w-xl bg-white/70 border-white;
		backdrop-filter: blur(2px);
	}

	.prose-sm h4 {
		font-weight: bold;
		margin-bottom: 0.5rem;
	}
</style>
