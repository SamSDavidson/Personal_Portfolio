<script>
    import components from "$lib/sections";
    import { page } from "$app/stores";
    let id = $page.url.pathname[$page.url.pathname.length - 1];
    let currentSection = components[id - 1];
</script>

<div class="flex flex-col items-center mx-auto">
    <h1 class="h1 p-10">{currentSection.title}</h1>
    <h3 class="h3 p-5">{currentSection.description}</h3>
    <div class="flex flex-wrap justify-center">
        {#each currentSection.content as section}
        <a href="{section.link}" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{section.title}</h5>
            </a>
        {/each}
    </div>
</div>
