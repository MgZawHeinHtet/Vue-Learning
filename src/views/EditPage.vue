<template>
  <div class="container">
    <form class="form-horizontal" action="/action_page.php">
      <div class="form-group">
        <label class="control-label col-sm-2" for="email">Page Title:</label>
        <div class="col-sm-10">
          <input
            v-model="page.title"
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter Page Title"
            name="email"
          />
        </div>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-2" for="pwd">Content:</label>
        <div class="col-sm-10">
          <textarea
            v-model="page.content"
            rows="5"
            type="password"
            class="form-control"
            id="pwd"
            placeholder="Enter Content"
            name="pwd"
          ></textarea>
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-2" for="email">Page Title:</label>
        <div class="col-sm-10">
          <input
            v-model="page.link.text"
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter text"
            name="email"
          />
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-2" for="email">Page Title:</label>
        <div class="col-sm-10">
          <input
            v-model="page.link.url"
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter url"
            name="email"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <div class="checkbox">
            <label
              ><input v-model="page.published" type="checkbox" name="remember" />
              published</label
            >
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button
            @click.prevent="$pages.editPage(route.params.index, page)"
            type="submit"
            class="btn btn-primary me-4"
          >
            Edit
          </button>
          <button @click.prevent="cancel" type="submit" class="btn btn-primary">
            cancel
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";
import { inject } from "vue";
const $pages = inject("$pages");
const route = useRoute();
const router = useRouter();
const page = $pages.getSinglePage(route.params.index);
function cancel() {
  router.go(-1);
}
</script>
