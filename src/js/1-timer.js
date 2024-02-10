import flatpickr from 'flatpickr';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'flatpickr/dist/flatpickr.min.css';

const startButton = document.querySelector('button');
const inputData = document.querySelector('input#datetime-picker');
const daysData = document.querySelector('[data-days]');
const hoursData = document.querySelector('[data-hours]');
const minutesData = document.querySelector('[data-minutes]');
const secondsData = document.querySelector('[data-seconds]');
const timer = document.querySelector(".timer");

let userSelectedDate;
let TimerOn = false;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      userSelectedDate = selectedDates[0];
      if (userSelectedDate < Date.now()) {
        iziToast.error({
          message: 'Please choose a date in the future',
          position: 'topRight',
        });
        startButton.disabled = true;
      } else {
        startButton.disabled = false;
      }
    },
  };

  startButton.disabled = true;

let countdownInt; 

function startTimer() {

if(TimerOn) {
return;
}
TimerOn = true;
countdownInt = setInterval(updateTimer , 1000 , userSelectedDate)
startButton.disabled = true;


};

function updateTimer(endDate) {

const currentDate = new Date();
const remainTime = endDate - currentDate;
const { days, hours, minutes, seconds } = convertMs(remainTime);

if (!isNaN(days) && !isNaN(hours) && !isNaN(minutes) && !isNaN(seconds)) {
    daysData.textContent = addLeadingZero(days);
    hoursData.textContent = addLeadingZero(hours);
    minutesData.textContent = addLeadingZero(minutes);
    secondsData.textContent = addLeadingZero(seconds);
  }

  if (remainTime <= 0) {
    stopTimer();
  }
};

startButton.addEventListener("click", () => {
if(userSelectedDate && !TimerOn) {
    startTimer();
}

});

function stopTimer() {
if(countdownInt) {

        clearTimeout(countdownInt);
daysData.textContent = '00';
hoursData.textContent = '00';
minutesData.textContent = '00'
secondsData.textContent = '00'

countdownInt = null;
TimerOn = false;
startButton.disabled = false;


}
};

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  };


///////////////////////////////////////////////////////////////////////////
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  
//////////////////////////////////

  flatpickr(inputData, options);








  