<template>
  <form class="row w-50 mx-auto my-4">
    <div class="col-8 p-0">
      <input
        :value="title"
        @input="(event) => $emit('detectInput', event.target.value)"
        type="text"
        class="form-control m-0"
        id="inputData"
        placeholder="Write down everything."
      />
    </div>
    <div class="col-4">
      <button
        v-if="clickedEdit === false"
        @click.prevent="$emit('addToList')"
        type="submit"
        class="btn btn-primary mb-3"
      >
        Add
      </button>
      <button
        v-else
        @click.prevent="$emit('saveList')"
        type="submit"
        class="btn btn-primary mb-3"
      >
        Save
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: ["clickedEdit", "title"],
};
</script>
