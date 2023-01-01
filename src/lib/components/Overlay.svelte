<script lang="ts">
	import { isOverlayOpen } from '../../stores/overlayStore';

	export let title: string;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="w-screen h-screen fixed top-0 left-0 flex justify-center z-10 items-center bg-gray-100 opacity-80"
	on:click={() => isOverlayOpen.set(false)}
>
	<div class="bg-base-300 rounded-md relative max-w-lg opacity-95 p-4" on:click|stopPropagation>
		<div class="flex justify-between items-center border-b border-white pb-2 mb-4">
			<div>{title}</div>
			<button
				class="top-2 right-3 hover:-translate-y-1 transition-transform"
				on:click={() => isOverlayOpen.set(false)}
			>
				<i class="mi mi-close"><span class="u-sr-only">Close</span></i>
			</button>
		</div>
		<slot />
	</div>
</div>
