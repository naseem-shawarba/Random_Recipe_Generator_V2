<template>
  <div class="mx-2">
    <div class="d-flex justify-center">
      <RecipeForm />
    </div>

    <div class="d-flex justify-center" v-if="isLoading">
      <CommonProgressCircular />
    </div>
    <div class="d-flex justify-center" v-else-if="hasError">
      <CommonErrorMessage :message="errorMessage"/>
    </div>
    <div class="d-flex justify-center" v-else>
      <RecipeCard />
    </div>
  </div>
</template>

<script>
import { useRecipeStore } from "@/stores/recipeStore";

export default {
  data() {
    return {
      store: useRecipeStore(),
    };
  },
  created() {
    this.generate();
  },
  computed: {
    isLoading() {
      return this.store.loading;
    },
    hasError() {
      return !!this.store.error;
    },
    errorMessage() {
      return this.store.error;
    }
  },
  methods:{
    generate(){
      this.store.generate({ category: null, origin: null });
    }
  }
};
</script>
