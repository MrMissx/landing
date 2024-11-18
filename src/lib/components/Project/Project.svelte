<script>
  import { PROJECT } from "$lib/constants"
  import Card from "../Card.svelte"
</script>

<section
  class="flex justify-center items-center mt-7 md:mt-0 first-letter:md:mx-20 text-center gap-11 container mx-auto max-w-[85rem] space-y-12 py-20 sm:px-6 lg:px-8"
>
  <div class="flex flex-col gap-6">
    <h2 class="font-bold md:text-4xl text-2xl">Featured Project</h2>
    <div class="text-left">
      <div id="card-container" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each PROJECT as it}
          <Card {...it} />
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  #card-container {
    padding-bottom: 6rem;
  }
</style>
