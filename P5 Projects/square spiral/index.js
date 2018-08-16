
const step = 30;
let spiral = [];
let bigger = 0;
let addition = 1;

let r;
let g;
let b;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(51);
    let iterration = 2;
    let number = 1;
    let move = 0;
    // 0 -> Djathats
    // 1 -> Posht
    // 2 -> Majtas
    // 3 -> Lart

    r = random(150, 256);
    g = random(150, 256);
    b = random(150, 256);

    const startPoz = createVector(window.innerWidth / 2, window.innerHeight / 2 + 100);
    let currPoz = createVector(window.innerWidth / 2, window.innerHeight / 2 + 100);

    spiral.push(startPoz);

    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < iterration; j++) {
            for (let k = 0; k < number; k++) {
                if (move == 0) {
                    currPoz = createVector(currPoz.x + step, currPoz.y);
                    spiral.push(currPoz);
                    // move ++;
                }

                if (move == 1) {
                    currPoz = createVector(currPoz.x, currPoz.y + step);
                    spiral.push(currPoz);
                    // move ++;
                }

                if (move == 2) {
                    currPoz = createVector(currPoz.x - step, currPoz.y);
                    spiral.push(currPoz);
                    // move ++;
                }

                if (move == 3) {
                    currPoz = createVector(currPoz.x, currPoz.y - step);
                    spiral.push(currPoz);
                    // move ++;
                }
            }
            move++;
            if (move > 3) {
                move = 0;
            }
        }
        number++;
        // if(number == 3) {
        //     iterration ++;
        // }
    }

    spiral.pop();
    frameRate(10);

    // console.log(spiral);
}

function draw() {
    background(51);

    for (let i = 0; i < spiral.length; i++) {
        if (bigger == i) {
            fill(r, g, b);
            ellipse(spiral[i].x, spiral[i].y, step / 2, step / 2);
        }
        else {
            fill(255);
            ellipse(spiral[i].x, spiral[i].y, step / 3, step / 3);
        }
    }

    bigger += 1;

    if (bigger >= spiral.length) {
        addition = -1;
        r = random(150, 256);
        g = random(150, 256);
        b = random(150, 256);
    }

    if (bigger < 0) {
        addition = 1;
        r = random(150, 256);
        g = random(150, 256);
        b = random(150, 256);
    }

}