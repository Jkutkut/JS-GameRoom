class BasicAtackEnemyAnimation extends ScpInvAnimation {
	constructor(obj, initPos, finalPos, speed) {
		super(obj, Infinity, Infinity);
		this.initPos = initPos;
		
		this.finalPos = finalPos;
		this.speed = speed;
	}
}