<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title,
		class: _class,
		children
	}: { title: string; class: string; children?: Snippet } = $props();
</script>

<div class="window active glass {_class}">
	<div class="title-bar select-none">
		<div class="title-bar-text">{title}</div>
		<div class="title-bar-controls">
			<button aria-label="Minimize"></button>
			<!-- <button aria-label="Maximize"></button>
			<button aria-label="Close"></button> -->
		</div>
	</div>
	<div class="window-body has-space">
		{@render children?.()}
	</div>
</div>
