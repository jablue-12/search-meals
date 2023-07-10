import axiosClient from '../axiosClient';

const fetchIngredientList = ({ commit }) => {
	commit('setIngredientListLoader', true);
	axiosClient.get('list.php?i=list').then(({ data }) => {
		commit('setIngredientList', data);
		commit('setIngredientListLoader', false);
	});
};
const searchMeals = ({ commit }, keyword) => {
	commit('setSearchedMealsLoader', true);
	axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
		commit('setSearchedMeals', data);
		commit('setSearchedMealsLoader', false);
	});
};

const searchMealsByIngredient = ({ commit }, ingredient) => {
	commit('setMealsByIngredientLoader', true);
	axiosClient.get(`filter.php?i=${ingredient}`).then(({ data }) => {
		commit('setMealsByIngredient', data);
		commit('setMealsByIngredientLoader', false);
	});
};

const searchMealsByLetter = ({ commit }, letter) => {
	commit('setMealsByLetterLoader', true);
	axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
		commit('setMealsByLetter', data);
		commit('setMealsByLetterLoader', false);
	});
};

export {
	fetchIngredientList,
	searchMeals,
	searchMealsByIngredient,
	searchMealsByLetter
};
