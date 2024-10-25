<script lang="ts">
  import { fade, blur } from "svelte/transition"
  import { currentSection } from "$lib/stores"
  import { onMount } from "svelte"

  onMount(() => {
    currentSection.update(() => -1)
  })
</script>

<section
  in:fade
  out:blur
  class="flex justify-center items-center h-screen mx-10 md:mx-20 text-center"
>
  <div class="flex flex-col gap-2 mx-[10%]">
    <h1 class="text-3xl lg:text-4xl">💖 Support Me 💖</h1>
    <p class="text-left md:text-center">
      Thanks for stopping by. Your support helps keep my projects running and, yes, it even pays my
      server bills (and maybe a coffee or two)! Every little bit counts.
    </p>
    <ul class="list-disc list-outside mt-3 text-left">
      <li>
        <a class="text-blue-700 dark:text-blue-400" href="https://saweria.co/mrmiss" rel="nofollow">
          Saweria
        </a>
      </li>
      <li>
        <a
          class="text-blue-700 dark:text-blue-400"
          href="https://www.paypal.me/gaungr"
          rel="nofollow"
        >
          Paypal
        </a>
      </li>
      <li>
        Bitcoin: <span class="text-blue-700 dark:text-blue-400 break-all">
          bc1qk43zcj7yzlwdj5xg6xsj5frqt7cqx8jkqwxmpq
        </span>
      </li>
      <li>
        Ethereum: <span class="text-blue-700 dark:text-blue-400 break-all">
          0x72599B85431728A4e2AD73826Cc076fBD689335D
        </span>
      </li>
    </ul>
  </div>
</section>

<style lang="scss">
  a:hover {
    text-decoration-line: underline;
  }
</style>
