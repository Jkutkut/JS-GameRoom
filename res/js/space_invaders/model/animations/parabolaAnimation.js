class EnemySpawnAnimation extends SpcInvAnimation {
	constructor(obj, initPos, midPos, finalPos) {
		super(obj);
		this.initPos = initPos;
		this.midPos = midPos;
		this.finalPos = finalPos;

		this.curve = this.curveGenerator(initPos, midPos, finalPos);
	}

	tick() {
		if (this.done)
			return;
		let n = this.curve.next();
		if (n.done) {
			this.done = true;
			return;
		}
		let p = n.value;
		this.obj.tp(p.x, p.y);
	}

	ended() {
		return this.done;
	}

	// Curved line logic
	getABC(ini, mid, fin) {
		let c1 = (ini.y - mid.y) / (ini.x - mid.x);
		let c2 = (mid.y - fin.y) / (mid.x - fin.x);
		let c3 = (ini.x * ini.x - mid.x * mid.x) / (ini.x - mid.x);
		let c4 = (mid.x * mid.x - fin.x * fin.x) / (mid.x - fin.x);

		let a = (c1 - c2) / (c3 - c4);
		let b = c1 - a * c3;
		return {
			a: a,
			b: b,
			c: ini.y - a * ini.x * ini.x - b * ini.x
		}
	}

	*curveGenerator(ini, mid, fin) {
		let abc = this.getABC(ini, mid, fin);
		let step = 1;

		let p = new p5.Vector(0, 0);
		for (p.x = ini.x; p.x <= fin.x; p.x += step) {
			p.y = abc.a * p.x * p.x + abc.b * p.x + abc.c;
			yield p;
		}
	}
}