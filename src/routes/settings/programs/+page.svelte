<script lang="ts">
	import ProgramDetails from '$lib/components/ProgramDetails.svelte';
	import { programs } from '../../../stores/programStore';
</script>

<div class="flex justify-between items-center pb-4 border-b border-accent mb-7">
	<div class="text-3xl">Programs</div>
	<a href="/training/new" class="btn btn-accent btn-sm">
		<i class="mi mi-add text-xl flex" /> create
	</a>
</div>

{#each $programs as program}
	<div
		class="card w-full shadow-xl mb-7 border border-primary indicator {program.active
			? 'bg-base-300'
			: ''}"
	>
		{#if program.active}
			<span class="indicator-item badge badge-secondary">active</span>
		{:else}
			<span class="indicator-item badge badge-primary">inactive</span>
		{/if}
		<div class="card-body">
			<div class="card-title border-b pb-4 border-primary">{program.name}</div>
			<ProgramDetails {program} />
			<div class="card-actions justify-end">
				<a href="/training/{program.id}" class="btn btn-primary btn-sm">
					<i class="mi mi-edit-alt text-xl" /> edit
				</a>
			</div>
		</div>
	</div>
{/each}
