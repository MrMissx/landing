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
  class="fixed z-50 left-5 bottom-5 w-8 md:w-10 h-8 md:h-10 nav-button"
  aria-label="back to top"
  on:click={redirectHome}
>
  <FaAngleDoubleLeft />
</button>
