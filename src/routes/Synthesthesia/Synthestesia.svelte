<script lang="ts">
    import screenshot from "./screenshot.png?enhanced";
</script>

<span class="relative lg:mt-[max(calc(50vh-19rem),2rem)]">
    <enhanced:img src={screenshot} class="w-96 m-auto rotate-3"></enhanced:img>
	<div
		class="pseudo-window !w-max max-w-80 !h-max max-h-80 absolute right-2 -mt-16 prose-sm p-2 rotate-3 z-50"
		id="post-it"
		style:--hue={20}
	>
		<h3><a href="https://github.com/aspiringLich/reactive-led-matrix">Synthesthesia</a></h3>
		<p>
			The aim of this project was to create a music visualization that captured the subjective
			experience of music. The technique used was
			<a href="https://archives.ismir.net/ismir2014/paper/000127.pdf" target="_blank">
				Harmonic Percussive Separation
			</a>, modified to run in real time. This took like, 5 months, and I think the results speak for
			themselves.
		</p>
	</div>
	<div class="mt-16 pseudo-window">
		<iframe
		    class="w-full aspect-video"
			src="https://www.youtube.com/embed/KmtkdJ5LhUE?si=iYkQuSzp1vPEyd9k"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	</div>
</span>
