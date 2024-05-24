<template>
  <v-expansion-panel>
    <v-expansion-panel-title>
      <span><v-icon class="mr-2">mdi-playlist-edit</v-icon>Ingredients and
        Measures</span>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-list>
        <v-list-item v-for="(
            ingredientAndMeasure, i
          ) in recipeIngredientsAndMeasures" :key="i" class="justify-center">
          {{ ingredientAndMeasure }}
        </v-list-item>
      </v-list>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script>
export default {
  props: ['recipeIngredientsAndMeasures'],
};
</script>
