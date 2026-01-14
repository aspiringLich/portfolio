<!-- Modified from https://github.com/ambarvm/svelte-magnifier/blob/main/src/lib/Magnifier.svelte -->
<script lang="ts">
	let img: HTMLImageElement,
		imgBounds: DOMRect,
		showZoom = false,
		mgOffsetX = 0,
		mgOffsetY = 0,
		relX = 0,
		relY = 0,
		currentClientX = 0,
		currentClientY = 0,
		isTouch = false;
	export let src: string,
		alt: string,
		width: number,
		height: number,
		className = '',
		zoomImgSrc = '',
		zoomFactor = 1.5,
		mgWidth = 250,
		mgHeight = 250,
		mgBorderWidth = 2,
		mgShape: 'circle' | 'square' = 'circle',
		mgShowOverflow = true,
		mgMouseOffsetX = 0,
		mgMouseOffsetY = 0,
		mgTouchOffsetX = -50,
		mgTouchOffsetY = -50,
		disabled = false;

	const updatePosition = () => {
		if (img && imgBounds && showZoom) {
			const target = img;
			relX = (currentClientX - imgBounds.left) / target.clientWidth;
			relY = (currentClientY - imgBounds.top) / target.clientHeight;

			if (isTouch) {
				// Check if touch is still inside image
				if (relX < 0 || relY < 0 || relX > 1 || relY > 1) {
					showZoom = false;
				}
			}
		}
	};

	const calcImgBounds = () => {
		if (img) {
			imgBounds = img.getBoundingClientRect();
			updatePosition();
		}
	};

	const checkMouseOver = () => {
		if (img && imgBounds && currentClientX !== 0 && currentClientY !== 0) {
			const rect = img.getBoundingClientRect();
			const isOver =
				currentClientX >= rect.left &&
				currentClientX <= rect.right &&
				currentClientY >= rect.top &&
				currentClientY <= rect.bottom;

			if (isOver && !showZoom) {
				showZoom = true;
				mgOffsetX = mgMouseOffsetX;
				mgOffsetY = mgMouseOffsetY;
				isTouch = false;
			}
		}
	};

	const trackScrollAndResize = (node: HTMLElement) => {
		const onScroll = () => {
			calcImgBounds();
			checkMouseOver();
		};
		const onResize = () => {
			calcImgBounds();
			checkMouseOver();
		};
		const onMouseMoveGlobal = (e: MouseEvent) => {
			currentClientX = e.clientX;
			currentClientY = e.clientY;
		};

		window.addEventListener('scroll', onScroll, true);
		window.addEventListener('resize', onResize);
		window.addEventListener('mousemove', onMouseMoveGlobal);

		return {
			destroy() {
				window.removeEventListener('scroll', onScroll, true);
				window.removeEventListener('resize', onResize);
				window.removeEventListener('mousemove', onMouseMoveGlobal);
			}
		};
	};

	const onMouseMove = (e: MouseEvent) => {
		if (imgBounds) {
			currentClientX = e.clientX;
			currentClientY = e.clientY;
			isTouch = false;
			mgOffsetX = mgMouseOffsetX;
			mgOffsetY = mgMouseOffsetY;
			showZoom = true;
			updatePosition();
		}
	};

	const onTouchMove = (e: TouchEvent) => {
		if (imgBounds) {
			currentClientX = e.targetTouches[0].clientX;
			currentClientY = e.targetTouches[0].clientY;
			isTouch = true;
			mgOffsetX = mgTouchOffsetX;
			mgOffsetY = mgTouchOffsetY;

			const target = e.target as HTMLElement;
			const _relX = (currentClientX - imgBounds.left) / target.clientWidth;
			const _relY = (currentClientY - imgBounds.top) / target.clientHeight;

			// Only show magnifying glass if touch is inside image
			if (_relX >= 0 && _relY >= 0 && _relX <= 1 && _relY <= 1) {
				showZoom = true;
				updatePosition();
			} else {
				showZoom = false;
			}
		}
	};
</script>

<div class="magnifier {className}" class:no-overflow={mgShowOverflow}>
	<img
		{src}
		{alt}
		{width}
		{height}
		class="magnifier-image"
		bind:this={img}
		use:trackScrollAndResize
		on:load={calcImgBounds}
		on:mouseenter={calcImgBounds}
		on:touchstart|preventDefault={calcImgBounds}
		on:mousemove={onMouseMove}
		on:touchmove={onTouchMove}
		on:mouseout={() => (showZoom = false)}
		on:touchend={() => (showZoom = false)}
		on:blur={() => {}}
		{...$$restProps}
	/>
	{#if imgBounds}
		<div
			class="magnifying-glass"
			class:visible={showZoom && !disabled}
			class:circle={mgShape === 'circle'}
			style="width: {mgWidth}px;
				height: {mgHeight}px;
				left: calc({relX * 100}% - {mgWidth / 2}px + {mgOffsetX}px - {mgBorderWidth}px);
				top: calc({relY * 100}% - {mgHeight / 2}px + {mgOffsetY}px - {mgBorderWidth}px);
				background-image: url('{zoomImgSrc || src}');
				background-position: calc({relX * 100}% + {mgWidth / 2}px - {relX * mgWidth}px) calc({relY *
				100}% + {mgHeight / 2}px - {relY * mgWidth}px);
				background-size: {zoomFactor * imgBounds.width}% {zoomFactor * imgBounds.height}%;
				borderWidth: {mgBorderWidth}px;"
		></div>
	{/if}
</div>

<style lang="postcss">
	.magnifier {
		position: relative;
		line-height: 0;
	}

	.magnifier-image {
		cursor: crosshair;
		height: 100%;
	}

	.magnifying-glass {
		position: absolute;
		z-index: 1;
		background: #e5e5e5 no-repeat;
		border: solid #ebebeb;
		box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
		opacity: 0;
		transition: opacity 0.3s;
		pointer-events: none;

		&.circle {
			border-radius: 50%;
		}

		&.visible {
			opacity: 1;
		}
	}

	.no-overflow {
		overflow: hidden;
	}
</style>
