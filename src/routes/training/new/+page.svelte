<script lang="ts">
	import type { Day } from '$lib/types';
	import { createProgram } from '../../../stores/programStore';
	import type { PageData } from './$types';
	export let data: PageData;

	let loading = false;
	let name = '';
	let active = false;
	let completed = false;
	let template = {
		name: ''
	};
	let duration = {
		monthCount: 0
	};
	let onChangeTemplateName: string;
	let onChangeDuration: number;
	let monday: Day = {
		active: false,
		lifts: [],
		name: 'monday'
	};
	let tuesday: Day = {
		active: false,
		lifts: [],
		name: 'tuesday'
	};
	let wednesday: Day = {
		active: false,
		lifts: [],
		name: 'wednesday'
	};
	let thursday: Day = {
		active: false,
		lifts: [],
		name: 'thursday'
	};
	let friday: Day = {
		active: false,
		lifts: [],
		name: 'friday'
	};
	let saturday: Day = {
		active: false,
		lifts: [],
		name: 'saturday'
	};
	let sunday: Day = {
		active: false,
		lifts: [],
		name: 'sunday'
	};

	const handleSubmit = async () => {
		try {
			loading = true;
			let week: Array<Day> = [];
			week.push(monday);
			week.push(tuesday);
			week.push(wednesday);
			week.push(thursday);
			week.push(friday);
			week.push(saturday);
			week.push(sunday);

			createProgram(name, active, week, data?.session?.user.id);
		} catch (err) {
			console.error(err);
		} finally {
			loading = false;
		}
	};

	const updateActiveStatus = async () => {
		if (active == null) active = false;
		else if (active == false) active = true;
		else active = false;
	};

	const updateDayStatus = async (day: Day) => {
		if (day.active == null) day.active = false;
		else if (day.active == false) day.active = true;
		else day.active = false;
	};
	const onTemplateSelectChange = () => {
		onChangeTemplateName = template.name;
	};
	const onDurationSelectChange = () => {
		onChangeDuration = duration.monthCount;
	};
</script>

<div class="block w-full max-w-md m-auto">
	<div class="flex flex-col">
		<a
			href="/settings/programs"
			class="link text-sm flex items-center gap-2 hover:text-accent w-40 text-accent"
		>
			<iconify-icon icon="lucide:arrow-left-circle" width="24" />
			<span>back to Settings</span>
		</a>
		<h1 class="my-8">Create a new program</h1>
		<form method="POST" on:submit|preventDefault={handleSubmit} class="flex flex-col">
			<div class="form-control">
				<label class="label justify-start">
					<span class="label-text w-[160px]">Program Name:</span>

					<input
						name="name"
						type="text"
						class="input input-bordered w-full max-w-xs"
						placeholder="Name"
						bind:value={name}
					/>
				</label>
			</div>
			<div class="form-control">
				<label class="label justify-start">
					<span class="label-text w-[160px]">Template:</span>
					<select
						bind:value={template.name}
						class="select select-bordered w-full max-w-xs"
						on:change|preventDefault={onTemplateSelectChange}
					>
						<option disabled selected>Select a template</option>
						<option value={'Legs/Push/Pull'}>Legs/Push/Pull</option>
						<option value={'Powerbuilding'}>Powerbuilding</option>
						<option value={'Bro Split'}>Bro Split</option>
						<option value={'Upper/Lower'}>Upper/Lower</option>
						<option value={'PHAT'}>PHAT</option>
					</select>
				</label>
			</div>
			<div class="form-control">
				<label class="label justify-start">
					<span class="label-text w-[160px]">Duration:</span>
					<select
						bind:value={duration.monthCount}
						class="select select-bordered w-full max-w-xs"
						on:change|preventDefault={onDurationSelectChange}
					>
						<option disabled selected>How many months will you run this program?</option>
						<option value={1}>1</option>
						<option value={2}>2</option>
						<option value={3}>3</option>
						<option value={4}>4</option>
						<option value={5}>5</option>
						<option value={6}>6</option>
					</select>
				</label>
			</div>
			<div class="form-control">
				<label class="label justify-start">
					<div
						class="tooltip tooltip-right w-[160px] text-left"
						data-tip="Pick the days you would like to train each week"
					>
						<span class="label-text">Training Days </span>
						<iconify-icon class="text-accent" icon="lucide:info" width="16" />
					</div>
					<div class="flex flex-wrap justify-start max-w-xs w-full">
						<label class="flex-1 label cursor-pointer gap-1 justify-start">
							<span class="label-text">Monday</span>
							<input
								name="monday"
								type="checkbox"
								checked={monday.active}
								on:change={() => updateDayStatus(monday)}
								class="checkbox"
							/>
						</label>
						<label class="flex-1 label cursor-pointer gap-1 justify-start">
							<span class="label-text">Tuesday</span>
							<input
								name="tuesday"
								type="checkbox"
								checked={tuesday.active}
								on:change={() => updateDayStatus(tuesday)}
								class="checkbox"
							/>
						</label>
						<label class="flex-1 label cursor-pointer gap-1 justify-start">
							<span class="label-text">Wednesday</span>
							<input
								name="wednesday"
								type="checkbox"
								checked={wednesday.active}
								on:change={() => updateDayStatus(wednesday)}
								class="checkbox"
							/>
						</label>
						<label class="flex-1 label cursor-pointer gap-1 justify-start">
							<span class="label-text">Thursday</span>
							<input
								name="thursday"
								type="checkbox"
								checked={thursday.active}
								on:change={() => updateDayStatus(thursday)}
								class="checkbox"
							/>
						</label>
						<label class="flex-1 label cursor-pointer gap-1 justify-start">
							<span class="label-text">Friday</span>
							<input
								name="friday"
								type="checkbox"
								checked={friday.active}
								on:change={() => updateDayStatus(friday)}
								class="checkbox"
							/>
						</label>
						<label class="flex-1 label cursor-pointer gap-1 justify-start">
							<span class="label-text">Saturday</span>
							<input
								name="saturday"
								type="checkbox"
								checked={saturday.active}
								on:change={() => updateDayStatus(saturday)}
								class="checkbox"
							/>
						</label>
						<label class="flex-1 label cursor-pointer gap-1 justify-start">
							<span class="label-text">Sunday</span>
							<input
								name="sunday"
								type="checkbox"
								checked={sunday.active}
								on:change={() => updateDayStatus(sunday)}
								class="checkbox"
							/>
						</label>
					</div>
				</label>
			</div>
			<div class="form-control">
				<label class="flex justify-start flex-1 label cursor-pointer items-center">
					<span class="label-text w-[160px]">Active?</span>
					<div class="flex items-center w-full max-w-xs">
						<input
							name="active"
							type="checkbox"
							checked={active}
							on:change={() => updateActiveStatus()}
							class="checkbox"
						/>
					</div>
				</label>
			</div>

			<div class="flex justify-between items-center border-t border-base-content pt-7 mt-7">
				<div />
				<div>
					<button type="submit" class="btn {loading == true ? 'loading' : 'btn-primary'}">
						{#if loading}Loading...
						{:else}
							<iconify-icon icon="lucide:check" width="24" />
							<span class="pl-1">save</span>
						{/if}
					</button>

					<a href="/settings/programs" class="btn btn-outline">
						<iconify-icon icon="lucide:x" width="24" />
						<span class="pl-1">cancel</span>
					</a>
				</div>
			</div>
		</form>
	</div>
</div>
