import { createStore } from 'vuex'
import user from './modules/user.js'
import getters from './getters'

const store = createStore({
    modules: {
        user
    },
    getters,
})

export default store
