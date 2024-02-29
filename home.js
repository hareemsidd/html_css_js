var circle = document.getElementById("circle");
var upbtn = document.getElementById("upbtn");
var downbtn = document.getElementById("downbtn");

var rotateValue = circle.style.transform;
var rotateSum;

upbtn.onclick = function()
{
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
downbtn.onclick = function()
{
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
let scrollcontainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollcontainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.deltaY;
    scrollcontainer.style.scrollBehavior = "auto";

});

nextBtn.addEventListener("click", () => {
    scrollcontainer.style.scrollBehavior = "smooth";

    scrollcontainer.scrollLeft += 900;
});
backBtn.addEventListener("click", () => {
    // scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft -= 900;
});
const goToBtn = document.querySelector(".goToBtn");
window.addEventListener("scroll", checkHeight);
function checkHeight(){
    if (window.scrollY > 200) {
        goToBtn.style.display = "flex";
    }else{
        goToBtn.style.display = "none";
    }
}

goToBtn.addEventListener("click" , () => {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
});