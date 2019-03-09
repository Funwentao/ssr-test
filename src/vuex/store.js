import Vuex from 'vuex'

export function createStore () {
    return new Vuex.Store({
        state: {
            items: {}
        },
        actions: {
            fetchItem({commit}, id) {
                return
            }
        },
        mutations: {
            setItem(state, {id, item}) {

            }
        }
    })
}