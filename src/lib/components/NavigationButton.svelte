<script lang="ts">
  import { goto } from "$app/navigation"
  import { onMount } from "svelte"

  import FaCaretRight from "virtual:icons/mdi/menu-right"
  import FaCaretLeft from "virtual:icons/mdi/menu-left"

  import { currentSection } from "$lib/stores"
  import { MAIN_PAGE } from "$lib/constants"

  let navButtonDisabled = $state([true, false])
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

  $effect(() => {
    switch ($currentSection) {
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
  })
</script>

<nav class="fixed w-full bottom-0 pt-7 bg-gradient-to-t from-zinc-100 dark:from-zinc-900 from-40%">
  <div class="flex justify-center gap-10">
    <button
      disabled={navButtonDisabled[0]}
      id="prev"
      class="nav-button"
      aria-label="back to top"
      onclick={() => scrollTo("prev")}
    >
      <FaCaretLeft class="w-24 h-24" />
    </button>
    <button
      disabled={navButtonDisabled[1]}
      id="next"
      class="nav-button"
      aria-label="back to top"
      onclick={() => scrollTo("next")}
    >
      <FaCaretRight class="w-24 h-24" />
    </button>
  </div>
</nav>

<style lang="scss">
  button:disabled {
    opacity: 0;
  }
</style>
