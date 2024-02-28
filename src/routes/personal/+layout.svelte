<script>
  import skills from "$lib/personalData";
</script>
<div class="grid grid-cols-3 p-4 max-sm:flex max-sm:flex-col">
{#each skills as skill}
  <div
    class=" bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex items-center mb-4 p-3 justify-center">
      <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
        {skill.title}
      </h5>
    </div>
    <div class="flow-root p-2">
      <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
        {#each skill.skills as s}
          <li class="py-3 sm:py-4">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="w-8 h-8 rounded-full"
                  src={skill.icon}
                  alt="{skill.title} icon"
                />
              </div>
              <div class="flex-1 min-w-0 ms-4">
                <p
                  class="text-sm font-medium text-gray-900 truncate dark:text-white"
                >
                  {s}
                </p>
              </div>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </div>
{/each}
</div>