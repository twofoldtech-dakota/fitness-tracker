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

{#if showLogin}
	<h1 class="text-4xl">Login</h1>
	<form on:submit|preventDefault={handleLogin}>
		<label for=""> Email </label>
		<input type="text" name="email" class="border" bind:value={email} />
		<label for=""> Password </label>
		<input type="password" name="password" class="border" bind:value={password} />
		<button type="submit" class="bg-primary-200" disabled={loading}>Login</button>
	</form>
	<p>Don't have an account?</p>
	<button on:click={handleAuthFormView} disabled={loading}>Register</button>
{:else}
	<h1>Register</h1>
	<form on:submit|preventDefault={handleLogin}>
		<label for=""> Email </label>
		<input type="text" name="email" class="border" bind:value={email} />
		<label for=""> Password </label>
		<input type="password" name="password" class="border" bind:value={password} />
		<button type="submit" class="bg-primary-200" disabled={loading}>Register</button>
	</form>
	<p>Already have an account?</p>
	<button on:click={handleAuthFormView} disabled={loading}>Login</button>
{/if}
