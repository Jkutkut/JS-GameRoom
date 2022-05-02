class BasicAtackEnemyAnimation extends ScpInvAnimation {
	constructor(obj, initPos, midPos, finalPos) {
		super(obj, Infinity, Infinity);
		this.initPos = initPos;
		this.midPos = midPos;
		this.finalPos = finalPos;
		this.speed = speed;

		this.curve = this.curveGenerator(initPos, midPos, finalPos);
	}

	tick() {
		super.tick();
		this.obj.tp(this.curve.next().value);
	}

	// Curved line logic
	getABC(ini, mid, fin) {
		let c1 = (ini.y - mid.y) / (ini.x - mid.x);
		let c2 = (mid.y - fin.y) / (mid.x - fin.x);
		let c3 = (ini.x * ini.x - mid.x * mid.x) / (ini.x - mid.x);
		let c4 = (mid.x * mid.x - fin.x * fin.x) / (mid.x - fin.x);
		return {
			a: (c1 - c2) / (c3 - c4),
			b: c1 - a * c3,
			c: ini.y - a * ini.x * ini.x - b * ini.x
		}
	}

	*curveGenerator(ini, mid, fin) {
		let abc = this.getABC(ini, mid, fin);
		let step = 0.01;

		let p = new p5.Vector(0, 0);
		for (p.x = ini.x; p.x <= fin.x; p.x += step) {
			p.y = abc.a * x * x + abc.b * x + abc.c;
			yield p;
		}
	}
}