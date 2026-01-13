<script>
	import Magnifier from './Magnifier.svelte';

	import bio_notes from './bio-notes.jpeg?enhanced';
	import materials_notes from './materials-notes.avif?enhanced';
	import NoteMagnify from './NoteMagnify.svelte';
</script>

<span class="relative mt-8 w-[36rem] px-4">
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
	<div class="w-full flex flex-col">
		<div class="pseudo-window lg:max-w-lg max-w-md w-max self-start" id="item">
			<Magnifier
				src={bio_notes.sources.avif.split(' ')[0]}
				alt="notes"
				width={bio_notes.img.w}
				height={bio_notes.img.h}
			/>
		</div>
		<div class="pseudo-window lg:max-w-lg max-w-md w-max self-end -mt-2" id="item">
			<Magnifier
				src={materials_notes.sources.avif.split(' ')[0]}
				alt="notes"
				width={materials_notes.img.w}
				height={materials_notes.img.h}
			/>
		</div>
	</div>
	<NoteMagnify class="absolute left-[70%] top-16 " />
</span>
