<script lang="ts">
	import Login from '$lib/components/auth/Login.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log('session', data.session);
</script>

<main>
	{#if data.session}
		<h1 class="text-4xl">Dashboard</h1>
		<p>Welcome, {data.session.user.email}</p>
	{:else}
		<Login />
	{/if}
</main>
