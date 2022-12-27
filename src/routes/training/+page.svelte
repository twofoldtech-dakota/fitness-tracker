<script lang="ts">
	import Program from '$lib/components/Program.svelte';
	import { programs } from '../../stores/programStore';

	let viewProgram = false;
	let visibleProgram = {
		id: Number,
		name: String,
		completed: Boolean,
		start: String
	};
	const handleViewProgram = (program: any) => {
		try {
			if (program.id != visibleProgram.id) viewProgram = true;
			else viewProgram = !viewProgram;

			visibleProgram.name = program.name;
			visibleProgram.completed = program.completed;
			visibleProgram.id = program.id;
			visibleProgram.start = program.start;
		} catch (err) {
		} finally {
		}
	};
</script>

<h1 class="text-4xl mb-4">Training</h1>
<p><a href="/training/new" class="bg-primary-100 p-2 rounded-xl">+ Create a new program</a></p>
<div class="mt-4">
	{#each $programs as program}
		<div class="p-3 border">
			<h3 class="text-2xl">{program.name}</h3>
			<a href="/training/{program.id}" class="bg-blue-400 p-3 rounded-xl block">edit</a>
			<button
				on:click={handleViewProgram(program)}
				class="block bg-primary-100 p-3 rounded-xl block">view</button
			>
		</div>
	{/each}

	{#if viewProgram}
		<div>{visibleProgram.id}</div>
		<div>{visibleProgram.name}</div>
		<div>{visibleProgram.completed}</div>
		<div>{visibleProgram.start}</div>
	{/if}
</div>
