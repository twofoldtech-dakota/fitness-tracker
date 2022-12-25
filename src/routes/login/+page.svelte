<script lang="ts">
import { applyAction, enhance, type SubmitFunction } from '$app/forms';

    let loading = false;
	const submitLogin: SubmitFunction = () => {
		loading = true;
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					//toast.success('A magic link has been sent to your email!');
					break;
				case 'error':
					break;
				default:
					await applyAction(result);
			}
			await update();
			loading = false;
		};
	};
</script>
<form
	method="POST"
	action="?/login"
	class="w-full max-w-lg mx-auto mt-12"
	use:enhance={submitLogin}
>
	<h1 class="text-3xl font-medium text-center dark:text-white">Login</h1>
	<p class="text-center dark:text-white">We will send you a magic link to login!</p>
	<div class="grid gap-6 mb-6 ">
		<div>
			<label for="email" class="mb-2">Email</label>
			<input type="text" id="email" name="email" required disabled={loading} />
		</div>
		<button type="submit" disabled={loading} color="purpleToBlue" class="w-full">
			{#if loading}
				<div class="mr-3" size="4" color="white" />Loading ...
			{:else}
				Submit
			{/if}
		</button>
	</div>
</form>