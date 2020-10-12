const OPEN_CLASSNAME = "open";

const nav = document.getElementById("nav-id");
// const texts = document.getElementsByClassName("text-near-image")
const body = document.getElementsByTagName("body")

function toggleMenu() {
    if (nav.classList.contains(OPEN_CLASSNAME)) {
        nav.classList.remove(OPEN_CLASSNAME);
        // body.forEach(element => {
        //     element.classList.remove(OPEN_CLASSNAME);
        // });
        body[0].classList.remove(OPEN_CLASSNAME)
    } else {
        nav.classList.add(OPEN_CLASSNAME);
        // texts.forEach(element => {
        //     element.classList.add(OPEN_CLASSNAME);
        // });
        body[0].classList.add(OPEN_CLASSNAME)

    }
}



// let start = Date.now(); // remember start time

// let timer = setInterval(function() {
//     // how much time passed from the start?
//     let timePassed = Date.now() - start;

//     if (timePassed >= 2000) {
//         clearInterval(timer); // finish the animation after 2 seconds
//         return;
//     }

//     // draw the animation at the moment timePassed
//     draw(timePassed);

// }, 20);

// // as timePassed goes from 0 to 2000
// // left gets values from 0px to 400px
// const selects = document.getElementsByClassName("select")

// for (let counter = 0; counter < selects.length; counter++) {
//     selects[counter].style.position = 'relative';
// }

// function draw(timePassed) {
//     for (let counter = 0; counter < selects.length; counter++) {
//         selects[counter].style.left = 99 - timePassed / 20 + 'px';
//     }
// }