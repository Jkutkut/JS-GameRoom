var db;

window.onload = () => {
	fetch("../res/db/wordle/wordle.json")
		.then(response => response.json())
		.then((json) => {db = json});
}