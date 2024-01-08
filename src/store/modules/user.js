// import { createStore } from "vuex";
import { getToken, removeToken, setToken } from "@/utils/auth";
import { resetRouter } from "@/router";

// 默认的state
const getDefaultState = () => {
    return {
        token: getToken(),
        name: '',
        avatar: ''
    }
}
const state = getDefaultState()
const mutations = {
    RESET_STATE(state) {
        Object.assign(state, getDefaultState())
    },
    SET_TOKEN(state, token) {
        state.token = token
    },
    SET_NAME(state, name) {
        state.name = name
    },
    SET_AVATAR(state, avatar) {
        state.avatar = avatar
    }
}

const actions = {
    // 用户登录
    login({ commit }, userInfo) {
        const { username, password } = userInfo
        // return new Promise((resolve, reject) => {
        // login({ username: username.trim(), password: password }).then(response => {
        //     const { data } = response
        //     commit('SET_TOKEN', data.token)
        //     setToken(data.token)
        //     resolve()
        // }).catch(error => {
        //     reject(error)
        // })
        // })
        const loginInfo = { username: username.trim(), password: password }
        console.log('登录用户名' + loginInfo.username)
        console.log('登录密码' + loginInfo.password)
        const token = 'login_true'
        commit('SET_TOKEN', token)
        setToken(token)
        console.log('已经登录token' + token)
    },

    // 拿用户数据
    getInfo({ commit, state }) {
        // return new Promise((resolve, reject) => {
        // getInfo(state.token).then(response => {
        //     const { data } = response

        //     if (!data) {
        //         return reject('Verification failed, please Login again.')
        //     }

        //     const { name, avatar } = data

        //     commit('SET_NAME', name)
        //     commit('SET_AVATAR', avatar)
        //     resolve(data)
        // }).catch(error => {
        //     reject(error)
        // })
        // })
        commit('SET_NAME', 'user')
        commit('SET_AVATAR', 'avatarURL')
        console.log('用户数据在vuex里面为' + state)
    },

    // 用户退出登录
    logout({ commit, state }) {
        // return new Promise((resolve, reject) => {
        // logout(state.token).then(() => {
        //     removeToken() // must remove  token  first
        //     resetRouter()
        //     commit('RESET_STATE')
        //     resolve()
        // }).catch(error => {
        //     reject(error)
        // })
        // })
        // 清除token 重置路由 重置vuex数据
        removeToken()
        resetRouter()
        commit('RESET_STATE')
        console.log('退出登录后vuex数据' + state)
    },

    // remove token
    resetToken({ commit }) {
        return new Promise(resolve => {
            removeToken() // must remove  token  first
            commit('RESET_STATE')
            resolve()
        })
    }
}
export default {
    namespaced: true,
    actions,
    state,
    mutations: mutations
}