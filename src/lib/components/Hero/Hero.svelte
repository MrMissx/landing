<script lang="ts">
  import { animate, inView } from "motion"
  import { onMount } from "svelte"
  import Social from "../Social.svelte"

  onMount(() => {
    inView("#ray", (it) => {
      animate(
        it.target,
        { opacity: 1, width: "35rem" },
        { delay: 0.3, duration: 0.8, ease: "easeInOut" }
      )
    })

    inView("#lamp-bar", (it) => {
      animate(
        it.target,
        { width: "35.5rem", opacity: 1 },
        {
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut"
        }
      )
    })

    inView("#hero-content", (it) => {
      animate(
        it.target,
        // { opacity: 1, y: -200 },
        { opacity: 1, y: 0 },
        {
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut"
        }
      )
    })

    // shake the wave emoji
    inView("#wave", (it) => {
      animate(
        it.target,
        { rotate: [0, 7, -7, 7, -7, 7, -7, 0] },
        { delay: 1, repeat: Infinity, duration: 3 }
      )
    })
  })
</script>

<section
  class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-zinc-950 w-full rounded-md z-0"
>
  <div
    class="relative flex w-full flex-1 scale-y-125 items-center top-12 justify-center isolate z-0"
  >
    <div
      id="lamp-bar"
      class="absolute inset-auto z-50 h-1 rounded-lg w-[30rem] -translate-y-[7rem] bg-amber-300"
    ></div>
    <div
      id="ray"
      class="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-amber-300 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
    >
      <div
        class="absolute w-[100%] left-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"
      ></div>
      <div
        class="absolute w-40 h-[100%] left-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]"
      ></div>
    </div>
    <div
      id="ray"
      class="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-amber-300 text-white [--conic-position:from_290deg_at_center_top]"
    >
      <div
        class="absolute w-40 h-[100%] right-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]"
      ></div>
      <div
        class="absolute w-[100%] right-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"
      ></div>
    </div>

    <div class="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-zinc-950 blur-2xl"></div>
    <div class="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
    <div
      class="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-amber-300 opacity-50 blur-3xl"
    ></div>
  </div>

  <div class="relative z-50 flex -translate-y-72 flex-col items-center px-5">
    <div
      id="hero-content"
      class="mt-8 bg-gradient-to-br from-zinc-200 to-zinc-400 py-4 bg-clip-text text-center text-4xl font-medium text-transparent md:text-7xl"
    >
      <div class="tracking-tight">
        <p class="text-2xl md:text-4xl">
          Hii <span id="wave" class="inline-block">👋🏻</span>!
        </p>
        <h1>I'm Gaung Ramadhan</h1>
      </div>
      <span
        class="text-gray-800 hover:text-black md:text-xl text-base rounded-full bg-pink-200 px-3"
      >
        Mr.Miss
      </span>
      <p class="mt-2 text-lg md:text-2xl">
        Software Engineer
        <br />
        Creating bugs and breaking things everyday
      </p>
      <div class="mt-8">
        <Social />
      </div>
    </div>
  </div>
</section>

<style>
  #hero-content {
    opacity: 0.01;
    /* position: ; */
  }

  #ray {
    background-image: conic-gradient(var(--conic-position), var(--tw-gradient-stops));
    opacity: 0.5;
    width: 15rem;
  }

  #lamp-bar {
    opacity: 0.75;
    width: 15rem;
  }

  #wave {
    transform-origin: 100% 100%;
  }
</style>
