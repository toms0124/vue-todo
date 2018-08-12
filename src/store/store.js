import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//로컬 스토리지 데이터를 담아와서 돌려준다.
const storage = {
  fetch(){
    const arr = [];
      if(localStorage.length > 0){
        for(let i =0; i< localStorage.length; i++){
          if(localStorage.key(i) !=='loglevel:webpack-dev-server'){
            arr.push(JSON.parse(localStorage.getItem(localStorage.key(i)))); //string을 obj형태로

          }
        }
      }
      return arr;
  }
};

export const store = new Vuex.Store({
  state:{
    todoItems: storage.fetch()
  },
  mutations:{
    addOneItem(state, todoItem){
      const obj= {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj)); //js객체를 string으로 변환
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload){
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index,1); //slice도 있음
    },
    toggleOneItem(state, payload){
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));

    },
    clearAllItems(state){
      localStorage.clear();
      state.todoItems=[];
    }
  }
});
