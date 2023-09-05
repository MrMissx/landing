<script lang="ts">
  import Home from "$lib/section/Home.svelte"
  import About from "$lib/section/About.svelte"
  import Project from "$lib/section/Project.svelte"

  import FaCaretLeft from "svelte-icons/fa/FaCaretLeft.svelte"
  import FaCaretRight from "svelte-icons/fa/FaCaretRight.svelte"

  import { currentSection } from "$lib/shared/stores"

  let navButtonDisabled = [true, false]
  const Page = [Home, About, Project]
  const max = Page.length

  function scrollTo(action: "prev" | "next") {
    const toSection = action === "prev" ? $currentSection - 1 : $currentSection + 1
    if (toSection < 0 || toSection > max - 1) return
    currentSection.update(() => toSection)
  }

  $: switch ($currentSection) {
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

<svelte:component this={Page[$currentSection]} />
<nav>
  <button
    disabled={navButtonDisabled[0]}
    id="prev"
    class="text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 hover:dark:text-zinc-200"
    aria-label="back to top"
    on:click={() => scrollTo("prev")}
  >
    <FaCaretLeft />
  </button>
  <button
    disabled={navButtonDisabled[1]}
    id="next"
    class="text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 hover:dark:text-zinc-200"
    aria-label="back to top"
    on:click={() => scrollTo("next")}
  >
    <FaCaretRight />
  </button>
</nav>

<style lang="scss">
  nav {
    position: fixed;
    display: flex;
    gap: 2rem;
    left: 50%;
    bottom: 2rem;
    transform: translateX(-50%);

    button {
      width: 3rem;
      height: 3rem;
      z-index: 100;
    }

    button:hover {
      opacity: 1;
      scale: 1.1;
    }

    button:disabled {
      opacity: 0;
    }
  }
</style>
