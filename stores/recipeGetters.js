// getters.js
export const getters = {
  recipeImageURL: ({recipe}) => recipe.strMealThumb,
  recipeName: ({recipe}) => recipe.strMeal,
  recipeCategory: ({recipe}) => recipe.strCategory,
  recipeOrigin: ({recipe}) => recipe.strArea,
  recipeIngredientsAndMeasures:({recipe})=>{
    let ingredientsAndMeasures = [];
    for (let i = 1; i <= 20; i++) {
      let measure = recipe[`strMeasure${i}`];

      let ingredient = recipe[`strIngredient${i}`];
      if (measure && ingredient) {
        ingredientsAndMeasures.push(`${measure} ${ingredient}`);
      }
    }
    return ingredientsAndMeasures;
  },
  recipeInstructions: ({recipe}) => recipe.strInstructions,
  recipeOrigins: ({origins}) => origins,
  recipeCategories: ({categories}) => categories.filter(category => category !== "Pork"),

  recipeCookingVideoURL: ({recipe}) => recipe.strYoutube,

  recipeCookingVideoURLForIframe:({recipe})=> {
    const youtubeEmbedTemplate = "https://www.youtube.com/embed/";
    const recipeCookingVideoURL = recipe.strYoutube;

    if (!recipeCookingVideoURL) return;

    const url = recipeCookingVideoURL.split(
      /(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/
    );

    const YId = url[2]?.split(/[^0-9a-z_/\\-]/i)[0] ?? url[0];

    if (YId === url[0]) return; // "not a youtube link"

    return youtubeEmbedTemplate+ YId ;
    
  },
};
