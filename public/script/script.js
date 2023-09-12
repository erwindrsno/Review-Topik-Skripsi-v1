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

// const formLogIn = document.getElementById("login_form");
// if(formLogIn != null || formLogIn != undefined){
//     formLogIn.addEventListener("submit", onSubmitLogIn);
// }

const formLogin = document.getElementById("loginForm");
formLogin.addEventListener("submit", onSubmitLogin);

function onSubmitLogin(event){
  event.preventDefault();
  let formElements = event.currentTarget.elements;
  let arr = [];
  for (let i = 0; i < event.currentTarget.length-1; i++) {
      arr[i] = formElements[i].value;
  }
  const obj = {username : arr[0], password : arr[1]};
  let input = encodeURL(obj);
  console.log(formElements);
  // const email = document.getElementById("input_email");
  // const password = document.getElementById("input_pw");
  // console.log(email);
  // console.log(password);

  const init = {
      method: 'post',
      headers: {
          "Content-Type": "application/x-www-form-urlencoded"
      },
      body: input
  };
};

function encodeURL(data){
  const ret = [];
  for (let d in data){
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
  }
  return ret.join('&');
}