import { defineStore } from "pinia"

export const useUIStore = defineStore("ui", {
    state: () => {
        return {
            darkMode: true,
            filters: null,
            index: 0,
            amount: 12,
            colors: null,
        }
    }
});