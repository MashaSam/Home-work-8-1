import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.firstElementChild.firstElementChild;
const message = form.children[1].firstElementChild;

if (
  localStorage.getItem('feedback-form-state') !== null &&
  localStorage.getItem('feedback-form-state') !== undefined
) {
  const strLocal = localStorage.getItem('feedback-form-state');
  const objLocal = JSON.parse(strLocal);
  console.log(objLocal);
  email.value = objLocal.emailValue;
  message.value = objLocal.messageValue;
}
const onInput = e => {
  // console.log(e.target.value);
  // e.target.value
  const emailValue = email.value;
  const messageValue = message.value;
  console.log(messageValue);
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ emailValue, messageValue })
  );
};
form.addEventListener('input', throttle(onInput,300));

const onSubmit = e => {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem('feedback-form-state');
};
form.addEventListener('submit', onSubmit);
