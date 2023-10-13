<template>
  <div class="w-50 mx-auto">
    <ul v-if="lists.length > 0" class="list-group">
      <li v-for="(list, index) in lists" :key="index" class="list-group-item p-1">
        <div
          class="row align-items-center"
          :class="[
            list.hasDone ? 'text-decoration-line-through' : '',
            checkActive(index),
          ]"
        >
          <div class="col-8" @click.prevent="$emit('done', index)">
            <p class="ms-2 m-0">{{ list.title }}</p>
          </div>
          <div class="col-2 p-0">
            <button class="btn btn-primary" @click.prevent="$emit('editList', index)">
              Edit
            </button>
          </div>
          <div class="col-2 p-0">
            <button @click.prevent="$emit('deleteList', index)" class="btn btn-primary">
              Delete
            </button>
          </div>
        </div>
      </li>
    </ul>
    <p class="text-danger text-center" v-else>No Item in Todo list</p>
  </div>
</template>
<script>
export default {
  inject: ["$lists"],

  computed: {
    checkActive() {
      return function (index) {
        if (this.clicked) {
          if (this.lists[index].active == false) {
            return "opacity-25";
          }
        }
      };
    },
  },
  props: ["lists", "list", "index", "clicked"],
  methods: {},
};
</script>
