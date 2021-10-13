// selecting the clock
const clockelement = document.querySelector(".clock");
// function showing the time
const tick = function () {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  // showing the clock on the screen

  const clockscreen = `<span>${h}</span>:
<span>${m}</span>:
<span>${s}</span>`;
  clockelement.innerHTML = clockscreen;
  // implementing the time interval
  setInterval(tick, 1000);
};
tick(); 

