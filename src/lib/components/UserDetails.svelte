<script lang="ts">
	import { programs } from '../../stores/programStore';
	import type { PageData } from '../../routes/settings/$types';

	export let data: PageData;
</script>

<div class="border p-4 m-4 bg-dark-100 rounded-xl">
	<h3 class="text-2xl">Account</h3>
	<p>{data?.session?.user.email}</p>
	<div class="mb-4">
		Active program:
		{#if $programs}
			{#each $programs as program}
				{#if program.active}
					<div class=" bg-dark-300 pl-2 pr-3 py-1 rounded-lg">
						<i class="mi mi-favorite text-yellow-400" />
						{program.name}
					</div>
				{/if}
			{/each}
		{:else}
			<span class="absolute pl-3 pt-0.5">
				<i class="mi mi-ban text-red-400 pt-1">none</i>
			</span>
		{/if}
	</div>
</div>
