<script lang="ts">
  import { goto } from "$app/navigation"
  import { onMount } from "svelte"

  import FaCaretLeft from "svelte-icons/fa/FaCaretLeft.svelte"
  import FaCaretRight from "svelte-icons/fa/FaCaretRight.svelte"

  import { currentSection } from "$lib/stores"
  import { MAIN_PAGE } from "$lib/constants"

  let navButtonDisabled = [true, false]
  const max = MAIN_PAGE.length

  function scrollTo(action: "prev" | "next") {
    const toSection = action === "prev" ? $currentSection - 1 : $currentSection + 1
    if (toSection < 0 || toSection > max - 1) return
    currentSection.update(() => toSection)
    goto(MAIN_PAGE[toSection])
  }

  onMount(() => {
    const current = window.location.pathname
    const index = MAIN_PAGE.indexOf(current)
    currentSection.update(() => index)
  })

  $: switch ($currentSection) {
    case -1:
      navButtonDisabled = [true, true]
      break
    case 0:
      navButtonDisabled = [true, false]
      break
    case max - 1:
      navButtonDisabled = [false, true]
      break
    default:
      navButtonDisabled = [false, false]
      break
  }
</script>

<nav class="fixed w-full bottom-0 pt-7 bg-gradient-to-t from-zinc-100 dark:from-zinc-900 from-40%">
  <div class="flex justify-center gap-10">
    <button
      disabled={navButtonDisabled[0]}
      id="prev"
      class="text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 hover:dark:text-zinc-200 w-7 h-w-7 hover:scale-125 transform transition-all duration-300 ease-in-out"
      aria-label="back to top"
      on:click={() => scrollTo("prev")}
    >
      <FaCaretLeft />
    </button>
    <button
      disabled={navButtonDisabled[1]}
      id="next"
      class="text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 hover:dark:text-zinc-200 w-7 h-w-7 hover:scale-125 transform transition-all duration-300 ease-in-out"
      aria-label="back to top"
      on:click={() => scrollTo("next")}
    >
      <FaCaretRight />
    </button>
  </div>
</nav>

<style lang="scss">
  button:disabled {
    opacity: 0;
  }
</style>
