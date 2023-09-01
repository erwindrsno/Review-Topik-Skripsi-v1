console.log("Script triggered!");

(() => {
  const tabs = document.querySelectorAll('.tab');
  const formContainers = document.querySelectorAll('.form-container');

  const loginForm = document.getElementById('loginForm');
  loginForm.classList.add('active');
  tabs[0].classList.add('selected');

  tabs.forEach(tab => {
    tab.addEventListener('click', function (event) {
      event.preventDefault();

      // tab.classList.add('selected');
      tabs.forEach(tab => {
        tab.classList.remove('selected');
      });

      tab.classList.add('selected');

      const targetForm = this.getAttribute('data-form');

      formContainers.forEach(container => {
        container.classList.remove('active');
      });

      document.getElementById(targetForm + 'Form').classList.add('active');
    });
  });
})();