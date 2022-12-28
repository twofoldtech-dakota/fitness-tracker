<script lang="ts">
	import { supabaseClient } from '$lib/supabase';

	let loading = false;
	let email = '';
	let password = '';
	let showLogin = true;
	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
			if (error) throw error;
		} catch (error) {
			alert(error);
		} finally {
			loading = false;
		}
	};
	const handleRegister = async () => {
		try {
			loading = true;
			const { error } = await supabaseClient.auth.signUp({ email, password });
			if (error) throw error;
		} catch (error) {
			alert(error);
		} finally {
			loading = false;
		}
	};

	const handleAuthFormView = async () => {
		showLogin = !showLogin;
	};
</script>

<div class="w-full text-center bg-dark-100 py-4 mb-8">
	<a href="/" class="text-4xl text-primary-100"> Swole Tracker </a>
</div>

<div class="border border-white rounded-xl p-6 w-1/2 bg-dark-100">
	{#if showLogin}
		<h1 class="text-4xl pb-4">Login</h1>
		<form on:submit|preventDefault={handleLogin} class="flex flex-col">
			<label for="email" class="pb-1"> Email </label>
			<input
				type="text"
				name="email"
				class="border leading-9 px-3 rounded-lg text-black"
				bind:value={email}
			/>
			<label for="password" class="pb-1 pt-3"> Password </label>
			<input
				type="password"
				name="password"
				class="border leading-9 px-3 rounded-lg text-black"
				bind:value={password}
			/>
			<button type="submit" class="bg-primary-200 rounded-lg leading-9 mt-4 mb-5" disabled={loading}
				>Login</button
			>
		</form>
		<p>Don't have an account?</p>
		<button class="underline" on:click={handleAuthFormView} disabled={loading}>Register</button>
	{:else}
		<h1 class="text-4xl pb-4">Register</h1>
		<form on:submit|preventDefault={handleRegister} class="flex flex-col">
			<label for="email" class="pb-1"> Email </label>
			<input
				type="text"
				name="email"
				class="border leading-9 px-3 rounded-lg text-black"
				bind:value={email}
			/>
			<label for="password" class="pb-1 pt-3"> Password </label>
			<input
				type="password"
				name="password"
				class="border leading-9 px-3 rounded-lg text-black"
				bind:value={password}
			/>
			<button type="submit" class="bg-primary-200 rounded-lg leading-9 mt-4 mb-5" disabled={loading}
				>Register</button
			>
		</form>
		<p>Already have an account?</p>
		<button class="underline" on:click={handleAuthFormView} disabled={loading}>Login</button>
	{/if}
</div>
