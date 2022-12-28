<script lang="ts">
	import Programs from '$lib/components/Programs.svelte';
</script>

<h1 class="text-4xl">Settings</h1>

<div class="border p-4 m-4 bg-dark-100">
	<div class="flex justify-between items-center">
		<h3 class="text-2xl">Programs</h3>
		<a href="/training/new" class="px-2 py-1 rounded-xl flex bg-dark-300 text-primary-100">
			<i class="mi mi-add text-2xl flex" />
		</a>
	</div>

	<div class="mb-4">
		Active program: <span class="absolute pl-3 pt-0.5"
			><i class="mi mi-ban text-red-400 pt-1">none</i></span
		>
	</div>

	<Programs />
</div>

<div class="border p-4 m-4 bg-dark-200">
	<h3 class="text-2xl">Nutrition</h3>
	<a href="#">Feature coming soon...</a>
</div>
