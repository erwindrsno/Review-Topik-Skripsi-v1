console.log("Script triggered!");

(() => {
  const tabs = document.querySelectorAll('.tab');
  const formContainers = document.querySelectorAll('.form-container');

  const loginForm = document.getElementById('loginForm');
  loginForm.classList.add('active');

  tabs.forEach(tab => {
    tab.addEventListener('click', function (event) {
      event.preventDefault();

      const targetForm = this.getAttribute('data-form');

      formContainers.forEach(container => {
        container.classList.remove('active');
      });

      document.getElementById(targetForm + 'Form').classList.add('active');
    });
  });
})();