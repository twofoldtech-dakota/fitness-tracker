<!-- <script lang="ts">
    //import {user} from '../stores/authStore.js';
	import { createProgram } from '../stores/programStore.js';
    let program = <Program>{};
    
    const handleSubmit = () => {
        createProgram(program);
        program = <Program>{};
    }
</script>

<h3 class='text-3xl my-5'>Create a new Program</h3>
<form method="POST" class='flex flex-col' on:submit|preventDefault={handleSubmit}>
    <div class='flex'>
        <label for='title' class='flex-1'>Title</label>
        <input bind:value={program.title} name="title" type="text" class='flex-1 border border-black'>
    </div>
    
    <div class='flex'>
        <label for='startDate' class='flex-1'>Start Date</label>
        <input bind:value={program.startDate} name="startDate" type="date" class='flex-1 border border-black'>
    </div>
    
    <div class='flex'>
        <label for='endDate' class='flex-1'>End Date</label>
        <input bind:value={program.endDate} name="endDate" type="date" class='flex-1 border border-black'>
    </div>

    <button type='submit' class='bg-green-400 rounded-lg mt-5'>Create</button>
</form> -->