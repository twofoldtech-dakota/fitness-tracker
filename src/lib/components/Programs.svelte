<script lang="ts">
	import ProgramDetails from '$lib/components/ProgramDetails.svelte';
	import { programs } from '../../stores/programStore';
</script>

{#each $programs as program}
	<div class="p-3 border">
		<div class="flex justify-between items-center">
			<h3 class="text-2xl">{program.name}</h3>
			<div class="pt-1">
				<a href="/training/{program.id}" class="text-3xl">
					<i class="mi mi-edit-alt text-3xl text-blue-400" />
				</a>
				<!-- <a href="/training/{program.id}" class="text-3xl">
					<i class="mi mi-close text-3xl text-red-400" />
				</a> -->
			</div>
		</div>
		<div class="flex flex-col">
			<p>Completed: {program.completed}</p>
			<p>Started: {program.start}</p>
		</div>
	</div>
{/each}
