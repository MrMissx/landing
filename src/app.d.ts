// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
  declare interface Window {
    dataLayer: any
  }
}

import "unplugin-icons/types/svelte"

export {}
