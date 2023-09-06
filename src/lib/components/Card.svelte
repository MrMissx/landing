<script lang="ts">
  export let title: string
  export let description: string
  export let url: string
  export let source: string = ""
  export let stacks: string[]

  const getParsedSource = () => {
    if (source.includes("github.com")) {
      const pattern = /^(?:https?:\/\/)?(?:www\.)?github\.com\/([\S]+)\/([\S]+)$/
      const match = source.match(pattern)
      if (match) {
        return `${match[1]}/${match[2]}`
      }
    }
    return source
  }
</script>

<div class="rounded-lg p-4 overflow-hidden shadow-lg border-2 border-rose-300">
  <a href={url} rel="noopener noreferer" target="_blank">
    <h5 class="text-xl font-bold">{title}</h5>
  </a>
  <p class="my-2 text-sm">{description}</p>
  {#if source === ""}
    <span />
  {:else}
    <a class="flex items-center text-sm" href={source} rel="noopener noreferer" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="#888888"
          d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m.12 13.5l3.74 3.74l1.42-1.41l-2.33-2.33l2.33-2.33l-1.42-1.41l-3.74 3.74m11.16 0l-3.74-3.74l-1.42 1.41l2.33 2.33l-2.33 2.33l1.42 1.41l3.74-3.74Z"
        />
      </svg>
      {getParsedSource()}
    </a>
  {/if}
  <div class="mt-4">
    {#each stacks as stack}
      <span
        class="inline-block bg-[#FFC0CB] text-sky-950 rounded-full px-2 py-1 text-xs font-semibold mr-2"
      >
        {stack}
      </span>
    {/each}
  </div>
</div>

<style>
  a:hover {
    text-decoration-line: underline;
  }
</style>
