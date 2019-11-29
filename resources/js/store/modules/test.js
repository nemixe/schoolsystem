export default {
    state: {
        notes: 1,
    },
    mutations: {
        FETCH(state) {
            state.notes = state.notes + 1;
        },
    },
    actions: {
        fetch({ commit }) {
            return axios.get(notes)
                .then(response => commit('FETCH', response.data))
                .catch();
        }
    }
  }