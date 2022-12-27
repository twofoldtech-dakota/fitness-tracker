<script lang="ts">
	import { supabaseClient } from '$lib/supabase';
	import { createProgram } from '../../../stores/programStore';
	import { z } from 'zod';

	// export let data: PageData;

	let loading = false;
	let name = '';
	const programSchema = z.object({
		name: z.string({ required_error: 'Name is required' }).min(1).max(64).trim()
	});

	const handleSubmit = async () => {
		try {
			loading = true;
			//const formDataIsValid = programSchema.parse({ name });
			createProgram(name);
		} catch (err) {
			// const { fieldErrors: errors } = err.flatten();
			// return {
			// 	name,
			// 	errors
			// };
		} finally {
			loading = false;
		}
	};
</script>

<h3 class="text-3xl my-5">Create a new Program</h3>
<form method="POST" on:submit|preventDefault={handleSubmit} class="flex flex-col">
	<div class="flex">
		<label for="name" class="flex-1">Name</label>
		<input name="name" type="text" class="flex-1 border border-black" bind:value={name} />
	</div>

	<!-- <div class="flex">
		<label for="start" class="flex-1">Start Date</label>
		<input name="start" type="date" class="flex-1 border border-black" bind:value={start} />
	</div> -->

	<div>
		<button type="submit" class="bg-primary-100 p-2 rounded-xl">
			{#if loading}Loading...
			{:else}Create
			{/if}
		</button>

		<a href="/training" class="bg-red-400 p-2 rounded-xl">Cancel</a>
	</div>
</form>
