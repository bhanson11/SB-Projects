const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = []
	results = fruit.filter(fruit => fruit.toLowerCase().includes(str.toLowerCase()));
	return results;
}

function searchHandler(e) {
	let results = search(input.value);
	showSuggestions(results, input.value); //console.log(results) gave me the results with each key up. So instead, now call the showSuggestions function with two parameters, the second being the input value in the search bar
}

function showSuggestions(results, inputVal) {
	if (inputVal === input.value) {
		suggestions.innerHTML = '';
		for (let i = 0; i < results.length; i++) { //here we loop over the results from the keystrike, and add those as li elements that we are creating and appending it to suggestions
			let li = document.createElement('li');
			li.textContent = results[i];
			suggestions.appendChild(li);
		}
	}
}

function useSuggestion(e) {
	// TODO
	if (e.target.tagName === "LI") {
		input.value = e.target.textContent;
		suggestions.style.display = 'none';
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);