import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items: [
            {
                title: "todo item A",
                completed: false
            },
            {
                title: "todo item B",
                completed: false
            },
            {
                title: "todo item C",
                completed: false
            }
        ]
    },
    getters: {
        completedItems(state) {
            return state.items.filter(item => {
                return item.completed === true
            }).length;
        },
        pendingItems(state) {
            return state.items.filter(item => {
                return item.completed === false;
            }).length;
        }
    },
    mutations:{
        NEW_MENU_ITEM(state, menuItem){
            state.items.push({
                title: menuItem,
                completed:false
            });
        },
        DELETE_ITEM(state, menuItem){
            let index = state.items.indexOf(menuItem);
            //state.items.deleteItem(menuItem);
            state.items.splice(index,1);
        },
        TOGGLE_ITEM(state,menuItem){
            menuItem.completed = !menuItem.completed;
        }

    },
    actions: {
        addNewItem({commit}, menuItem ){
                commit('NEW_MENU_ITEM',menuItem);
        },
        deleteItem({commit}, menuItem){
            commit('DELETE_ITEM',menuItem);
        },
        toggleToDoStatus({commit},menuItem){
            commit('TOGGLE_ITEM',menuItem);
        }
    }
});