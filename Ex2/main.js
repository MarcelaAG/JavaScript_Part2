const form = document.getElementById('form');

form.addEventListener('focusout', (event) => {
  event.target
  alert('Whoa! You are out of focus!')
});

