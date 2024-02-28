<script>
  import components from "$lib/sections";
</script>

<div class="container mx-auto flex flex-col items-center">
  <section class="min-h-screen my-5 flex flex-col items-center">
    <h1 class="h1 m-5">What is a Playbook?</h1>
    <p class="h3 my-5">
      Throughout my studies we have determined regions of security as we learn
      about new frameworks, vulnerabilities, risks, and assessment techniques.
      The Playbook provides us with a guide to wrap these sections in an easy to
      navigate format.
    </p>

    <div
      class="grid grid-flow-row grid-cols-4 max-sm:flex max-sm:flex-wrap items-center max-sm:justify-center"
    >
      {#each components as component}
        <div
          class="block m-5 p-5 rounded-lg transition ease-in-out bg-transparent hover:animate-bounce hover:bg-indigo-500"
        >
          <a href="/playbook/{component.id}">
            <label for={component.title} class="h5">{component.title}</label>
            <img
              class="m-3 w-28 h-28"
              src={component.image}
              alt={component.title}
            />
          </a>
        </div>
      {/each}
    </div>
  </section>
</div>
