<script lang="ts">
  let year = new Date().getFullYear()
</script>

<footer class="mt-12">
  <div class="relative px-4 sm:px-8 lg:px-12">
    <div class="mx-auto max-w-2xl lg:max-w-5xl">
      <div class="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
        <div class="sm:px-8">
          <div class="mx-auto max-w-7xl lg:px-8">
            <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div
                class="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200"
              >
                <a href="https://blog.mrmiss.dev">Blog</a>
                <a href="/projects">Projects</a>
              </div>
              <p class="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {year} Mr.Miss. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
