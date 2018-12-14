const state = {
    account:1
}
const  mutations ={
    add (state){
        state.account ++
    },
    reduce(state){
        state.account--
    }
}
const actions ={
    add({commit}){
        commit('add')
    },
    reduce({commit}){
        commit('reduce')
    }
 }
 export default{
    namespace:true,
    state,
    mutations,
    actions
}