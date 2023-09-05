<script lang="ts">
  import { slide, scale, blur, fade, fly } from "svelte/transition"

  import Stack from "$lib/components/Stack.svelte"
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
        I'm a Software Developer from Indonesia, starting my coding journey in 2018. For more
        information, reach out to me through my contact details on the home page.
      </p>
    </div>
    <Stack />
  </div>
</section>
