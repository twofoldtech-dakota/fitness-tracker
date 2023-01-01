<script lang="ts">
	import { page } from '$app/stores';
	import type { NavItem } from '$lib/types';

	const navItems: Array<NavItem> = [
		{ text: 'training', url: '/training' },
		{ text: 'nutrition', url: '/nutrition' },
		{ text: 'settings', url: '/settings' }
	];
	$: currentRoute = '/' + $page.url.pathname.split('/')[1];
</script>

<nav class="btm-nav bg-base-300 z-10">
	{#each navItems as navItem}
		<a
			class="text-accent hover:border-t-2 {currentRoute == navItem.url ? 'active' : ''}"
			href={navItem.url}>{navItem.text}</a
		>
	{/each}
</nav>
