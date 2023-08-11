const setIngredientList = (state, data) => {
	state.ingredientList.data = data.meals;
};

const setIngredientListLoader = (state, data) => {
	state.ingredientList.isLoading = data;
};

const setMealsByIngredient = (state, data) => {
	state.mealsByIngredient.data = data.meals;
};

const setMealsByIngredientLoader = (state, data) => {
	state.mealsByIngredient.isLoading = data;
};

const setMealsByLetter = (state, data) => {
	state.mealsByLetter.data = data.meals;
};

const setMealsByLetterLoader = (state, data) => {
	state.mealsByLetter.isLoading = data;
};

const setSearchedMeals = (state, data) => {
	state.searchedMeals.data = data.meals;
};

const setSearchedMealsLoader = (state, data) => {
	state.searchedMeals.isLoading = data;
};

export {
	setIngredientList,
	setIngredientListLoader,
	setMealsByIngredient,
	setMealsByIngredientLoader,
	setMealsByLetter,
	setMealsByLetterLoader,
	setSearchedMeals,
	setSearchedMealsLoader
};
