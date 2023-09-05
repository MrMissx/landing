<script lang="ts">
  import FaAngleDoubleLeft from "svelte-icons/fa/FaAngleDoubleLeft.svelte"
  import { currentSection } from "$lib/shared/stores"

  let hidden = true

  function scrollFirst() {
    currentSection.update(() => 0)
  }

  $: hidden = $currentSection <= 1
</script>

<button
  class:hidden
  class="fixed z-50 left-5 bottom-8 w-8 md:w-10 h-8 md:h-10 text-zinc-600 dark:text-zinc-400 hover:scale-125"
  aria-label="back to top"
  on:click={scrollFirst}
>
  <FaAngleDoubleLeft />
</button>
