import { defineStore } from "pinia";
import { state } from "./recipeState";
import { actions } from "./recipeActions";
import { getters } from "./recipeGetters";

export const useRecipeStore = defineStore({
  id: "recipe",
  state,
  actions,
  getters,
});
