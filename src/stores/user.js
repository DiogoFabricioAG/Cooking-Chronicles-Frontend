import { defineStore } from 'pinia'

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        user: {
            isAuthenticated: false,
            id: '',
            username: '',
            image: ''
        }
    }),
    actions: {
        initStore() {
            this.user.id = localStorage.getItem('user.id')
            this.user.username = localStorage.getItem('user.username')
            this.user.image = localStorage.getItem('user.image')
            this.user.isAuthenticated = true
        },
        setUserInfo(user) {
            this.user.id = user.id
            this.user.username = user.username
            this.user.image = user.image
            this.user.isAuthenticated = true
            localStorage.setItem('user.id', this.user.id)
            localStorage.setItem('user.username', this.user.username)
            localStorage.setItem('user.image', this.user.image)
        },
        clearUserInfo() {
            this.user.id = ''
            this.user.username = ''
            this.user.image = ''
            this.user.isAuthenticated = false
            localStorage.setItem('user.id', '')
            localStorage.setItem('user.username', '')
            localStorage.setItem('user.image', '')
        }
    }
})
