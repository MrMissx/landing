<script lang="ts">
  import { slide, scale, blur, fade, fly } from "svelte/transition"
</script>

<section
  transition:blur
  class="flex justify-center items-center h-screen first-letter:md:mx-20 mx-10 text-center gap-11"
>
  <div class="flex flex-col gap-6">
    <h2 class="text-gray-500 hover:text-black dark:hover:text-white md:text-4xl text-2xl">About</h2>
  </div>
</section>
