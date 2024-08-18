<script lang="ts">
  import { slide, fly } from "svelte/transition"

  import { currentSection } from "$lib/stores"
  import Stack from "$lib/components/Stack.svelte"

  function goToFirst() {
    currentSection.update(() => 0)
  }
</script>

<section
  in:slide
  out:fly
  class="flex justify-center items-center h-screen mx-10 md:mx-20 text-center gap-11"
>
  <div class="flex flex-col gap-6">
    <h2 in:slide={{ delay: 300 }} class="font-bold text-3xl md:text-4xl">About</h2>
    <div class="mx-2 md:mx-40 xl:mx-60" in:slide={{ delay: 500 }}>
      <p class="mb-3">Hi There! Greetings 👋 Thanks for dropping by.</p>
      <p>
        I'm a Software Engineer from Indonesia. <br />From frontend to backend, I've got it covered.
        Backend's my favorite, and I'm no stranger to devops.
      </p>
      <p>
        Wanna see what I'm up to? Check out my
        <a class="text-blue-500 hover:underline" href="https://blog.mrmiss.dev"> blog</a>.
      </p>
      <p>
        Feel free to reach out - contact info's on the <a
          class="text-blue-500 hover:underline"
          href="/"
          on:click={goToFirst}>home page</a
        >.
      </p>
    </div>
    <div in:slide={{ delay: 800 }}>
      <Stack />
    </div>
  </div>
</section>
