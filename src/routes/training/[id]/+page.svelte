<script lang="ts">
	import { updateProgram, deleteProgram } from '../../../stores/programStore';
	import type { Program } from '$lib/types';
	import Overlay from '$lib/components/Overlay.svelte';
	import { isOverlayOpen } from '../../../stores/overlayStore';

	export let data;
	let program: Program = data.program;
	let loading = false;

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
			isOverlayOpen.set(false);
		}
	};

	const updateCompletedStatus = async (program: Program) => {
		if (program.completed == null) program.completed = false;
		else if (program.completed == false) program.completed = true;
		else program.completed = false;
	};

	const updateActiveStatus = async (program: Program) => {
		if (program.active == null) program.active = false;
		else if (program.active == false) program.active = true;
		else program.active = false;
	};
</script>

{#if $isOverlayOpen}
	<Overlay title="Delete this program forever?">
		<form method="POST" on:submit|preventDefault={handleDelete} class="flex flex-col">
			<div class="text-2xl font-bold text-primary-content mb-8">
				Are you sure you want to delete this program forever? You will not be able to retieve this
				program in the future.
			</div>
			<button type="submit" class="btn btn-error"> Yes, delete forever. </button>
		</form>
	</Overlay>
{/if}
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
					bind:value={program.name}
				/>
			</label>
		</div>
		<div class="form-control">
			<label class="label cursor-pointer">
				<span class="label-text">Completed?</span>
				<input
					name="completed"
					type="checkbox"
					checked={program.completed}
					on:change={() => updateCompletedStatus(program)}
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
					checked={program.active}
					on:change={() => updateActiveStatus(program)}
					class="checkbox checkbox-accent"
				/>
			</label>
		</div>

		<div class="flex justify-between items-center border-t border-accent pt-7 mt-7">
			<div
				class="tooltip tooltip-right"
				data-tip={program.active
					? 'Not allowed to delete active programs'
					: 'Delete this program forever?'}
			>
				<button
					on:click|preventDefault={() => isOverlayOpen.set(true)}
					class="btn btn-error btn-outline {program.active ? 'btn-disabled' : ''}"
					><i class="mi mi-delete" /> delete</button
				>
			</div>
			<div>
				<button type="submit" class="btn btn-primary">
					{#if loading}Loading...
					{:else}<i class="mi mi-check" /> Save
					{/if}
				</button>

				<a href="/settings/programs" class="btn btn-outline btn-accent">Cancel</a>
			</div>
		</div>
	</form>
</div>
