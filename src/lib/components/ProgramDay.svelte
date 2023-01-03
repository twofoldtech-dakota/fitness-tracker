<script lang="ts">
	import type { Day } from '$lib/types';
	import LiftForm from './LiftForm.svelte';

	export let day: Day;
	let isDayActive = false;
	const updateDayStatus = async (day: Day) => {
		if (day.active == null) day.active = false;
		else if (day.active == false) day.active = true;
		else day.active = false;

		isDayActive = day.active;
	};
</script>

<div class="w-full my-3">
	<div class="collapse">
		<input
			class="custom"
			type="checkbox"
			checked={day.active}
			on:change={() => updateDayStatus(day)}
		/>
		<div class="collapse-title text-xl font-medium">
			{day.name}
			<iconify-icon
				icon="lucide:{day.active == true ? 'check-square' : 'circle-slashed'}"
				width="24"
			/>
			<input
				class="checkbox"
				type="checkbox"
				checked={day.active}
				on:change={() => updateDayStatus(day)}
			/>
		</div>
		<div class="collapse-content">
			<p>hello</p>
		</div>
	</div>

	<!-- <form method="POST" class="text-right">
		<div class="flex items-center justify-between py-3 px-7 rounded-t-2xl bg-base-200">
			<div class="form-control">
				{day.name}
			</div>
			<div class="form-control">
				<label class="flex-1 label cursor-pointer gap-1 justify-start">
					<input
						name="monday"
						type="checkbox"
						checked={day.active}
						on:change={() => updateDayStatus(day)}
						class="checkbox"
					/>
				</label>
			</div>
		</div>
		{#if isDayActive}
			<div class="bg-base-300 rounded-b-xl p-3 text-center italic">
				<LiftForm {day} />
			</div>
		{:else}
			<div class="bg-base-300 rounded-b-xl p-3 text-center italic">Rest Day</div>
		{/if}
	</form> -->
</div>
