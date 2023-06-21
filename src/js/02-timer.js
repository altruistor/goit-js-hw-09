// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from "notiflix";

const inputEl = document.querySelector("#datetime-picker");
const btn = document.querySelector("button");
const dayEl = document.querySelector('span[data-days]');
const hourEl = document.querySelector('span[data-hours]');
const minuteEl = document.querySelector('span[data-minutes]');
const secondEl = document.querySelector('span[data-seconds]');
const divTimer = document.querySelector("div");
// const divValue = document.querySelector(".field");
// const divLabel = document.querySelector(". label");




divTimer.style.display = "flex";
// divValue.style.color = "red";





btn.setAttribute('disabled', "");

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < new Date()) {
            Notiflix.Notify.failure("Please choose a date in the future")
        } else {
            btn.disabled = false
        }
    }
};

const flatpickrEl = flatpickr(inputEl, options);
let timerId = null;
btn.addEventListener('click', () => {
    timerId = setInterval(() => {
        const currentTime = new Date();
        const deltaTime = flatpickrEl.selectedDates[0].getTime() - currentTime.getTime();
        convertMs(deltaTime);
    }, 1000);
    

});

function convertMs(ms) {

    function addLeadingZero(value) {
        return `${value}`.padStart(2, '0');
    }

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    if (days === '00' && hours === '00' && minutes === '00' && seconds === '00') {
        clearTimeout(timerId);
    }

    dayEl.textContent = days;
    hourEl.textContent = hours;
    minuteEl.textContent = minutes;
    secondEl.textContent = seconds;
    return { days, hours, minutes, seconds };
};