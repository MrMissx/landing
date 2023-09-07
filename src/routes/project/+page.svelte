<script lang="ts">
  import { fly, slide } from "svelte/transition"
  import Card from "$lib/components/Card.svelte"
  import { PROJECT } from "$lib/constants"
</script>

<section
  in:slide
  out:fly
  class="flex justify-center items-center min-h-screen mt-7 md:mt-0 first-letter:md:mx-20 mx-10 text-center gap-11"
>
  <div class="flex flex-col gap-6">
    <h2 in:slide={{ delay: 400 }} class="font-bold md:text-4xl text-2xl">Featured Project</h2>
    <div in:fly={{ delay: 600 }} class="text-left">
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
