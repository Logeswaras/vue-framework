import { createStore } from "vuex";
import { loginUser } from "./modules/UserAuthentication";
// import {userTable} from './modules/UserTable'



export default createStore({
  modules: {
    loginUser,
    // userTable
  },
});
