let images = ["../img/ilian.jpg", "../img/tete1.jpg", "../img/tete2.jpg", "../img/tete3.jpg", "../img/tete4.jpg", "../img/tete5.jpg"];

let circle = document.getElementById("circle");
circle.style.backgroundImage = `url(${images[0]})`;

let min = document.getElementById("min");
let sec = document.getElementById("sec");
let minutes = 1;
let secondes = 00;
min.textContent = minutes;
sec.textContent = secondes;

let points = document.getElementById("points");
let best_points = document.getElementById("best");
let final_score = 0;
best_points.textContent = final_score;
let score = 0;
points.textContent = score;

let pad = 100;

let time = true;

circle.addEventListener("click", () => {
    pad -= 3;
    circle.style.padding = pad + "px";

    let img_random = Math.floor(Math.random() * (images.length - 0) + 0);
    circle.style.backgroundImage = `url(${images[img_random]})`;

    let top = Math.floor(Math.random() * (40 - 0) + 0);
    let bottom = Math.floor(Math.random() * (40 - 0) + 0);
    let left = Math.floor(Math.random() * (50 - 0) + 0);
    let right = Math.floor(Math.random() * (50 - 0) + 0);
    circle.style.marginTop = top + "%";
    circle.style.marginBottom = bottom + "%";
    circle.style.marginLeft = left + "%";
    circle.style.marginRight = right + "%";

    score ++;
    points.textContent = score;
    
    if (time) {
        timer();
        time = false;
    }
});

function timer () {
    let interv = setInterval(() => {
        if (secondes == 0 && minutes != 0) {
            minutes --;
            secondes = 60;
            sec.textContent = secondes;
            min.textContent = minutes;
        } else {
            secondes --;
            sec.textContent = secondes;
        }

        if (secondes == 0 && minutes == 0) {
            clearInterval(interv);
            if (score > final_score) {
                final_score = score;
                best_points.textContent = score;
            } else {
                best_points.textContent = final_score;
            }
            restart();
            setTimeout(() => {
                alert("Vous avez eu " + final_score + " points");
            }, 500);
        }
    }, 1000);
}


function restart () {
    score = 0;
    points.textContent = score;
    secondes = 0;
    minutes = 1;
    sec.textContent = secondes;
    min.textContent = minutes;
    pad = 100;
    circle.style.padding = pad + "px";
    circle.style.marginTop = 0 + "%";
    circle.style.marginBottom = 0 + "%";
    circle.style.marginLeft = 0 + "%";
    circle.style.marginRight = 0 + "%";
    time = true;
    i = 0;
}