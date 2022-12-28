<script lang="ts">
	import Navbar from '../lib/components/Navbar.svelte';
	import { invalidateAll } from '$app/navigation';
	import { supabaseClient } from '$lib/supabase';
	import { onMount } from 'svelte';
	import '../app.css';
	import type { PageData } from './$types';
	import Auth from '$lib/components/Auth.svelte';
	import { isOverlayOpen } from '../stores/overlayStore';
	import Overlay from '$lib/components/Overlay.svelte';

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

	export let data: PageData;
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css" />
</svelte:head>

{#if $isOverlayOpen}
	<Overlay><p class="text-5xl">this is an overlay</p></Overlay>
{/if}
<button on:click={() => isOverlayOpen.set(true)} class="bg-red-500">test</button>

<div class="grid w-screen h-screen justify-items-center content-start bg-dark-200 text-white">
	{#if data.session}
		<Navbar />
		<div class="p-4 w-full">
			<a href="/">
				<img class="mx-auto" alt="logo" />
			</a>
			<slot />
		</div>
	{:else}
		<Auth />
	{/if}
</div>

<style>
	.mi {
		font-size: 1.4rem;
	}
	/* Use this to make sure screen readers read something sensible when encountering the mi. If you are using the icons decoratively, you can omit the <span> */
	.u-sr-only {
		position: absolute;
		left: -10000px;
		top: auto;
		width: 1px;
		height: 1px;
		overflow: hidden;
	}
</style>
