<script lang="ts">
	import Navbar from '../lib/components/Navbar.svelte';

	import { invalidateAll } from '$app/navigation';
	import { supabaseClient } from '$lib/supabase';
	import { onMount } from 'svelte';
	import '../app.css';

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
</script>

<div class="grid w-screen h-screen justify-items-center content-start">
	<Navbar />
	<div class="p-4">
		<a class="w-12 mx-auto" href="/"><img alt="logo" class="" /></a>
		<slot />
	</div>
</div>
