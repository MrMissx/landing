<script lang="ts">
  import { fly, slide, scale } from "svelte/transition"
  import Social from "$lib/components/Social.svelte"
</script>

<main
  in:slide
  out:fly
  class="flex justify-center items-center h-screen first-letter:md:mx-20 mx-10 text-center gap-11"
>
  <div class="flex flex-col gap-6">
    <div in:slide={{ delay: 400 }}>
      <h2 class="text-gray-500 hover:text-black dark:hover:text-white md:text-4xl text-2xl">
        Hi there👋🏻! I'm
      </h2>
      <h1 class="md:text-6xl text-5xl text-gray-950 dark:text-gray-50"><b>Gaung</b> Ramadhan</h1>
    </div>
    <div>
      <span
        in:slide={{ delay: 600 }}
        class="text-gray-800 hover:text-black md:text-xl text-base rounded-full bg-pink-200 px-3"
      >
        Mr.Miss
      </span>
      <p in:slide={{ delay: 800 }} class="mt-2 text-lg md:text-xl">
        Final Year student who like to code this and that.
        <br />
        Creating bugs and breaking things everyday.
      </p>
    </div>
    <div in:fly={{ delay: 900 }}>
      <Social />
    </div>
    <div in:scale={{ delay: 1300 }} class="hover:scale-110 ease-in-out duration-200">
      <a
        href="https://blog.mrmiss.dev"
        class="dark:bg-gray-200 bg-zinc-800 text-white dark:text-gray-800 p-2 rounded"
        aria-label="Blog"
        role="button"
      >
        Blog
      </a>
    </div>
  </div>
</main>
