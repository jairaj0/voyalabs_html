// Cursor

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
const svg = document.querySelector(".cursor img");

svg.style.visibility = "hidden";

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX - 12;
  coords.y = e.clientY - 12;

  svg.style.visibility = "hidden";
  circles.forEach(function (circle) {
    circle.style.display = "block";
  });

  setTimeout(function () {
    circles.forEach(function (circle) {
      circle.style.display = "none";
      svg.style.visibility = "visible";
      svg.style.display = "block";
    });
  }, 1000); // Adjust the delay as needed
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x + "px";
    circle.style.top = y + "px";

    const len = circles.length * 2;
    circle.style.scale = ((len - index) / len) * window.innerWidth / 1400;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.1;
    y += (nextCircle.y - y) * 0.1;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

// Theme changer

const themeChanger = () => {
  const offsets = document
    .getElementById("theme-changer")
    .getBoundingClientRect();

  document.body.style.backgroundColor = offsets.top < 0 ? "#fff" : "#0E0E0E";
};

window.addEventListener("scroll", themeChanger);
window.addEventListener("load", themeChanger);

// Video 

const video = document.querySelector(".video");

video.addEventListener("click", () => {
  video.innerHTML = `<iframe src="https://player.vimeo.com/video/764513434?color=ffffff&badge=0&title=0&byline=0&portrait=0&loop=1&autoplay=1&api=1" 
    frameborder="0" 
    allow="autoplay; fullscreen" 
    allowfullscreen>
</iframe>`;
video.classList.add("video-added");
});

const pics = document.querySelectorAll(".animation_wrapper img");
let animeData = [];

const play = (elem, _class) => elem.classList.add(_class);
const stop = (elem) => elem.classList.add("end");
const resume = (elem) => elem.classList.remove("end");
const reset = (elem, _class) => elem.classList.remove("end", _class);

const stopHandler = (elem, i) => {
  stop(elem);
  elem.addEventListener(
    "animationend",
    () => {
      reset(elem, `move${i}`);
      animeData[i] = null;
    },
    false
  );
};

// Pics animation

pics.forEach((ele, i) => {
  ele.addEventListener("mouseenter", () => {
    if (animeData[i] && animeData[i].startAnime) {
      resume(ele);
    } else {
      animeData[i] = { startAnime: true };
      play(ele, `move${i}`);
    }
  });

  ele.addEventListener("mouseleave", () => {
    if (animeData[i] && animeData[i].startAnime) {
      stopHandler(ele, i);
    }
  });
});

// ******** Responsive ********

const nav = document.querySelector("nav");
const hero = document.querySelector(".hero");
const partners = document.querySelector(".partners");
const skills = document.querySelector(".skills");
const feelOurVibe = document.querySelector(".feelOurVibe");
const mission = document.querySelector(".mission");
const feelTheReel = document.querySelector(".feelTheReel");
const experts = document.querySelector(".experts");
const footer = document.querySelector("footer");
const menuButton = document.querySelector(".menuButton");

const _cursor = document.querySelector(".cursor");

const responsive = () => {
  const _innerWidth = window.innerWidth;

  if (_innerWidth <= 640) {
    nav.style.zoom = 1;
    hero.style.zoom = _innerWidth / 640;
    partners.style.zoom = _innerWidth / 640;
    skills.style.zoom = (_innerWidth / 640) * 1.5;
    feelOurVibe.style.zoom = (_innerWidth / 640) * 1.5;
    mission.style.zoom = (_innerWidth / 640) * 1.5;
    feelTheReel.style.zoom = (_innerWidth / 640) ;
    experts.style.zoom = (_innerWidth / 640) * 1.6 ;
    footer.style.zoom = (_innerWidth / 640) * 1.3 ;
    menuButton.style.zoom = (_innerWidth / 640) * 1.3 ;

    _cursor.style.display = "none";
  } else if (_innerWidth < 900) {
    //  900 > case < 640
    nav.style.zoom = _innerWidth / 900;
    hero.style.zoom = 1;
    partners.style.zoom = 1;
    skills.style.zoom = _innerWidth / 900;
    feelOurVibe.style.zoom = (_innerWidth / 900) * 1.2;
    mission.style.zoom = _innerWidth / 900;
    feelTheReel.style.zoom = _innerWidth / 900;
    experts.style.zoom = _innerWidth / 900;
    footer.style.zoom = _innerWidth / 900;
  } else if (_innerWidth <= 1200) {
    //  1200 > case < 900
    nav.style.zoom = _innerWidth / 1200 + 0.3;
    hero.style.zoom = (_innerWidth / 1200) * 1.4;
    partners.style.zoom = (_innerWidth / 1200) * 1.4;
    skills.style.zoom = (_innerWidth / 1200) * 1.4;
    feelOurVibe.style.zoom = (_innerWidth / 1200) * 1.6;
    mission.style.zoom = (_innerWidth / 1200) * 1.4;
    feelTheReel.style.zoom = _innerWidth / 1200;
    experts.style.zoom = _innerWidth / 1200 * 1.4;
    footer.style.zoom = _innerWidth / 1200 * 1.3;
  } else if (_innerWidth <= 1400) {
    //  1400 > case < 1200
    nav.style.zoom = _innerWidth / 1400;
    hero.style.zoom = _innerWidth / 1400 - 0.1;
    partners.style.zoom = _innerWidth / 1400 - 0.1;
    skills.style.zoom = _innerWidth / 1400;
    feelOurVibe.style.zoom = _innerWidth / 1400;
    mission.style.zoom = _innerWidth / 1400;
    feelTheReel.style.zoom = _innerWidth / 1400;
    experts.style.zoom = _innerWidth / 1400;
    footer.style.zoom = _innerWidth / 1400;
  } else {
    // over 1400 px
    nav.style.zoom = _innerWidth / 1400;
    hero.style.zoom = (_innerWidth / 1400) * 0.9;
    partners.style.zoom = _innerWidth / 1400;
    skills.style.zoom = _innerWidth / 1400;
    feelOurVibe.style.zoom = _innerWidth / 1400;
    mission.style.zoom = _innerWidth / 1400;
    feelTheReel.style.zoom = _innerWidth / 1400;
    experts.style.zoom = _innerWidth / 1400;
    footer.style.zoom = _innerWidth / 1400;

  }
};

window.addEventListener("resize", ()=>{
  responsive()
  closeHandler()
});
window.addEventListener("load", responsive);

// Menubar

const close = document.querySelector('.close');
const closeWrapper = document.querySelector('.closeWrapper');

const openHandler = () => {
  nav.style.right = "0";
  closeWrapper.style.display = "block";
  document.documentElement.style.overflow = 'hidden';
}

const closeHandler = () => {
  nav.style.right = "-100%";
  closeWrapper.style.display = "none";
  document.documentElement.style.overflow = 'auto';
}

close.addEventListener("click" , closeHandler)
menuButton.addEventListener("click" , openHandler)
closeWrapper.addEventListener("click" , closeHandler)
nav.querySelectorAll("*").forEach(ele => {
  ele.addEventListener("click" , closeHandler)
});


// onScroll animation

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    }else{
      entry.target.classList.remove('show')
    }
  })
})

const hiddenElement = document.querySelectorAll("p");
const hiddenElement1 = document.querySelectorAll("h1");
const hiddenElement2 = document.querySelectorAll("h2");
const hiddenElement3 = document.querySelectorAll("h3");
const hiddenElement4 = document.querySelectorAll("a");
const hiddenElement5 = document.querySelectorAll("button");
hiddenElement.forEach((el)=>observer.observe(el));
hiddenElement1.forEach((el)=>observer.observe(el));
hiddenElement2.forEach((el)=>observer.observe(el));
hiddenElement3.forEach((el)=>observer.observe(el));
hiddenElement4.forEach((el)=>observer.observe(el));
hiddenElement5.forEach((el)=>observer.observe(el));