<script>
	import Magnifier from '$lib/Magnifier.svelte';

	import notes from '$lib/notes.jpeg?enhanced';
	import NoteMagnify from '$lib/svg/NoteMagnify.svelte';

</script>
<span class="relative lg:mt-[calc(50vh-19rem)]">
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
    <NoteMagnify class="absolute left-[70%] top-8" />
</span>
