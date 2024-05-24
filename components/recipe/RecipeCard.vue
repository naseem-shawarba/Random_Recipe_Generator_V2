<template>
  <div>
    <v-card :max-width="$vuetify.display.xs ? '80vw' : '400'" elevation="2" class="mb-2">
      <RecipeCardImage :recipeImageURL="recipeImageURL"/>
      <RecipeCardSubtitle :recipeName="recipeName" :recipeCategory="recipeCategory" />
      <RecipeCardActions :show="show" @toggleShow="show = !show"/>
      <v-expand-transition >
        <div v-if="show">
          <v-divider></v-divider>
          <v-col class="text-center mx-auto" cols="12">
            <v-expansion-panels>
              <RecipeCardPanel title="Origin" :value="recipeOrigin" icon="mdi-map-marker-radius"/>
              <RecipeCardPanel title="Category" :value="recipeCategory" icon="mdi-format-list-checks"/>
              <RecipeCardPanelIngredientsAndMeasures :recipeIngredientsAndMeasures="recipeIngredientsAndMeasures" />
              <RecipeCardPanelInstructions :recipeInstructions="recipeInstructions" />
              <RecipeCardPanelCookingVideo v-if="recipeCookingVideoURLForIframe"
                :recipeCookingVideoURLForIframe="recipeCookingVideoURLForIframe" />
            </v-expansion-panels>
          </v-col>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useRecipeStore } from "@/stores/recipeStore";

export default {
  data() {
    return {
      store: useRecipeStore(),
      show: false,
    };
  },
  computed: {
    ...mapState(useRecipeStore, ['recipeName']),
    ...mapState(useRecipeStore, ['recipeImageURL']),
    ...mapState(useRecipeStore, ['recipeOrigin']),
    ...mapState(useRecipeStore, ['recipeCategory']),
    ...mapState(useRecipeStore, ['recipeIngredientsAndMeasures']),
    ...mapState(useRecipeStore, ['recipeInstructions']),
    ...mapState(useRecipeStore, ['recipeCookingVideoURLForIframe']),
  },
};
</script>
