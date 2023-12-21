const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

form.addEventListener('input', event => {
  if (event.target.name === 'email' || event.target.name === 'message') {
    const currentValue = {
      email: form.email.value.trim(),
      message: form.message.value.trim(),
      };
  localStorage.setItem(storageKey, JSON.stringify(currentValue));
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log({ email: form.email.value, message: form.message.value, });
    localStorage.removeItem(storageKey);
    form.reset();
});

const loadedPage = localStorage.getItem(storageKey);
  if (loadedPage) {
    const { email, message } = JSON.parse(loadedPage);
      form.email.value = email;
      form.message.value = message;
};