import { createStore } from "vuex";

const store = createStore({
  state() {
    // data

    return {
      lists: ["html", "css", "js"],
    };
  },
  mutations:{ // methods
    listAdd(state,val){
      state.lists.push(val)
    }
  }
});

export default store
