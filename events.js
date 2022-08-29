// selecting elements for the slider
const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const interval = 5000;
let slideInterval;

function nextSlide() {
  //getting current class
  const current = document.querySelector(".current");
  //remove current class
  current.classList.remove("current");
  //check for prev slide
  if (current.nextElementSibling) {
    //add prev
    current.nextElementSibling.classList.add("current");
  } else {
    //add current to start
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"), 200);
}
function previouSlide() {
  //getting current class
  const current = document.querySelector(".current");
  //remove current class
  current.classList.remove("current");
  //check for prev slide
  if (current.previousElementSibling) {
    //add prev
    current.previousElementSibling.classList.add("current");
  } else {
    //add current to start
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"), 200);
}

// button events
next.addEventListener("click", (e) => {
  nextSlide();
  // resetting the interval when we use the arrow to slide
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, interval);
  }
});
prev.addEventListener("click", (e) => {
  previouSlide();
  // resetting the interval when we use the arrow to slide
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, interval);
  }
});
// auto slide
if (auto) {
  // run next slide at interval time
  slideInterval = setInterval(nextSlide, interval);
}
let city = "Bamako ";
// getting the data from the api url
$.getJSON(
  "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&APPID=a246af4c313e216f41ca284e4cdea00b",
  function (data) {
    console.log(data);
    let icon =
      "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    // console.log(icon);
    $(".icon").attr("src", icon);
    let temp = Math.floor(data.main.temp);
    $(".temp").append(temp);
    let weather = data.weather[0].main;
    $(".weather").append(weather);
  }
);

const event1 = document.getElementById("1");
const event2 = document.getElementById("2");
const event3 = document.getElementById("3");
const detail1 = document.querySelector(".detail1");
const detail2 = document.querySelector(".detail2");
const detail3 = document.querySelector(".detail3");

event1.addEventListener("mouseover", function () {
  detail1.classList.remove("hidden");
});
event1.addEventListener("mouseout", function () {
  detail1.classList.add("hidden");
});
event2.addEventListener("mouseover", function () {
  detail2.classList.remove("hidden");
});
event2.addEventListener("mouseout", function () {
  detail2.classList.add("hidden");
});
event3.addEventListener("mouseover", function () {
  detail3.classList.remove("hidden");
});
event3.addEventListener("mouseout", function () {
  detail3.classList.add("hidden");
});

// event1.addEventListener("mouseover", showDetail(detail1));
// event1.addEventListener("mouseout", hideDetail(detail1));

// for (let i = 0; i < events.length; i++) {
//   events[i].addEventListener("mouseover", showDetail);
//   events[i].addEventListener("mouseout", hideDetail);
// }

// events.addEventListener("mouseover", showDetail);
// events.addEventListener("mouseout", hideDetail);
// const events = document.querySelector(".event");
// const icon = document.querySelector(".icon");
// const temp = document.querySelector(".temp");
// const weather = document.querySelector(".weather");
// const desc = document.querySelector(".desc");
// const date = document.querySelector(".date");
// function showDetail() {
//   icon.classList.remove("hidden");
//   temp.classList.remove("hidden");
//   weather.classList.remove("hidden");
//   desc.classList.remove("hidden");
//   date.classList.remove("hidden");
// }
// function hideDetail() {
//   icon.classList.add("hidden");
//   temp.classList.add("hidden");
//   weather.classList.add("hidden");
//   desc.classList.add("hidden");
//   date.classList.add("hidden");
// }
// const icon = document.querySelectorAll(".icon");
// const temp = document.querySelectorAll(".temp");
// const weather = document.querySelectorAll(".weather");
// const desc = document.querySelectorAll(".desc");
// const date = document.querySelectorAll(".date");
// function showDetail() {
//   for (let i = 0; i < icon.length; i++) icon[i].classList.remove("hidden");
//   for (let i = 0; i < temp.length; i++) temp[i].classList.remove("hidden");
//   for (let i = 0; i < weather.length; i++)
//     weather[i].classList.remove("hidden");
//   for (let i = 0; i < desc.length; i++) desc[i].classList.remove("hidden");
//   for (let i = 0; i < date.length; i++) date[i].classList.remove("hidden");
// }
// function hideDetail() {
//   for (let i = 0; i < icon.length; i++) icon[i].classList.add("hidden");
//   for (let i = 0; i < temp.length; i++) temp[i].classList.add("hidden");
//   for (let i = 0; i < weather.length; i++) weather[i].classList.add("hidden");
//   for (let i = 0; i < desc.length; i++) desc[i].classList.add("hidden");
//   for (let i = 0; i < date.length; i++) date[i].classList.add("hidden");
// }
