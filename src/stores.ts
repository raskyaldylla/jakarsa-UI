import { writable } from "svelte/store"
import { sectionState } from "./Scripts/enum"

export const sectionStore = writable(sectionState.CONTACT);