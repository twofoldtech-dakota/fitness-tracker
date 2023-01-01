<script lang="ts">
	import { createProgram } from '../../../stores/programStore';
	import type { PageData } from './$types';

	export let data: PageData;

	let loading = false;
	let name = '';
	let active = false;
	let completed = false;

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
	};

	const updateCompletedStatus = async () => {
		if (completed == null) completed = false;
		else if (completed == false) completed = true;
		else completed = false;
	};
</script>

<div class="flex flex-col p-8">
	<a href="/settings/programs" class="link text-sm">
		<i class="mi mi-arrow-left"> back to Settings</i>
	</a>
	<h1 class="my-8">Edit Program</h1>
	<form method="POST" on:submit|preventDefault={handleSubmit} class="flex flex-col">
		<div class="form-control">
			<label class="label">
				<span class="label-text">Program Name</span>
				<input
					name="name"
					type="text"
					class="input input-bordered input-accent w-full"
					bind:value={name}
				/>
			</label>
		</div>
		<div class="form-control">
			<label class="label cursor-pointer">
				<span class="label-text">Completed?</span>
				<input
					name="completed"
					type="checkbox"
					checked={completed}
					on:change={() => updateCompletedStatus()}
					class="checkbox checkbox-accent"
				/>
			</label>
		</div>
		<div class="form-control">
			<label class="label cursor-pointer">
				<span class="label-text">Active?</span>
				<input
					name="active"
					type="checkbox"
					checked={active}
					on:change={() => updateActiveStatus()}
					class="checkbox checkbox-accent"
				/>
			</label>
		</div>

		<div class="flex justify-between items-center border-t border-accent pt-7 mt-7">
			<div />
			<div>
				<button type="submit" class="btn btn-primary">
					{#if loading}Loading...
					{:else}<i class="mi mi-check" /> Create
					{/if}
				</button>

				<a href="/settings/programs" class="btn btn-outline btn-accent">Cancel</a>
			</div>
		</div>
	</form>
</div>
