<script lang="ts">
</script>

<main>
	<h1>Register</h1>
	<form action="?/register" method="POST" class="auth-form">
		<label for=""> Email </label>
		<input type="text" name="email" />
		<label for=""> Password </label>
		<input type="password" name="password" />
		<button type="submit" class="btn btn-primary">Register</button>
	</form>

	<p>Already have an account?</p>
	<a href="/">Login</a>
</main>
