<script lang="ts">
  import { env } from "$env/dynamic/public"
  import { page } from "$app/stores"

  import "../app.css"
  import Analytics from "$lib/components/Analytics.svelte"
  import ThemeToggle from "$lib/components/ThemeToggle.svelte"
  import ScrollHome from "$lib/components/ScrollHome.svelte"
  import HelperButton from "$lib/components/HelperButton.svelte"
  import NavigationButton from "$lib/components/NavigationButton.svelte"

  const DESCRIPTION = "Visit my personal site for my portfolio and blog posts."
  const TWITTER_HANDLE = "@mrmissx"

  const name = "Gaung Ramadhan"

  $: path = $page.url.pathname.substring(1)
</script>

<svelte:head>
  <title>{path === "" ? name : `${name} | ${path}`}</title>

  <meta name="keywords" content="gaung, gaung ramadhan, mrmiss" />
  <meta name="description" content={DESCRIPTION} />
  <link rel="canonical" href={$page.url.href} />

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
<Analytics />
<div class="dark:text-primary-light text-primary-dark">
  <ThemeToggle />
  <slot />
  <ScrollHome />
  <NavigationButton />
  <HelperButton />
</div>
