const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function startColorSwitch() {
  intervalId = setInterval(() => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
  }, 1000);

 
  startButton.disabled = true;
}

function stopColorSwitch() {
  clearInterval(intervalId);

 
  startButton.disabled = false;
}

startButton.addEventListener('click', startColorSwitch);
stopButton.addEventListener('click', stopColorSwitch);