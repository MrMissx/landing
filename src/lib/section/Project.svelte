<script lang="ts">
  import { fly, slide } from "svelte/transition"
  import Card from "$lib/components/Card.svelte"
</script>

<section
  in:slide
  out:fly
  class="flex justify-center items-center min-h-screen mt-7 md:mt-0 first-letter:md:mx-20 mx-10 text-center gap-11"
>
  <div class="flex flex-col gap-6">
    <h2 in:slide={{ delay: 400 }} class="font-bold md:text-4xl text-2xl">Featured Project</h2>
    <div in:fly={{ delay: 600 }} class="text-left">
      <div id="card-container" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          title="Stashbin"
          description="Simple and free pastebin service."
          stacks={["Next.js", "Supabase"]}
          url="https://stashbin.xyz"
          source="https://github.com/mrmissx/stashbin"
        />
        <Card
          title="Landing Page"
          description="Personal landing page. The page you're currently on."
          stacks={["Svelte kit", "Tailwind CSS"]}
          url="https://mrmiss.dev"
          source="https://github.com/mrmissx/personal_web"
        />
        <Card
          title="Anjani"
          description="Telegram management bot."
          stacks={["Python", "Mongo DB"]}
          url="https://t.me/anjani_bot"
          source="https://github.com/userbotindo/anjani"
        />
        <Card
          title="userbotindo.com"
          description="Userbotindo website with dashboard integration to manage Anjani."
          stacks={["Next.js", "daisyUI"]}
          url="https://userbotindo.com"
        />
        <Card
          title="Telegram Forwarder"
          description="Bot to forward message form channel/group."
          stacks={["Python"]}
          url="https://github.com/mrmissx/Telegram_Forwarder"
          source="https://github.com/mrmissx/Telegram_Forwarder"
        />
      </div>
    </div>
  </div>
</section>

<style>
  #card-container {
    padding-bottom: 6rem;
  }
</style>
