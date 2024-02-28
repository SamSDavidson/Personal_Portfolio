<script>
    let buttons = [
        {
            link: "/personal",
            text: "Personal Projects",
        },
        {
            link: "/education",
            text: "Educational Studies",
        },
        {
            link: "/playbook",
            text: "Cybersecurity Playbook",
        },
    ];
</script>

<div class="container h-full mx-auto flex max-sm:flex-wrap justify-center items-center">
    <div class="space-y-10 text-center flex flex-row max-sm:flex-wrap items-center">
        <div class="container mx-auto">
            
            <h2 class="h2">Welcome to My Portfolio.</h2>

            <h5 class="h5">
                My name is Sam Davidson, an enthusiastic student of technology
            </h5>

            <p class="text-md text-pretty">
                I welcome you to click a link and learn more about myself
                and my studies.
            </p>
        </div>

        <div class="container h-full mx-auto flex flex-col justify-center items-center">
            {#each buttons as button}
                <a href={button.link}>
                    <button
                        class="border-2 border-indigo-500 p-5 m-5 rounded-md hover:bg-blue-500"
                    >
                        <h3 class="h3">{button.text}</h3>
                    </button>
                </a>
            {/each}
        </div>
    </div>
</div>
