<script lang="ts">
	import Programs from '$lib/components/Programs.svelte';
	import UserDetails from '$lib/components/UserDetails.svelte';
</script>

<h1 class="text-4xl">Settings</h1>
<div class="flex">
	<div class="w-2/3">
		<div class="border p-4 m-4 bg-dark-100 rounded-xl">
			<div class="flex justify-between items-center pb-4">
				<h3 class="text-2xl">Programs</h3>
				<a href="/training/new" class="px-2 py-1 rounded-xl flex bg-dark-300 text-primary-100">
					<i class="mi mi-add text-2xl flex" />
				</a>
			</div>

			<Programs />
		</div>

		<div class="border p-4 m-4 bg-dark-200 rounded-xl">
			<h3 class="text-2xl">Nutrition</h3>
			<a href="#">Feature coming soon...</a>
		</div>
	</div>
	<div class="w-1/3">
		<UserDetails />
	</div>
</div>
