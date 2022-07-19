import { defineStore } from "pinia";

export const useLoginStore = defineStore({
  id: "login",
  state: () => ({
    data: {},
    error: null,
    loading: false,
    isAuthenticated: false
  }),
  getters: {
    getLogin() {
      return this.state.data;
    },
  },
  actions: {
    async doLogin() {
      this.data = []
      this.loading = true
      try {
        this.data = await fetch('https://reqres.in/api/users/2')
        .then((response) => response.json()) 
        .then((data) => data.data) 
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
        if(this.data) {
          this.isAuthenticated = true
        }
        return this.data
      }
    },
  },
});
