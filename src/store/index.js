import { defineStore } from 'pinia'

export const useIndex = defineStore(`index`, {
    state: () => {
        return {
            title: 'Store'
        }
    },
    actions: {
        setNum(num) {
            this.title = num || ~~(Math.random() * 100)
        }
    },
    getters: {

    }
})