<script lang="ts">
	import Navbar from '../lib/components/Navbar.svelte';
	import { invalidateAll } from '$app/navigation';
	import { supabaseClient } from '$lib/supabase';
	import { onMount } from 'svelte';
	import '../app.css';
	import type { PageData } from './$types';
	import Auth from '$lib/components/Auth.svelte';
	import { enhance, type SubmitFunction } from '$app/forms';

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
					<a href="/" class="text-4xl text-accent">Logo</a>
				</div>
				<div class="flex-1 text-accent">
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
