<template>
  <div v-if="page" class="container mt-5">
    <h4>{{ page.title }}</h4>
    <p>{{ page.content }}</p>
  </div>
</template>

<script>
export default {
  inject: ["$pages"],
  created() {
    this.page = this.$pages.getSinglePage(this.$route.params.index);

    this.$watch(
      () => this.$route.params.index,
      (n, o) => {
        this.page = this.$pages.getSinglePage(this.$route.params.index);
      }
    );
  },

  data() {
    return {
      page: null,
    };
  },
};
</script>
