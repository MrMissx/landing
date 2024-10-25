<script lang="ts">
  import { onMount } from "svelte"
  import { isDarkMode } from "$lib/stores"

  onMount(() => {
    isDarkMode.set(document.documentElement.classList.contains("dark"))
  })

  const toggleTheme = (e: MouseEvent) => {
    e.preventDefault()
    document.documentElement.classList.toggle("dark")
    $isDarkMode = !$isDarkMode
    localStorage.theme = $isDarkMode ? "dark" : "light"
  }
</script>

<svelte:head>
  <script>
    // Set based on preference in head tag to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!localStorage.theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  </script>
</svelte:head>

<button
  onclick={toggleTheme}
  class="absolute top-4 right-4 hover:scale-125 transform transition-all duration-300 ease-in-out"
  aria-label="theme toggle"
>
  {#if $isDarkMode}
    <svg
      class="icon hover:scale-110 text-zinc-100"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={1.5}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  {:else}
    <svg
      class="icon hover:scale-110 text-zinc-900"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={1.5}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  {/if}
</button>

<style>
  .icon {
    height: 2.25rem;
    width: 2.25rem;
    cursor: pointer;
  }
</style>
