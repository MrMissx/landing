<script lang="ts">
  import { currentSection } from "$lib/stores"
  import { goto } from "$app/navigation"

  import UimAngleDoubleLeft from "~icons/uim/angle-double-left"

  let hidden = $state(true)

  function redirectHome() {
    currentSection.update(() => 0)
    goto("/")
  }

  $effect(() => {
    hidden = $currentSection <= 1 && $currentSection !== -1
  })
</script>

<button
  class:hidden
  class="fixed z-50 left-5 bottom-5 nav-button"
  aria-label="back to top"
  onclick={redirectHome}
>
  <UimAngleDoubleLeft class="w-8 md:w-10 h-8 md:h-10" />
</button>
