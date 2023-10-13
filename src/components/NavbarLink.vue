<template>
  <li>
    <router-link :to="`/pages/${index}`" class="nav-link" active-class="activeLink emp">
      {{ page.link.text }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: ["isActive", "page", "isDark", "index"],
  computed: {
    checkActive() {
      return {
        "text-white": !this.isDark,
        "text-dark": this.isDark,
        activeLink: this.isActive,
        emp: this.isActive,
      };
    },
  },
};
</script>

<style scoped></style>
