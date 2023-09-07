<script lang="ts">
  import { fade, blur } from "svelte/transition"
  import { currentSection } from "$lib/stores"
  currentSection.update(() => -1)
</script>

<section
  in:fade
  out:blur
  class="flex justify-center items-center h-screen mx-10 md:mx-20 text-center"
>
  <div class="flex flex-col gap-2">
    <h1 class="text-3xl lg:text-4xl">💖 Support Me 💖</h1>
    <p>
      Hi, thank you for comming here. Your supports means a lot for me to keep my project alive and
      updated.
    </p>
    <ul class="list-disc list-inside mt-3 text-left">
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
          bc1q9wqkuev0xle04vfcuqtq9r6s7ywl6nq5ejdj66
        </span>
      </li>
      <li>
        Ethereum: <span class="text-blue-700 dark:text-blue-400 break-all">
          0x9e4b58fD32218683E68574F2dd948eCc624aC1f8
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
