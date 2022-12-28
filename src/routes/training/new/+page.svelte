<script lang="ts">
	import { supabaseClient } from '$lib/supabase';
	import { createProgram } from '../../../stores/programStore';
	import { z } from 'zod';
	import type { PageData } from './$types';

	export let data: PageData;

	let loading = false;
	let name = '';
	let active = false;
	const programSchema = z.object({
		name: z.string({ required_error: 'Name is required' }).min(1).max(64).trim()
	});

	const handleSubmit = async () => {
		try {
			loading = true;
			//const formDataIsValid = programSchema.parse({ name });
			createProgram(name, active, data?.session?.user.id);
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

	const updateActiveStatus = async () => {
		if (active == null) active = false;
		else if (active == false) active = true;
		else active = false;
		console.log('active', active);
	};
</script>

<div class="flex flex-col border border-white rounded-xl p-8 bg-dark-100">
	<a href="/settings" class="underline text-sm">
		<i class="mi mi-arrow-left">
			<span class="u-sr-only">back to Settings</span>
		</i>
	</a>
	<h3 class="text-3xl my-5">Create a new Program</h3>
	<form method="POST" on:submit|preventDefault={handleSubmit} class="flex flex-col">
		<label for="name" class="pb-1">Name</label>
		<input
			name="name"
			type="text"
			class="border leading-9 px-3 rounded-lg text-black mb-4"
			bind:value={name}
		/>

		<label for="active" class="flex-1">Active?</label>
		<input
			name="active"
			type="checkbox"
			checked={active}
			on:change={() => updateActiveStatus(active)}
			class="mr-2 form-checkbox h-5 w-5 mb-4"
		/>

		<div class="flex justify-between items-center">
			<button
				type="submit"
				class="border border-primary-100 pl-2 pr-3 py-1 rounded-lg text-md text-primary-100"
			>
				{#if loading}Loading...
				{:else}<i class="mi mi-add" /> Create
				{/if}
			</button>

			<a href="/settings" class="border p-2 rounded-lg">Cancel</a>
		</div>
	</form>
</div>
