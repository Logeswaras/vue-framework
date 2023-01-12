import { auth } from "../../Firebase/index";
import router from "@/router";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { MutationTree, ActionTree, GetterTree } from "vuex";


const USER_TOKEN = "token";

const state: any = {
  token: localStorage.getItem(USER_TOKEN) || "",
};

const getters: GetterTree<any, any> = {

  userLoggedIn: (state) => {
    return state.token;
  },
};

const mutations: MutationTree<any> = {

  onLogin(state, payload) {
    localStorage.setItem(USER_TOKEN, payload.token);
    state.token = payload.token;
  },

  onLogout(state) {
    state.token = localStorage.removeItem(USER_TOKEN);
  },

};

const actions: ActionTree<any, any> = {
  async login({ commit }, payload) {
    const { email, password } = payload;
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("User Not found");
          break;

        case "auth/wrong-password":
          alert("Password Not Correct");
          break;

        default:
          alert("Something wrong");
      }
      return;
    }

    commit("onLogin", auth.currentUser);
    router.push('/protected')
  },

  async signout({ commit }) {
    await signOut(auth);
    commit("onLogout");
    router.push("/");
  },
};

export const loginUser = {
  state,
  getters,
  mutations,
  actions,
};
