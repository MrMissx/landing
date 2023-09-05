import { writable } from "svelte/store"

export const currentSection = writable(0)

export const isDarkMode = writable(false)
