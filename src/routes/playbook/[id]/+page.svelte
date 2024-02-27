<script>
    import components from "$lib/sections";
    import { page } from "$app/stores";
    let id = $page.url.pathname[$page.url.pathname.length - 1];
    let currentSection = components[id - 1];
</script>

<div class="container flex flex-col items-center mx-auto">
    <h1 class="h1 my-5">{currentSection.title}</h1>
    <h3 class="h3">{currentSection.description}</h3>
        <div class="grid grid-cols-12 max-w-5xl gap-4">
            {#each currentSection.content as section}
                <!-- Card 1 -->
                <div class="grid col-span-4 relative my-10">
                    <a
                        class="group shadow-lg hover:shadow-2xl duration-200 delay-75 w-full bg-white rounded-sm py-6 pr-6 pl-9"
                        href="{section.link}"
                    >
                        <!-- Title -->
                        <p
                            class="text-2xl font-bold text-gray-500 group-hover:text-gray-700"
                        >
                            {section.title}
                        </p>

                        <!-- Description -->
                        <p
                            class="text-sm font-semibold text-gray-500 group-hover:text-gray-700 mt-2 leading-6"
                        >
                            
                        </p>

                        <!-- Color -->
                        <div
                            class="bg-blue-400 group-hover:bg-blue-600 h-full w-4 absolute top-0 left-0"
                        ></div>
                    </a>
                </div>
            {/each}
        </div>
    </div>