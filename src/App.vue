<template>
  <nav-bar
    :active-page="activePage"
    :active-dark-Mode="activeDarkMode"
    :pages="showPublisedData"
    :dark-mode-change="
      (mode) => {
        activeDarkMode = !mode;
      }
    "
  ></nav-bar>
  <router-view></router-view>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  inject: ["$pages"],
  created() {
    this.$bus.$on("createPage", (formObj) => {
      this.pages.push(formObj);
      this.$pages.changePage();
      this.localStorage.setItem("pages", JSON.stringify(this.pages));
    });
    this.getTheme();
    this.pages = this.$pages.getAllPages();
  },
  data() {
    return {
      activeDarkMode: true,
      activePage: 0,
      pages: [],
    };
  },
  computed: {
    showPublisedData() {
      return this.pages.filter((p) => p.published);
    },
  },
  methods: {
    getTheme() {
      let theme = localStorage.getItem("theme");
      let page = localStorage.getItem("text");
      if (page) {
        this.activePage = page;
      }
      if (theme === "light") {
        this.activeDarkMode = true;
      } else if (theme === "dark") {
        this.activeDarkMode = false;
      }
    },
  },
};
</script>
