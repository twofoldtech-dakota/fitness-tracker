<script lang="ts">
	import FullProgram from '$lib/components/FullProgram.svelte';
	import type { Program } from '$lib/types';
	import { programs } from '../../stores/programStore';
</script>

{#each $programs as program}
	{#if program.active}
		<FullProgram {program} />
	{/if}
{/each}
{#if !$programs}
	<div>Please go to <a href="/settings" class="underline">settings</a> to activate a program.</div>
{/if}
