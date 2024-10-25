<script lang="ts">
  import { browser } from "$app/environment"
  import { page } from "$app/stores"
  import { env } from "$env/dynamic/public"

  $effect(() => {
    if (browser && env.PUBLIC_GOOGLE_ANALYTICS) {
      window.dataLayer = window.dataLayer || []
      window.gtag = function gtag(): void {
        window.dataLayer.push(arguments)
      }
      window.gtag("js", new Date())
      window.gtag("config", env.PUBLIC_GOOGLE_ANALYTICS)
    }
  })

  $effect(() => {
    if (env.PUBLIC_GOOGLE_ANALYTICS && typeof gtag !== "undefined") {
      gtag("config", env.PUBLIC_GOOGLE_ANALYTICS, {
        page_title: document.title,
        page_path: $page.url.pathname
      })
    }
  })
</script>

<svelte:head>
  {#if env.PUBLIC_GOOGLE_ANALYTICS}
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${env.PUBLIC_GOOGLE_ANALYTICS}`}
    >
    </script>
  {/if}
</svelte:head>
