export function setSearchedMeals (state, data) {
	state.searchedMeals = data.meals;
}

export function setMealsByLetter (state, data) {
	state.mealsByLetter = data.meals;
}

export function setMealsByIngredient (state, data) {
	state.mealsByIngredient = data.meals;
}
