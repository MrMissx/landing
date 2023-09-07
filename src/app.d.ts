// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
}

declare module "svelte-icons/**/index.js" {
  import { SvelteComponentTyped } from "svelte"
  export default class extends SvelteComponentTyped<unknown, unknown, unknown> {}
}

export {}
