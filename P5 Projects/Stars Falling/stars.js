
function star(_x, _y) {

    this.x = _x;
    this.y = _y;
    this.angle = random(1,5);
    this.red = random(0,256);
    this.blue = random(0,256);
    this.green = random(0,256);
}

star.prototype.fall = function () {
    this.y += 5 * Math.sign(this.y - window.innerHeight/2);
    if(this.x > window.innerWidth/2) {
        this.x += this.angle;
    }

    else {
        this.x-= this.angle;
    }

    if (this.y > window.innerHeight + 50 || this.x < -15 || this.x > window.innerWidth + 25) {
        this.y = random(window.innerHeight/2 - 50 , window.innerHeight/2 + 50);
        this.x = random(window.innerWidth/2 - 50, window.innerWidth/2 + 50);
    }
}

star.prototype.show = function () {
    fill(this.red, this.green, this.blue);
    stroke(this.red, this.green, this.blue);
    const minSize = 3.5;
    const maxSize = 5.5;
    const actualSize = map(minSize * Math.abs(this.y - window.innerHeight / 2) * 0.01 , minSize, maxSize, minSize, maxSize);

    ellipse(this.x, this.y, actualSize, actualSize);

    this.fall();
    // fall();
}