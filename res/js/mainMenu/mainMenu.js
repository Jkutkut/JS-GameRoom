window.onload = () => {
	fetch("../res/db/games.json")
		.then(response => response.json())
		.then(json => loadGames(json));
}

function newGame(name, location, thumbnail, description) {
	return `<div class="game">
			<h3>${name}</h3>
			<a href="${location}">
				<img src="${thumbnail}" alt="Thumbnail ${name}">
			</a>
			<p>${description}</p>
			</div>`;
}

function loadGames(json) {
	// console.log(json);

	let gameSelector = document.getElementById("gameSelector");
	let games = json.games;

	let debugTh = games[2].thumbnail; // TODO DEBUG
	for (let game of games) {
		gameSelector.innerHTML += newGame(
			game.name,
			game.location,
			// `../${json.thumbnailLocation}/${game.thumbnail}`,
			`../${json.thumbnailLocation}${debugTh}`, // TODO DEBUG
			game.description
		);
	}
}