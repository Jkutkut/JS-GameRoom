window.onload = () => {
	fetch("../res/db/games.json")
		.then(response => response.json())
		.then(json => loadGames(json));
}

function newGame(name, location, thumbnail, description) {
	console.log(name, location, thumbnail, description);
	return `<div class="game">
			<h3>${name}</h3>
			<a href="${location}">
				<img src="${thumbnail}" alt="Thumbnail ${name}">
			</a>
			<p>${description}</p>
			</div>`;
}

function loadGames(json) {
	let gameSelector = document.getElementById("gameSelector");
	let games = json.games;

	let link;
	for (let game of games) {
		if (game.runAsGame)
			link = `gameMenu.html?game=${game.url}`;
		else {
			if (game.url.startsWith("http"))
				link = game.url;
			else
				link = `../${json.gameLocation}${game.url}`;
		}
		gameSelector.innerHTML += newGame(
			game.name,
			link,
			`../${json.thumbnailLocation}/${game.thumbnail}`,
			game.description
		);
	}
}