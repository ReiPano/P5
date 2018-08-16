
var snakeObject;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(51);
    snakeObject = new snake(10);
    console.log(snakeObject);
}

function draw() {
    background(51);
    noFill();
    this.snakeObject.move();
}


function snake(_length) {
    this.length = _length;
    this.body = [];
    this.lastMove = 1;
    this.distance = 30;
    for(var i = 0; i < this.length; i++) {
        this.body.push(createVector(window.innerWidth/2, (i + 2) *30));
    }
}

snake.prototype.move = function() {
    stroke(255, 255, 255);
    strokeWeight(5);
    beginShape();
    for(var i = this.body.length - 1; i >= 0; i--) {
        vertex(this.body[i].x, this.body[i].y);
        if(i != 0) {
            this.body[i].x = this.body[i-1].x;
            this.body[i].y = this.body[i-1].y;
        }

        if(i == 0) {
            var nextMove = Math.floor(random(-2, 2));
            console.log(nextMove);
            while (nextMove == this.lastMove) {
                nextMove = Math.floor(random(-2, 2));

                if(nextMove == -2 && this.distanca < this.body[0].x) {
                    // return true;
                }
            
                else if (nextMove == -1 && this.distance < this.body[0].y) {
                    // return true;
                }
            
                else if (nextMove == 0 && this.distance < window.innerWidth - this.body[0].x){
                    // return true;
                }
            
                else if (nextMove == 1 && this.distance < window.innerHeight - this.body[0].y) {
                    // return true;
                }
                
                else {
                    nextMove = this.lastMove;
                }
            }

            switch(nextMove) {
                case -2: {
                    this.body[i].x -= this.distance;
                    this.lastMove = -2;
                    break;
                }
                case -1: {
                    this.body[i].y -= this.distance;
                    this.lastMove = -1;
                    break;
                }
                case 0: {
                    this.body[i].x += this.distance;
                    this.lastMove = 0;
                    break;
                }
                case 1: {
                    this.body[i].y += this.distance;
                    this.lastMove = 1;
                    break;
                }
            }
        }
    }
    endShape();
}

snake.prototype.checkIfCanMove = function(nextMove) {
    if(nextMove == -2 && this.distanca < this.body[0].x) {
        return true;
    }

    else if (nextMove == -1 && this.distance < this.body[0].y) {
        return true;
    }

    else if (nextMove == 0 && this.distance < window.innerWidth - this.body[0].x){
        return true;
    }

    else if (nextMove == -1 && this.distance < window.innerHeight - this.body[0].y) {
        return true;
    }
    
    else {
        return false;
    }
}