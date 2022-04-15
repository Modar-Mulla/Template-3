// Counter
let countDownDate = new Date("Dec 31,2023 23:59:59").getTime();

function countdown() {
  let dateNow = new Date().getTime();
  let difference = countDownDate - dateNow;

  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.querySelector("[data-unit='day']").innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector("[data-unit='hour']").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector("[data-unit='min']").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector("[data-unit='sec']").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (difference < 0) {
    clearInterval(counter);
  }
}
let counter = setInterval(countdown, 1000);

let skillsSection = document.querySelector(".our-skills");
let progressLines = document.querySelectorAll(".prog span");

let statsSection = document.querySelector(".stats ");
let statsBoxes = document.querySelectorAll(".stats .box .number");
let started = false;
// Skill Progress Animation
// Stats Increment Animation

window.onscroll = () => {
  if (window.scrollY >= skillsSection.offsetTop - 200) {
    progressLines.forEach((line) => {
      line.style.width = line.dataset.width;
    });
  }
  if (window.scrollY >= statsSection.offsetTop) {
    if (started == false) {
      statsBoxes.forEach((box) => numberIncrement(box));
    }
    started = true;
  }
};

function numberIncrement(el) {
  let goal = el.dataset.number;
  let iteration = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(iteration);
    }
  }, 2000 / goal);
}
