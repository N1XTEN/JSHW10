import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

function createPromise(event) {
  event.preventDefault(); 

  const stateInput = document.querySelector('input[name="state"]:checked');
  const delayInput = document.querySelector('input[type="number"]');
  
  if (!stateInput || !delayInput) {
    console.error('Error: Unable to find state or delay input element.');
    return;
  }

  const stateChoice = stateInput.value;
  const delayMilSecond = Number(delayInput.value);

  const message = (stateChoice === 'fulfilled') ? '✅ Fulfilled promise' : '❌ Rejected promise';

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      (stateChoice === 'fulfilled') ? resolve(delayMilSecond) : reject(delayMilSecond);
    }, delayMilSecond);
  });

  promise
    .then((delay) => {
      iziToast.success({
        message: `${message} in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch((delay) => {
      iziToast.error({
        message: `${message} in ${delay}ms`,
        position: 'topRight',
      });
    });
}

form.addEventListener('submit', createPromise);
