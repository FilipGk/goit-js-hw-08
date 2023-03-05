import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

form.addEventListener(
  'input',
  throttle(() => {
    const feedback = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
  }, 500)
);

const savedFeedback = JSON.parse(localStorage.getItem('feedback-form-state'));

if (savedFeedback) {
  emailInput.value = savedFeedback.email;
  messageInput.value = savedFeedback.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const feedback = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log(feedback);

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});
