<template>
  <v-card-title style="word-break: break-word">
    {{ recipeName }}</v-card-title>
  <v-card-subtitle class="">
    <v-icon v-if="recipeCategory === 'Vegan'" color="green" class="mr-2">
      mdi-leaf
    </v-icon>
    <v-icon v-else>mdi-leaf-off</v-icon>
    <v-icon class="ml-3 mr-2">mdi-account-group</v-icon>
    <span>1~2</span>
  </v-card-subtitle>
</template>

<script>
export default {
  props: ['recipeName','recipeCategory'],
};
</script>