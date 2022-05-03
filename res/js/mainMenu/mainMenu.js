window.onload = () => {
	fetch("../res/db/games.json")
		.then(response => response.json())
		.then(json => loadGames(json));
}

function loadGames(json) {
	console.log(json);
}