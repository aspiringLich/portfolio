<script>
	import Magnifier from './Magnifier.svelte';

	import notes from './notes.jpeg?enhanced';
	import NoteMagnify from './NoteMagnify.svelte';
</script>

<span class="relative lg:mt-[max(calc(50vh-19rem),2rem)]">
	<div class="pseudo-window w-80 relative left-4 prose-sm p-2" id="item">
		<h3>Notes</h3>
		<p>
			I am very organized and detail-oriented. The best way I can prove this is with the notes I've
			taken:
		</p>
	</div>
	<div class="pseudo-window relative -top-2" id="item">
		<Magnifier src={notes.img.src} alt="notes" width={notes.img.w} height={notes.img.h} />
	</div>
	<NoteMagnify class="absolute left-[70%] top-8" />
</span>
