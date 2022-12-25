<script lang='ts'>
	import { page } from "$app/stores";

    interface NavItem {
        url: String,
        text: String
    }
    
    const navItems: Array<NavItem> = [
        { text: "home", url: "" },
        { text: "training", url: "training" },
        { text: "nutrition", url: "nutrition" },
        { text: "login", url: "login" },
    ];
    $: currentRoute = $page.url.pathname;
</script>

<nav class='w-full fixed left-0 bg-white bottom-0'>
    <div class='w-full flex justify-center border-black border-t text-center text-xl items-center'>
        {#each navItems as navItem}
            <a class="p-3 flex-auto border-t-2 hover:border-black {'/' + navItem.url === currentRoute ? 'border-black' : 'border-white '}" href="/{navItem.url}">{navItem.text}</a>
        {/each}
    </div>
</nav>
