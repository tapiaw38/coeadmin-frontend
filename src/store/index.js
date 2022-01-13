import { createStore } from "vuex";

import auth from "../modules/authentication/store/auth";
import editor from "../modules/editor/store/editor"

const store = createStore({
  modules: {
    auth,
    editor,
  },
});

export default store;
