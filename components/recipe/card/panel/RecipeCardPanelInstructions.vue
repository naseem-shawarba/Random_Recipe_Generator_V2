<template>
  <v-expansion-panel>
    <v-expansion-panel-title>
      <span><v-icon class="mr-2">mdi-information-outline</v-icon>Instructions</span>
    </v-expansion-panel-title>
    <v-expansion-panel-text style="word-break: break-word">
      {{ recipeInstructions }}
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script>
export default {
  props: ['recipeInstructions'],
};
</script>