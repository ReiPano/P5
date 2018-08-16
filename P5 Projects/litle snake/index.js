
var snakeObject = [];
var moves = [-2, -1, 1, 2];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight * 0.7);
    background(51);
    for(var i = 0; i < 3; i ++) {
        snakeObject.push(new snake(100));
    }
    console.log(snakeObject);
    frameRate(30);
}

function draw() {
    background(0);
    noFill();
    snakeObject.forEach(element => {
        element.move();
    });
}


function snake(_length) {
    this.length = _length;
    this.body = [];
    this.lastMove = -1;
    this.distance = 30;
    this.r = random(150,255);
    this.g = random(150,255);
    this.b = random(150,255);
    for (var i = 0; i < this.length; i++) {
        this.body.push(createVector(window.innerWidth / 2, (i + 2) * 30));
    }
}

snake.prototype.move = function () {
    stroke(this.r, this.g, this.b);
    strokeWeight(5);
    beginShape();
    for (var i = this.body.length - 1; i >= 0; i--) {
        vertex(this.body[i].x, this.body[i].y);
        if (i != 0) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }

        if (i == 0) {
            var nextMove = -1 * this.lastMove;
            while (this.lastMove == -1 * nextMove) {

                randomIndex = Math.floor(random(0, 4));
                nextMove = moves[randomIndex];

                if (this.lastMove == -1 * nextMove) {
                    // continue;
                }

                else {
                    switch (nextMove) {
                        // MP
                        case -4: {
                            if (this.body[i].y + this.distance < window.innerHeight * 0.7 - 10 && this.body[i].x - this.distance > 10) {
                                const requestedPoz = createVector(this.body[i].x - this.distance, this.body[i].y + this.distance);
                                let canMove = this.checkIfCanMove(requestedPoz);
                                if (canMove) {
                                    this.body[i].x -= this.distance;
                                    this.body[i].y += this.distance;
                                }
                                else {
                                    nextMove = -1 * this.lastMove;
                                }
                            }
                            else {
                                nextMove = -1 * this.lastMove;
                            }

                            break;
                        }
                        // ML
                        case -3: {
                            if (this.body[i].y - this.distance > 10 && this.body[i].x - this.distance > 10) {
                                const requestedPoz = createVector(this.body[i].x - this.distance, this.body[i].y - this.distance);
                                let canMove = this.checkIfCanMove(requestedPoz);
                                if (canMove) {
                                    this.body[i].x -= this.distance;
                                    this.body[i].y -= this.distance;
                                }
                                else {
                                    nextMove = -1 * this.lastMove;
                                }
                            }
                            else {
                                nextMove = -1 * this.lastMove;
                            }

                            break;
                        }

                        case -2: {
                            // M
                            if (this.body[i].x - this.distance < 10) {
                                nextMove = -1 * this.lastMove;
                            }
                            else {
                                const requestedPoz = createVector(this.body[i].x - this.distance, this.body[i].y);
                                let canMove = this.checkIfCanMove(requestedPoz);
                                if (canMove) {
                                    this.body[i].x -= this.distance;
                                }
                                else {
                                    nextMove = -1 * this.lastMove;
                                }
                            }
                            break;
                        }
                        case -1: {
                            // L
                            if (this.body[i].y - this.distance < 10) {
                                nextMove = -1 * this.lastMove;
                            }
                            else {
                                const requestedPoz = createVector(this.body[i].x , this.body[i].y - this.distance);
                                let canMove = this.checkIfCanMove(requestedPoz);
                                if (canMove) {
                                    this.body[i].y -= this.distance;
                                }
                                else {
                                    nextMove = -1 * this.lastMove;
                                }
                            }
                            break;
                        }
                        case 1: {
                            // P
                            if (this.body[i].y + this.distance > window.innerHeight * 0.7 - 10) {
                                nextMove = -1 * this.lastMove;
                            }
                            else {
                                const requestedPoz = createVector(this.body[i].x, this.body[i].y + this.distance);
                                let canMove = this.checkIfCanMove(requestedPoz);
                                if (canMove) {
                                    this.body[i].y += this.distance;
                                }
                                else {
                                    nextMove = -1 * this.lastMove;
                                }
                            }
                            break;
                        }
                        case 2: {
                            // D
                            if (this.body[i].x + this.distance > window.innerWidth - 10) {
                                nextMove = -1 * this.lastMove;
                            }
                            else {
                                const requestedPoz = createVector(this.body[i].x + this.distance, this.body[i].y);
                                let canMove = this.checkIfCanMove(requestedPoz);
                                if (canMove) {
                                    this.body[i].x += this.distance;
                                }
                                else {
                                    nextMove = -1 * this.lastMove;
                                }
                            }
                            break;
                        }
                        // DP
                        case 3: {
                            if (this.body[i].x + this.distance < window.innerWidth - 10 && this.body[i].y + this.distance < window.innerHeight * 0.7 - 10) {
                                const requestedPoz = createVector(this.body[i].x + this.distance, this.body[i].y + this.distance);
                                let canMove = this.checkIfCanMove(requestedPoz);
                                if (canMove) {
                                    this.body[i].x += this.distance;
                                    this.body[i].y += this.distance;
                                }
                                else {
                                    nextMove = -1 * this.lastMove;
                                }
                            }
                            else {
                                nextMove = -1 * this.lastMove;
                            }
                            break;
                        }

                        // DL
                        case 4: {
                            if (this.body[i].x + this.distance < window.innerWidth - 10 && this.body[i].y - this.distance > 10) {
                                const requestedPoz = createVector(this.body[i].x + this.distance, this.body[i].y - this.distance);
                                let canMove = this.checkIfCanMove(requestedPoz);
                                if (canMove) {
                                    this.body[i].x += this.distance;
                                    this.body[i].y -= this.distance;
                                }
                                else {
                                    nextMove = -1 * this.lastMove;
                                }
                            }
                            else {
                                nextMove = -1 * this.lastMove;
                            }
                            break;
                        }
                    }
                }
            }

            this.lastMove = nextMove;
        }
    }
    endShape();
}

snake.prototype.checkIfCanMove = function (nextPozCord) {
    // this.body.forEach(element => {
    //     if (nextPozCord.x == element.x && nextPozCord.y == element.y) {
    //         console.log("yes");
    //         return false;
    //     }
    // });
    return true;
}