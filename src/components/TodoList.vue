<template lang="html">
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem.item" class ="shadow">
        <i class="checkBtn fas fa-check-circle" v-bind:class="{checkBtnCompleted: todoItem.completed}"
        v-on:click="toggleComplete(todoItem,index)"></i>
        <span v-bind:class="{textCompleted:todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="far fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
</div>
</template>

<script>
export default {
  methods:{
    removeTodo(todoItem, index){
      // console.log(todoItem);
      // this.$emit('removeItem', todoItem, index);
      this.$store.commit('removeOneItem', {todoItem, index} );
    },
    toggleComplete(todoItem, index){
      // this.$emit('toggleItem', todoItem, index); vuex를 써서 아래와 같이 바뀜
      this.$store.commit('toggleOneItem', {todoItem, index});
    }
  }
}
</script>

<style scoped lang="css">
ul{
  list-style-type: none;
  padding-left:0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn{
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted{
  color: #b3adad;
}
.textCompleted{
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn{
  margin-left: auto;
  color: #de4343;
}
/* 리스트 아이템 트렌지션 효과 */
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
