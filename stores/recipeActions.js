async function fetchOrigins() {
  try {
    const url = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
    const response = await fetch(url);
    const {meals} = await response.json();
    if (!meals) {
      throw new Error("No origins found :(");
    }
    this.origins = meals.map((category) => category.strArea);
  } catch (error) {
    this.error = error.message;
  }
}

async function fetchCategories() {
  try {
    const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
    const response = await fetch(url);
    const {meals} = await response.json();
    if (!meals) {
      throw new Error("No categories found :(");
    }
    this.categories = meals.map((category) => category.strCategory);
  } catch (error) {
    this.error = error.message;
  }
}

async function getrandomRecipeIDWithoutFilters() {
  try {
    const url = "https://www.themealdb.com/api/json/v1/1/random.php";
    const response = await fetch(url);
    const {meals} = await response.json();
    if (!meals) {
      throw new Error("couldn't find an ID of a random recipe :(");
    }
    return meals[0].idMeal;
  } catch (error) {
    this.error = error.message;
    return null;
  }
}

async function getRecipeIDsByURL(url) {
  try {
    const response = await fetch(url);
    const {meals} = await response.json();
    if (!meals) {
      return [];
    }
    return meals.map((recipe) => recipe.idMeal);
    
  } catch (error) {
    this.error = error.message;
    return null;
  }
}

async function getRandomRecipeID({ category, origin }) {
  try {
    let recipeIDsByCategory;
    // if(!category) return[];
    // if(!origin) return [];

    if (category) {
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
      recipeIDsByCategory = await getRecipeIDsByURL.call(this, url);
      if (!recipeIDsByCategory) return null;
      
    } else {
      recipeIDsByCategory = [];
    }

    let recipeIDsByOrigin;
    if (origin) {
      let url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${origin}`;
      recipeIDsByOrigin = await getRecipeIDsByURL.call(this, url);
      if (!recipeIDsByOrigin) return null;
    } else {
      recipeIDsByOrigin = [];
    }

    let commonElements = [];
    if (!category && !origin) {
      // random id
      const rID = await getrandomRecipeIDWithoutFilters.call(this);
      if (!rID) {
        return null;
      }
      commonElements.push(rID);
    } else if (!category) {
      commonElements = recipeIDsByOrigin;
    } else if (!origin) {
      commonElements = recipeIDsByCategory;
    } else {
      commonElements = recipeIDsByOrigin.filter((id) =>
        recipeIDsByCategory.includes(id)
      );
    }

    if (commonElements.length === 0) {
      throw new Error("no recipes available :(");
    }
    const randomIDIndex = Math.floor(Math.random() * commonElements.length);
    return commonElements[randomIDIndex];

  } catch (error) {
    this.error = error.message;
    return null;
  }
}

async function fetchRecipeByID(id) {
  try {
    let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    let response = await fetch(url);
    let {meals} = await response.json();
    if (!meals) {
      throw new Error("Recipe not found :(");
    }
    this.recipe = meals[0]
  } catch (error) {
    this.error = error.message;
  }
}

// Main actions
async function generate({ category, origin }) {
  // Unfortunately, the API does not offer a direct method to retrieve a random recipe
  // by providing origin, category, or both simultaneously. However, it does support
  // fetching a random recipe and fetching all recipe IDs belonging to a specific origin
  // or category. To achieve the desired functionality, this function first fetches all
  // recipe IDs associated with the provided origin and all recipe IDs associated with
  // the provided category separately.
  //
  // Then, it identifies the recipe IDs that are common to both lists, indicating recipes
  // that belong to both the specified origin and category. From these shared IDs, a
  // random ID is selected. Finally, this ID is used to fetch the corresponding recipe
  // from the API.
  
  this.loading = true;
  this.error = "";

  const id = await getRandomRecipeID.call(this, { category, origin });
  if (id) {
    await fetchRecipeByID.call(this, id);
  }
  this.loading = false;
}

async function fetchOriginsAndCategories() {
  this.loading = true;
  this.error = "";
  await fetchOrigins.call(this);
  await fetchCategories.call(this);
  this.loading = false;
}



export const actions = {
  generate,
  fetchOriginsAndCategories,
};
