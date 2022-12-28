<script lang="ts">
	import { page } from '$app/stores';
	import { enhance, type SubmitFunction } from '$app/forms';
	import { supabaseClient } from '$lib/supabase';

	interface NavItem {
		url: String;
		text: String;
	}

	const navItems: Array<NavItem> = [
		{ text: 'training', url: 'training' },
		// { text: 'nutrition', url: 'nutrition' },
		{ text: 'settings', url: 'settings' }
	];
	$: currentRoute = $page.url.pathname;

	const submitLogout: SubmitFunction = async ({ cancel }) => {
		const { error } = await supabaseClient.auth.signOut();
		if (error) {
			console.log(error);
		}
		cancel();
	};
</script>

<nav class="w-full fixed left-0 bg-dark-100 text-white bottom-0">
	<div class="w-full flex justify-center border-black border-t text-center text-xl items-center">
		{#each navItems as navItem}
			<a
				class="p-3 flex-auto border-t-2 hover:border-black {currentRoute.includes(
					navItem.url.toString()
				)
					? 'border-black'
					: 'border-white '}"
				href="/{navItem.url}">{navItem.text}</a
			>
		{/each}
		<div class="p-3 flex-auto border-t-2 border-white hover:border-black">
			<form method="POST" use:enhance={submitLogout}>
				<button type="submit">logout</button>
			</form>
		</div>
	</div>
</nav>
