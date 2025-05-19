const button = document.querySelector('.js-button');
console.log(button.classList.contains('js-button'));

function toggleButton(event) {
  // Check if the button clicked is already toggled.
  if (event.currentTarget.classList.contains('is-toggled')) {
    event.currentTarget.classList.remove('is-toggled');
    return;
  }

  const buttons = document.querySelectorAll('.switch-button');
  buttons.forEach((button) => {
    if (button.classList.contains('is-toggled')) {
      button.classList.remove('is-toggled');
    }
  });

  const clickedButton = event.currentTarget;
  clickedButton.classList.add('is-toggled');
}