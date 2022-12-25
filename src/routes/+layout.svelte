<script lang='ts'>
	import Navbar from "../lib/components/Navbar.svelte";
    
    import "../app.css";
	import { onMount } from "svelte";
	import { supabaseClient } from "$lib/supabase";
	import { invalidateAll } from "$app/navigation";

    onMount(() => {
        const { data: { subscription } } = supabaseClient.auth.onAuthStateChange(() => {
                invalidateAll();
            });

            return () => {
                subscription.unsubscribe();
            };
        }
    );
</script>
<div class="grid w-screen h-screen justify-items-center content-start">
    <Navbar />
    <div class='p-4'>
        <img alt='logo' class='w-12 mx-auto'/>
        <slot />    
    </div>
</div>