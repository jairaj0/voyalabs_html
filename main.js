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
  circles.forEach(function(circle) {
    circle.style.display = "block";
});

setTimeout(function () {
    circles.forEach(function(circle) {
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
    circle.style.scale = (len- index) / len;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.1;
    y += (nextCircle.y - y) * 0.1;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

const themeChanger = () => {
  const offsets = document.getElementById("theme-changer").getBoundingClientRect();

  document.body.style.backgroundColor = offsets.top < 0 ? "#fff":"#0E0E0E";
}


  window.addEventListener('scroll' , themeChanger);
  window.addEventListener('load' , themeChanger);

  const thumb = document.querySelector(".thumbnail");
  const video = document.querySelector(".video");

  thumb.addEventListener('click' , ()=> {
    video.innerHTML = `<iframe src="https://player.vimeo.com/video/764513434?color=ffffff&badge=0&title=0&byline=0&portrait=0&loop=1&autoplay=1&api=1" width="100%" height="100%" allow="autoplay" frameborder="0"></iframe>`
  })

  const pics = document.querySelectorAll(".animation_wrapper img");
  let animeData = [];

  const play = (elem , _class) => elem.classList.add(_class);
  const stop = (elem) => elem.classList.add('end');
  const resume = (elem) => elem.classList.remove('end');
  const reset = (elem , _class) => elem.classList.remove('end', _class);
  
  const stopHandler = (elem, i) => {
      stop(elem);
      elem.addEventListener("animationend", () => {
          reset(elem , `move${i}`);
          animeData[i] = null;
      }, false);
  }
  
  pics.forEach((ele, i) => {
      ele.addEventListener('mouseenter', () => {
          if (animeData[i] && animeData[i].startAnime) {
              resume(ele);
          } else {
              animeData[i] = { startAnime: true };
              play(ele , `move${i}`);
          }
      });
  
      ele.addEventListener('mouseleave', () => {
          if (animeData[i] && animeData[i].startAnime) {
              stopHandler(ele, i);
          }
      });
  });
  
  