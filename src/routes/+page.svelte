<script lang="ts">
  import Home from "$lib/section/Home.svelte"
  import About from "$lib/section/About.svelte"
  import Project from "$lib/section/Project.svelte"

  import { currentSection } from "$lib/shared/stores"

  const Page = [Home, About, Project]
</script>

<svelte:component this={Page[$currentSection]} />
