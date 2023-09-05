<script lang="ts">
  import { blur } from "svelte/transition"

  import { currentSection } from "$lib/shared/stores"
  import Stack from "$lib/components/Stack.svelte"

  function goToFirst() {
    currentSection.update(() => 0)
  }
</script>

<section
  transition:blur
  class="flex justify-center items-center h-screen mx-10 md:mx-20 text-center gap-11"
>
  <div class="flex flex-col gap-6">
    <h2 class="font-bold md:text-4xl text-2xl">About</h2>
    <div>
      <span>Hi There! Greetings 👋 Thanks for dropping by.</span>
      <p class="mx-2 md:mx-40 xl:mx-60">
        I'm a Software Developer from Indonesia, starting my coding journey in 2018. Feel free reach
        out to me through my contact details on the <a
          class="text-blue-500"
          href="/"
          on:click={goToFirst}>home page</a
        >.
      </p>
    </div>
    <Stack />
  </div>
</section>
