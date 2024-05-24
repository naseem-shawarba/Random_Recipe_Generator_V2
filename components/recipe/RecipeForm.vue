<template>
  <v-container>
    <v-row>
      <v-col class="d-flex" cols="12" xl="5" lg="5" md="5" sm="6" xs="12">
        <v-select
          :clearable="true"
          v-model="origin"
          :items="recipeOrigins"
          label="Origin"
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" xl="5" lg="5" md="5" sm="6" xs="12">
        <v-select
          :clearable="true"
          v-model="category"
          :items="recipeCategories"
          label="Category"
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" xl="2" lg="2" md="2" sm="6" xs="12">
        <v-btn @click="generate" size="large" height="56" block>Generate</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'pinia'
import { useRecipeStore } from "@/stores/recipeStore";
export default {
  data() {
    return {
      store:useRecipeStore(),
      category: null,
      origin: null,
    };
  },

  created() {
    this.fetchOriginsAndCategories()
  },
  computed:{
      ...mapState(useRecipeStore, ['recipeOrigins']),
      ...mapState(useRecipeStore, ['recipeCategories']),
    },
  methods: {
    generate() {
      this.store.generate({ "category": this.category, "origin": this.origin })
      
    },
    fetchOriginsAndCategories(){
      this.store.fetchOriginsAndCategories()
    }
  },
};
</script>
