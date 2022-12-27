<script lang="ts">
</script>

<div>
	<h1 class="text-4xl">Login</h1>
	<form action="?/login" method="POST" class="auth-form">
		<label for=""> Email </label>
		<input type="text" name="email" class="border" />
		<label for=""> Password </label>
		<input type="password" name="password" class="border" />
		<button type="submit" class="bg-primary-200">Login</button>
	</form>

	<p>Don't have an account?</p>
	<a href="/register">Register</a>
</div>
