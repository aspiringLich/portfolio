<script lang="ts">
	import animation from './animation.mp4';
	import easing from './easing.mp4';

	import chess from './chess.png?enhanced';
	import marble from './marble.png?enhanced';
	import ui from './ui.png?enhanced';
	import pr from './pr.png?enhanced';
</script>

<span class="flex flex-col max-w-xl w-full mt-16">
	<div class="pseudo-window mr-4 prose-sm z-20 mt-4 -rotate-1" id="post-it" style:--hue={170}>
		<h3>Projects</h3>
		<p>Here's a collection of some of the technical projects I've done over the years.</p>
	</div>
	<section class="relative h-[24rem]">
		<!-- svelte-ignore a11y_media_has_caption -->
		<video class="absolute -top-36 right-4 w-80 rotate-2" src={animation} autoplay muted loop></video>
		<!-- svelte-ignore a11y_media_has_caption -->
		<video class="absolute top-44" src={easing} autoplay muted loop></video>
		<div class="max-w-80 pseudo-window prose-sm mt-4 ml-4" id="item">
			<h4>
				<a href="https://github.com/aspiringLich/PaintingCanvas" target="_blank">PaintingCanvas</a>
			</h4>
			<p>
				This is a tool currently being used by all AP Computer Science A and Intro to Programming
				classes at my high school, which alllows you to draw and animate shapes with code.
			</p>
		</div>
	</section>

	<section class="relative h-[29rem] mt-12">
		<enhanced:img src={marble} class="absolute top-2 right-0 w-96 rotate-3" alt="marble" />
		<enhanced:img src={chess} class="absolute top-40 left-0 w-72 -rotate-1" alt="chess" />
	</section>

	<section class="relative h-[30rem]">
		<enhanced:img src={ui} class="absolute top-[9.5rem] left-0 w-[24rem] -rotate-2" alt="ui" />
		<enhanced:img src={pr} class="absolute top-[24rem]" alt="marble" />
		
		<div class="max-w-60 pseudo-window prose-sm absolute right-0" id="item">
			<h4>Open Source</h4>
			<p>
				I've made contributions to a variety of open source projects, but my most prolific
				contributions have been to
				<a href="https://spacestation14.com/" target="_blank">Space Station 14</a>, an open source
				video game.
			</p>
			<p>
				My biggest current standing PR&mdash; currently undergoing a second round of review&mdash;
				is a major refactor to the user interface backend specifically regarding the style sheet
				system. You can find the PR
				<a href="https://github.com/space-wizards/space-station-14/pull/29903" target="_blank">here</a>.
			</p>
		</div>
	</section>
</span>
