<template>
  <div :style="$vuetify.display.xs
    ? 'width:80vw; height:80vw'
    : 'width:400px; height:400px'
    ">
    <v-img :src="recipeImageURL" alt="no image found"></v-img>
  </div>
</template>

<script>
export default {
  props: ['recipeImageURL'],
};
</script>