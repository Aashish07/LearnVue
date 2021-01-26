import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            {
                title: "todo item A",
                completed: false
            },
            {
                title: "todo item B",
                completed: false
            }
        ]
    },
    getters: {

    },
    mutations:{

    },
    actions:{

    }
})