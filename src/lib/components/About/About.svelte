<script lang="ts">
  import Stack from "../Stack.svelte"
</script>

<section
  class="container mx-auto max-w-[85rem] space-y-12 py-20 sm:px-6 lg:px-8 flex justify-center"
>
  <div class="flex flex-col gap-6">
    <h2 class="font-bold text-3xl md:text-4xl text-center">About</h2>
    <div class="mx-2 md:mx-40 xl:mx-60 text-center">
      <p class="mb-3">Hi There! Greetings 👋 Thanks for dropping by.</p>
      <p>
        I'm a Software Engineer from Indonesia. <br />From frontend to backend, I've got it covered.
        Backend's my favorite, and I'm no stranger to devops.
      </p>
      <p>
        Wanna see what I'm up to? Check out my
        <a class="text-blue-500 hover:underline" href="https://blog.mrmiss.dev"> blog</a>.
      </p>
      <p>
        Feel free to reach out - contact info's on the <a
          class="text-blue-500 hover:underline"
          href="/"
          >home page
        </a>.
      </p>
    </div>
    <div>
      <Stack />
    </div>
  </div>
</section>
