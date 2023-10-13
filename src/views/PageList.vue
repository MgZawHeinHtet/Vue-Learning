<template>
  <div class="container">
    <div class="text-end my-2">
      <router-link to="/pages/create" class="btn btn-outline-primary btn-sm"
        >Create Page</router-link
      >
    </div>

    <table class="table table-hover" my-5>
      <thead class="table-dark">
        <tr>
          <td>Title</td>
          <td>Linked text</td>
          <td>Is Published?</td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(page, index) in $pages.getAllPages()"
          :key="index"
          @click.prevent="goToPage(index)"
        >
          <td>{{ page.title }}</td>
          <td>{{ page.link.url }}</td>
          <td>{{ page.published ? "yes" : "no" }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, reactive, inject } from "vue";
import { useRouter } from "vue-router";
let count = ref(0);
let data = reactive({ counter: 0 });
const $pages = inject("$pages");
const route = useRouter();
function adding() {
  count.value++;
  data.counter++;
}

function goToPage(index) {
  route.push({ path: `pages/${index}/edit` });
}
</script>
