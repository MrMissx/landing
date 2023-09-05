<script lang="ts">
  import { onMount } from "svelte"

  import { isDarkMode } from "$lib/shared/stores"
  import { STACKS } from "$lib/shared/constants"
  import type { Stack } from "$lib/shared/constants"

  onMount(() => {
    $isDarkMode = document.documentElement.classList.contains("dark")
  })

  $: getIcon = (it: Stack) => {
    if ($isDarkMode && it.iconDark) return it.iconDark
    return it.icon
  }
</script>

<div class="mx-10 my-2">
  <h2 class="mb-3 text-xl font-bold">My Tech Stack</h2>
  <div class="flex justify-evenly flex-wrap mx-0 md:mx-10">
    {#each STACKS as it}
      <a
        href={it.url}
        class="text-zinc-600 dark:text-zinc-400 mx-2 w-8 md:w-10 h-8 md:h-10"
        rel="noopener noreferer"
        target="_blank"
        aria-label={it.label}
        role="button"
      >
        <img src={getIcon(it)} alt={it.label} />
      </a>
    {/each}
  </div>
</div>
