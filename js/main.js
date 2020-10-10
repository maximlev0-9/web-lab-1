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