let 
nav = [].map.call(document.getElementsByClassName("nav"), elem => elem),
header = document.getElementsByTagName("header")[0],
scaler = document.getElementById("scaler"),
articles = document.getElementsByTagName("article"),
footer = document.getElementsByTagName("footer")[0],
home = document.getElementById("home"),
svg = document.getElementById("svg"),
path = document.getElementById("path"),
pathLength = path.getTotalLength(),
multiplier = (screen.width)/(scaler.clientWidth),
scale;

window.addEventListener("wheel", wheel);
window.addEventListener("scroll", scroll);
window.addEventListener("resize", resize);
window.onload = resize();

function resize() {
    scale = (window.innerWidth-17)/(screen.width)*multiplier;
    scaler.style.transform = 'scale(' + scale + ')';
}

function scroll() {
    scale = (window.innerWidth-17)/(screen.width)*multiplier;
    userHeight = window.innerHeight;
    pathHeight = svg.clientHeight*scale;
    pathScale = pathLength/(pathHeight-userHeight);
    scrollScale = scrollY/(document.body.scrollHeight-document.body.offsetHeight);

    path.style.strokeDashoffset = pathLength-(scrollY*pathScale);
}

function wheel(evt) {(evt.deltaY >= 0) ? header.style.top = "-100" : header.style.top = "0";}

function navScroll(num) {
    (num<5) ? articles[num].scrollIntoView({behavior: "smooth", block: "center"}) 
            : footer.scrollIntoView({behavior: "smooth", block: "center"});
}

// function articles() {}
// function setData() {}
// function getData() {}
// function siteScroll() {}
