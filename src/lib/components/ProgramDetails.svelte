<script lang="ts">
	import type { Program } from '$lib/types';

	export let program: Program;
</script>

<div class="flex flex-col">
	<div>id: {program.id}</div>
	<div>name: {program.name}</div>
	<div>completed: {program.completed}</div>
	<div>start date: {program.start}</div>
	<div>active: {program.active}</div>
</div>
