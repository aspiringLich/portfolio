<script>
	import Magnifier from './Magnifier.svelte';

	import notes from './notes.jpeg?enhanced';
	import NoteMagnify from './NoteMagnify.svelte';
</script>

<span class="relative lg:mt-[max(calc(50vh-19rem),2rem)]">
	<div
		class="pseudo-window w-80 relative left-4 prose-sm p-2 -rotate-3 z-50"
		id="post-it"
		style:--hue={40}
	>
		<h3>Notes</h3>
		<p>
			I'm very organized and detail-oriented. The best way I can prove this is with the notes I've
			taken:
		</p>
	</div>
	<div class="h-[32rem]">
		<div class="pseudo-window relative -top-2 max-w-xl" id="item">
			<Magnifier
				src={notes.sources.avif.split(' ')[0]}
				alt="notes"
				width={notes.img.w}
				height={notes.img.h}
			/>
		</div>
	</div>
	<NoteMagnify class="absolute left-[70%] top-16 " />
</span>
