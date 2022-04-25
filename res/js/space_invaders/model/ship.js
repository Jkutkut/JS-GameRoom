class Ship extends PhysicsObject {
	static SRC = {
		body: null,
		propulsor: null
	};
	static V = 5;

	constructor(pos, size, angle) {
		super(pos, size, angle);
	}

	show() {
		this.showImg(Ship.SRC.body);
		this.showImg(Ship.SRC.propulsor, 0, 10);
	}

	move(x, y) {
		this.pos.add(x * Ship.V, y * Ship.V);
	}

	canMove(x, y, screenSize) {
		let newPos = this.pos.copy();
		newPos.add(x * Ship.V, y * Ship.V);
		return newPos.x >= 0 && newPos.x + this.size.x <= screenSize.x &&
			newPos.y >= 0 && newPos.y + this.size.y <= screenSize.y;
	}
}