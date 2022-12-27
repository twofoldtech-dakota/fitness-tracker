<script lang="ts">
	import { supabaseClient } from '$lib/supabase';
	import { updateProgram, deleteProgram } from '../../../stores/programStore';
	import { z } from 'zod';

	export let data;
	let { program } = data;
	let loading = false;
	const programSchema = z.object({
		name: z.string({ required_error: 'Name is required' }).min(1).max(64).trim()
	});

	const handleSubmit = async () => {
		try {
			loading = true;
			updateProgram(program.id, program.name, program.completed);
		} catch (err) {
			console.error(err);
		} finally {
			loading = false;
		}
	};

	const handleDelete = async () => {
		try {
			deleteProgram(program.id);
		} catch (err) {
			console.error(err);
		} finally {
		}
	};

	const updateCompletedStatus = async () => {
		if (program.completed == null) program.completed = false;
		else if (program.completed == false) program.completed = true;
		else program.completed = false;
	};
</script>

<h3 class="text-3xl my-5">Edit {program.name}</h3>
<form method="POST" on:submit|preventDefault={handleSubmit} class="flex flex-col">
	<div class="flex">
		<label for="name" class="flex-1">Name</label>
		<input name="name" type="text" class="flex-1 border border-black" bind:value={program.name} />
	</div>

	<!-- <div class="flex">
		<label for="start" class="flex-1">Start Date</label>
		<input name="start" type="date" class="flex-1 border border-black" bind:value={start} />
	</div> -->

	<div class="flex">
		<label for="completed" class="flex-1">Completed?</label>
		<input
			name="completed"
			type="checkbox"
			checked={program.completed}
			on:change={() => updateCompletedStatus(program.completed)}
			class="mr-2 form-checkbox h-5 w-5"
		/>
	</div>

	<div>
		<button type="submit" class="bg-primary-100 p-2 rounded-xl">
			{#if loading}Loading...
			{:else}Update
			{/if}
		</button>

		<a href="/training" class="border p-2 rounded-xl">Cancel</a>
	</div>
</form>
<button on:click={handleDelete} class="bg-red-400 border p-2 rounded-xl">Delete Program</button>
