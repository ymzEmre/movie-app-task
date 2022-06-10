import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";


export default createStore({
  state: {
    movieID: null,
  },
  mutations: {
    setMovieID(state, id) {
      state.movieID = id;
    }
  },
  getters: {
    getMovieID: state => state.movieID
  },
  plugins: [
    createPersistedState({
      storage: window.localStorage,
    }),
  ],
});