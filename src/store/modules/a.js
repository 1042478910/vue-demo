const state = {
    money:1
}
const  mutations ={
    add (state){
        state.money++
    },
    reduce(state){
        state.money--
    }
}
 const actions ={
    increment({commit}){
        commit('add')
    },
    decrement({commit}){
        commit('reduce')
    }
 }

 export default{
    namespace:true,
     state,
     mutations,
     actions
 }