
let startsArray = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(51);
    for(let i = 0; i < 20; i++) {
        let starObject = new star(random(0, window.innerWidth), random(-window.innerHeight, 0));
        startsArray.push(starObject);
    }
    // filter( BLUR, 6 );
}

function draw() {
    background(0);
    startsArray.forEach(element => {
        element.show();
    });
}