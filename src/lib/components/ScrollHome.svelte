<script lang="ts">
  import FaAngleDoubleLeft from "svelte-icons/fa/FaAngleDoubleLeft.svelte"
  import { currentSection } from "$lib/stores"
  import { goto } from "$app/navigation"

  let hidden = true

  function redirectHome() {
    currentSection.update(() => 0)
    goto("/")
  }

  $: hidden = $currentSection <= 1 && $currentSection !== -1
</script>

<button
  class:hidden
  class="fixed z-50 left-5 bottom-8 w-8 md:w-10 h-8 md:h-10 text-zinc-500 dark:text-zinc-400 hover:scale-125 transform transition-all duration-300 ease-in-out"
  aria-label="back to top"
  on:click={redirectHome}
>
  <FaAngleDoubleLeft />
</button>
