import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
    state: () => ({
        // is any modal open
        isOpen: false,
        // specific modals
        contact: {
            isOpen: false
        }
    }),
    getters: {

    },
    actions: {
        open(modalId) {
            if (this.isOpen) {
                console.log("A modal is already open. Skipping")
            } else {
                this.isOpen = true
                this[modalId].isOpen = true
            }
        },
        close(modalId) {
            this.isOpen = false
            this[modalId].isOpen = false
        }
    }
})
