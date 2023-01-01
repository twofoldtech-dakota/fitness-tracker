<script lang="ts">
	import { page } from '$app/stores';
	import type { NavItem } from '$lib/types';
	import { action_destroyer } from 'svelte/internal';

	const navItems: Array<NavItem> = [
		{ text: 'User', url: '/settings' },
		{ text: 'Programs', url: '/settings/programs' },
		{ text: 'Nutrition', url: '/settings/nutrition' }
	];
	$: currentRoute = $page.url.pathname;
</script>

<h1 class="w-full">Settings</h1>
<div class="flex w-full mb:flex-col">
	<div class="sm:border-r-2 border-accent mb:w-full mb:block mb:border-b-2">
		<div class="flex flex-col">
			{#each navItems as navItem}
				<a
					class="link flex-1 rounded-lg p-4 hover:text-secondary hover:bg-base-300 {currentRoute ==
					navItem.url
						? 'text-accent bg-base-300'
						: ''}"
					href={navItem.url}
					>{navItem.text}
				</a>
			{/each}
		</div>
	</div>
	<div class="px-7 pb-7 mb:w-full mb:block mb:bg-base-200 pt-7">
		<slot />
	</div>
</div>
