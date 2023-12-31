import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '@components/DefaultLayout.vue';
import ErrorLayout from '@components/ErrorLayout.vue';
import GuestLayout from '@components/GuestLayout.vue';
import Home from '@views/Home.vue';
import Ingredients from '@views/Ingredients.vue';
import MealDetails from '@views/MealDetails.vue';
import MealsByIngredient from '@views/MealsByIngredient.vue';
// import MealsByLetter from '@views/MealsByLetter.vue';
import MealsByName from '@views/MealsByName.vue';

const routes = [
	{
		path: '/',
		name: 'defaultLayout',
		component: DefaultLayout,
		children: [
			{
				path: '/',
				name: 'home',
				component: Home
			},
			{
				path: '/ingredients',
				name: 'ingredients',
				component: Ingredients
			},
			{
				path: '/by-ingredient/:ingredient',
				name: 'byIngredient',
				component: MealsByIngredient
			},
			// * Deleted temporarily to have a better spacing when used in mobile
			// {
			// path: '/by-letter/:letter?',
			// name: 'byLetter',
			// component: MealsByLetter
			// },
			{
				path: '/by-name/:name?',
				name: 'byName',
				component: MealsByName
			},
			{
				path: '/meal/:id',
				name: 'mealDetails',
				component: MealDetails
			}
		]
	},
	{
		path: '/guest',
		name: 'guestLayout',
		component: GuestLayout
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'errorLayout',
		component: ErrorLayout
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
