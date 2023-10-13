<template>
  <div class="container">
    <form class="form-horizontal" action="/action_page.php">
      <div class="form-group">
        <label class="control-label col-sm-2" for="email">Page Title:</label>
        <div class="col-sm-10">
          <input
            v-model="title"
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
            v-model="content"
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
            v-model="text"
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
            v-model="url"
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
              ><input v-model="published" type="checkbox" name="remember" />
              published</label
            >
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button @click.prevent="checkValidation" type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",

      text: "",
      url: "",
      published: true,
    };
  },
  watch: {
    title(n, o) {
      if (this.text === o) {
        this.text = n;
      }
    },
  },
  methods: {
    checkValidation() {
      console.log("hit");
      if (!this.title || !this.content || !this.text || !this.url) {
        alert("pls fill the form");
        return;
      }
      this.$bus.$emit("createPage", {
        title: this.title,
        content: this.content,
        link: {
          text: this.text,
          url: this.url,
        },
        published: this.published,
      });

      this.title = "";
      this.content = "";
      this.text = "";
      this.url = "";
    },
  },
};
</script>
