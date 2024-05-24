<template>
  <div>
    <v-app-bar>
      <v-app-bar-title>
        <a href="/" class="title">{{ title }}</a>
      </v-app-bar-title>
      <v-spacer />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      title: "Random Recipe Generator",
    };
  },
};
</script>

<style scoped>
.title {
  text-decoration: none;
  color: inherit;
  font-size: inherit;
}
</style>
