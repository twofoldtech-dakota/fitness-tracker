<script lang="ts">
	import { supabaseClient } from '$lib/supabase';
	import { updateProgram, deleteProgram } from '../../../stores/programStore';
	import { z } from 'zod';
	import type { Program } from '$lib/types';

	export let data;
	let { program } = data;
	let loading = false;
	const programSchema = z.object({
		name: z.string({ required_error: 'Name is required' }).min(1).max(64).trim()
	});

	const handleSubmit = async () => {
		try {
			loading = true;
			updateProgram(program.id, program.name, program.active, program.completed);
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

	const updateActiveStatus = async () => {
		if (program.active == null) program.active = false;
		else if (program.active == false) program.active = true;
		else program.active = false;
	};
</script>

<div class="flex flex-col border border-white rounded-xl p-8 bg-dark-100">
	<a href="/settings" class="underline text-sm">
		<i class="mi mi-arrow-left">
			<span class="u-sr-only">back to Settings</span>
		</i>
	</a>

	<h3 class="text-3xl my-3">Edit Program</h3>
	<form method="POST" on:submit|preventDefault={handleSubmit} class="flex flex-col">
		<label for="name" class="pb-1">Name:</label>
		<input
			name="name"
			type="text"
			class="border leading-9 px-3 rounded-lg text-black mb-4"
			bind:value={program.name}
		/>

		<!-- <div class="flex">
			<label for="start" class="flex-1">Start Date</label>
			<input name="start" type="date" class="flex-1 border border-black" bind:value={start} />
		</div> -->

		<label for="completed" class="flex-1">Completed?</label>
		<input
			name="completed"
			type="checkbox"
			checked={program.completed}
			on:change={() => updateCompletedStatus(program.completed)}
			class="mr-2 form-checkbox h-5 w-5 mb-4"
		/>

		<label for="active" class="flex-1">Active?</label>
		<input
			name="active"
			type="checkbox"
			checked={program.active}
			on:change={() => updateActiveStatus(program.active)}
			class="mr-2 form-checkbox h-5 w-5 mb-4"
		/>

		<div class="flex justify-between items-center">
			<div>
				<button
					type="submit"
					class="border border-primary-100 pl-2 pr-3 py-1 rounded-lg text-md text-primary-100"
				>
					{#if loading}Loading...
					{:else}<i class="mi mi-check" /> Save
					{/if}
				</button>

				<a href="/settings" class="border p-2 rounded-lg">Cancel</a>
			</div>
			<div>
				<button on:click={handleDelete} class="text-red-400 pl-2 pr-3 py-1 text-2xl"
					><i class="mi mi-delete" /></button
				>
			</div>
		</div>
	</form>
</div>
