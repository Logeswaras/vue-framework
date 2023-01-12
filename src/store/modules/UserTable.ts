import axios from "axios";
import { MutationTree, ActionTree, GetterTree } from "vuex";

const state: any = {
  users:null,
};

const getters: GetterTree<any, any> = {
  GET_USERS(state){
    return state.users
  },

};

const mutations: MutationTree<any> = {
  SET_USERS(state,action){
    state.users = action;
  },

  SET_SEARCH_FILTER(state,action){

    if (action.trim().length > 0) {
       state.users  = state.users.filter((user:any)=>{
          return user.brand.toLowerCase().includes(action.toLowerCase())
        })
    }else{
      return state.users
    }
    
  },

  SET_BREAND_FILTER(){

  }
};

const actions: ActionTree<any, any> = {

  async getUserData({ commit }) {
    await axios
      .get("https://dummyjson.com/products")
      .then((response: any) => commit("SET_USERS", response.data.products))
      .catch((error: any) => console.log(error));
  },

  searchUser({commit},action){
    commit('SET_SEARCH_FILTER',action)
  },

  
};

export const userTable = {
  state,
  getters,
  mutations,
  actions,
};
