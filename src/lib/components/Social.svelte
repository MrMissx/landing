<script lang="ts">
  import { SOCIAL_LINKS } from "../constants"
</script>

<section class="flex justify-evenly mx-10 my-3">
  {#each SOCIAL_LINKS as it}
    <a
      href={it.link}
      class={"text-zinc-600 dark:text-zinc-400 mx-2 w-8 md:w-10 h-8 md:h-10 " + it.hoverColor}
      rel="noopener noreferer nofollow"
      target="_blank"
      aria-label={it.label}
      role="button"
    >
      <svelte:component this={it.icon} {...it.icon} />
    </a>
  {/each}
</section>
