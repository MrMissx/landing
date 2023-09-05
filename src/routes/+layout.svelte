<script lang="ts">
  import { env } from "$env/dynamic/public"

  import "../app.css"
  import ThemeToggle from "$lib/components/ThemeToggle.svelte"
  import ScrollFirst from "$lib/shared/components/ScrollFirst.svelte"

  const DESCRIPTION = "Welcome to my personal site."
  const TWITTER_HANDLE = "@mrmissx"
</script>

<svelte:head>
  <title>Gaung Ramadhan</title>
  <meta name="description" content="Welcome to my personal site." />
  <link rel="canonical" href={env.PUBLIC_BASE_URL} />

  <meta property="og:type" content="article" />
  <meta property="og:title" content="Mr.Miss" />
  <meta property="og:description" content={DESCRIPTION} />
  <meta property="og:url" content={env.PUBLIC_BASE_URL} />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content={TWITTER_HANDLE} />
  <meta name="twitter:creator" content={TWITTER_HANDLE} />
  <meta name="twitter:title" content="Mr.Miss" />
  <meta name="twitter:description" content={DESCRIPTION} />
</svelte:head>

<ThemeToggle />
<div class="text-primary-light dark:text-primary-dark">
  <slot />
</div>
<ScrollFirst />
