<script>
  import components from "$lib/sections";
</script>

<div class="container mx-auto flex flex-col items-center">
  <section class="min-h-screen my-5 flex flex-col items-center">
    <h1 class="h1 m-5">What is a Playbook?</h1>
    <p class="h3 my-5">
      Throughout my studies we have determined regions of security as we learn
      about new frameworks, vulnerabilities, risks, and assessment techniques.
      The Playbook provides us with a guide to wrap these sections in an
      easy to navigate format.
    </p>

    <div
      class="grid grid-flow-row grid-cols-4 max-sm:flex max-sm:flex-wrap items-center max-sm:justify-center"
    >
      {#each components as component}
        <div
          class="border-2 m-3 p-3 border-blue-900 rounded-md flex flex-row bg-white hover:bg-blue-900 hover:text-white transition-all duration-300 ease-in-out"
        >
          <a href="/playbook/{component.id}">
            <label for={component.title} class="h5">{component.title}</label>
            <img class="m-3" src={component.image} alt={component.title} />
          </a>
        </div>
      {/each}
    </div>
  </section>
</div>
