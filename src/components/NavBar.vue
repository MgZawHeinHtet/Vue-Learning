<template>
  <nav
    id="nav"
    class="py-2 d-flex align-items-center shadow-sm"
    :class="[`navbar navbar-expand-lg`, `navbar-${theme}`, `bg-${theme}`]"
  >
    <div class="container text-center">
      <div class="p-0 m-0">
        <img src="../assets/logo.png" alt="" class="brand-logo" />
        <p class="p-0 m-0" :class="[activeDarkMode ? 'text-dark' : 'text-white']">
          Vue Crazy
        </p>
      </div>
      <button
        @click="changeIcon()"
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @setData="settingUpTheme"
      >
        <i class="fas text-white fa-bars menu-icon"></i>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end text-uppercase"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mb-lg-0 text-center">
          <navbar-link
            v-for="(page, index) in pages"
            :key="index"
            :index="index"
            :isDark="activeDarkMode"
            :page="page"
            @setting-up-theme="settingUpTheme"
          >
          </navbar-link>
          <li>
            <router-link
              to="/list"
              active-class="activeLink emp"
              class="nav-link"
              aria-current="page"
              >Page List</router-link
            >
          </li>
          <li>
            <router-link
              to="/todo"
              active-class="activeLink emp"
              class="nav-link"
              aria-current="page"
              >Todo List</router-link
            >
          </li>
        </ul>
        <form class="d-flex">
          <button
            @click.prevent="
              toggleButtom();
              darkModeChange(activeDarkMode);
            "
            class="btn btn-primary"
          >
            Toggle navbar
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import NavbarLink from "./NavbarLink.vue";
export default {
  props: ["activeDarkMode", "pages", "darkModeChange"],
  created() {
    this.getTheme();
  },
  data() {
    return {
      theme: "light",
      page: "",
    };
  },
  methods: {
    toggleButtom() {
      let theme = "light";

      if (this.theme === "light") {
        theme = "dark";
      }
      this.theme = theme;
      this.settingUpTheme(this.page);
    },
    settingUpTheme(data) {
      localStorage.setItem("theme", this.theme);
      localStorage.setItem("text", data);
      this.page = data;
    },
    getTheme() {
      let theme = localStorage.getItem("theme");

      if (theme) {
        this.theme = theme;
      }
    },
  },
  components: {
    NavbarLink,
  },
};
</script>

<style>
.brand-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.activeLink {
  font-weight: 700;
}

.emp {
  text-decoration: underline !important;
}
</style>
