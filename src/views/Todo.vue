<template>
  <div class="container">
    <!-- //input form of Todo -->
    <todo-input
      :title="title"
      :clicked-edit="clickedEdit"
      @addToList="addToList"
      @saveList="saveList"
      @detectInput="detectInput"
    ></todo-input>

    <!-- // Items list for todo -->
    <todo-list
      :lists="listedItems"
      :clicked="clickedEdit"
      @deleteList="deleteList"
      @editList="editList"
      @done="done"
    ></todo-list>
  </div>
</template>

<script>
import TodoInput from "../components/TodoInput.vue";
import TodoList from "../components/TodoList.vue";
export default {
  inject: ["$lists"],
  components: { TodoInput, TodoList },

  created() {
    console.log(this.$lists);
    this.listedItems = this.$lists.getAllList();
  },

  data() {
    return {
      onAlert: false,
      currentEdit: null,
      clickedEdit: false,
      title: "",
      listedItems: null,
    };
  },
  methods: {
    detectInput(text) {
      this.title = text;
    },
    done(index) {
      const key = (this.listedItems[index].hasDone = !this.listedItems[index].hasDone);
      this.$lists.saveHasDone(index, key);
      return key;
    },
    defaultInput() {
      this.clickedEdit = false;
      this.title = "";
    },
    addToList() {
      if (this.title) {
        let data = {
          title: this.title,
          hasDone: false,
          active: false,
        };
        this.listedItems.push(data);

        this.$lists.saveToBrowser();

        this.title = "";
      } else {
        alert("pls fill the input first");
      }
    },
    editList(index) {
      this.listedItems.forEach((list) => {
        list.active = false;
      });
      this.currentEdit = index;
      this.title = this.tedItemslis[index].title;
      thistedItems.lis[index].active = true;
      this.clickedEdit = true;
    },
    //shoud be Edit list
    saveList() {
      const data = {
        title: this.title,
        hasDone: thitedItemss.lis[this.currentEdit].hasDone,
        active: false,
      };
      this.listedItems[this.currentEdit] = data;
      this.$lists.saveEditItem(this.currentEdit, data);
      this.defaultInput();
    },
    deleteList(index) {
      this.listedItems.splice(index, 1);
      this.$lists.saveToBrowser();
      this.defaultInput();
    },
  },
};
</script>
