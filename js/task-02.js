const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');
const arrIngredients = [];

ingredients.forEach(ingredient => {
	const item = document.createElement('li');
	item.className = 'item';
	item.textContent = ingredient;
	arrIngredients.push(item);

})


listIngredients.append(...arrIngredients);
