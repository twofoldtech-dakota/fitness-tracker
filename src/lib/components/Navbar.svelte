<script lang="ts">
	import { page } from '$app/stores';
	import type { NavItem } from '$lib/types';

	const navItems: Array<NavItem> = [
		{ text: 'training', url: '/training', icon: 'dumbbell' },
		{ text: 'nutrition', url: '/nutrition', icon: 'apple' },
		{ text: 'settings', url: '/settings', icon: 'settings' }
	];
	$: currentRoute = '/' + $page.url.pathname.split('/')[1];
</script>

<nav class="btm-nav bg-base-300 z-10 mb-max:h-20">
	{#each navItems as navItem}
		<a
			class="flex flex-1 sm:flex-row justify-center items-center hover:text-accent border-t-2 {currentRoute ==
			navItem.url
				? 'active text-accent'
				: 'border-base-200 hover:underline'}"
			href={navItem.url}
		>
			<iconify-icon icon="lucide:{navItem.icon}" width="24" />
			<span>{navItem.text}</span>
		</a>
	{/each}
</nav>
