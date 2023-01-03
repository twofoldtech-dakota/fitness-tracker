<script lang="ts">
	import Navbar from '../lib/components/Navbar.svelte';
	import { invalidateAll } from '$app/navigation';
	import { supabaseClient } from '$lib/supabase';
	import { onMount } from 'svelte';
	import '../app.css';
	import type { PageData } from './$types';
	import Auth from '$lib/components/Auth.svelte';
	import { enhance, type SubmitFunction } from '$app/forms';
	import { page } from '$app/stores';

	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange(() => {
			console.log('Auth state change detected');
			invalidateAll();
		});
		return () => {
			subscription.unsubscribe();
		};
	});

	const submitLogout: SubmitFunction = async ({ cancel }) => {
		const { error } = await supabaseClient.auth.signOut();
		if (error) {
			console.log(error);
		}
		cancel();
	};

	export let data: PageData;
	const submitUpdateTheme: SubmitFunction = ({ action }) => {
		const theme = action.searchParams.get('theme');
		if (theme) {
			document.documentElement.setAttribute('data-theme', theme);
		}
	};
	const themes = [
		'light',
		'dark',
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'synthwave',
		'retro',
		'cyberpunk',
		'valentine',
		'halloween',
		'garden',
		'forest',
		'aqua',
		'lofi',
		'pastel',
		'fantasy',
		'wireframe',
		'black',
		'luxury',
		'dracula',
		'cmyk',
		'autumn',
		'business',
		'acid',
		'lemonade',
		'night',
		'coffee',
		'winter'
	];
</script>

<svelte:head>
	<!-- <link rel="stylesheet" href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css" />
	 -->
	<script src="https://code.iconify.design/iconify-icon/1.0.2/iconify-icon.min.js"></script>
</svelte:head>

<div class="grid w-full h-screen justify-items-center content-start">
	{#if data.session}
		<Navbar />
		<div class="w-full pb-14">
			<div class="flex p-6 bg-base-300 justify-between items-center">
				<div class="flex-1">
					<a href="/" class="text-4xl text-primary">Logo</a>
				</div>

				<div class="flex-1 text-accent flex items-center justify-end">
					<ul class="menu menu-horizontal px-1 z-50">
						<li>
							<button>
								<iconify-icon icon="lucide:paint-bucket" width="24" />
							</button>
							<ul class="p-2 bg-base-100 w-[150px] max-h-96 overflow-y-scroll">
								<form method="POST" use:enhance={submitUpdateTheme}>
									{#each themes as theme}
										<li>
											<button formaction="/?/setTheme&theme={theme}&redirectTo={$page.url.pathname}"
												>{theme}</button
											>
										</li>
									{/each}
								</form>
							</ul>
						</li>
					</ul>

					<form method="POST" use:enhance={submitLogout} class="text-right">
						<button type="submit" class="btn hover:text-accent items-center hover:underline">
							<iconify-icon icon="lucide:log-out" width="24" />
							<span class="pl-1">logout</span>
						</button>
					</form>
				</div>
			</div>
			<section class="p-9 prose w-full">
				<slot />
			</section>
		</div>
	{:else}
		<Auth />
	{/if}
</div>

<style>
	.prose {
		max-width: 100% !important;
	}
</style>
