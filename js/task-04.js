const formSubmit = document.querySelector('form');

const user = {};

formSubmit.addEventListener('submit', e => {
  e.preventDefault();

  const form = e.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }

  user.email = email;
  user.password = password;

  console.log(user);

  formSubmit.reset();
});
