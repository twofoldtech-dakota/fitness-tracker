<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main>
	<h1 class="text-4xl">Dashboard</h1>
	{#if data.session}
		<p>Welcome, {data.session.user.email}</p>
		<p>graph of weekly volume, intensity, weight, nutirition, water, etc..</p>
	{:else}
		<p>You must be logged in to view this</p>
	{/if}
</main>
