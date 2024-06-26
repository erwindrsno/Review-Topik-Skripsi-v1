// import Swal from 'sweetalert2';

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

const formLogIn = document.getElementById("login_form");
if(formLogIn != null || formLogIn != undefined){
    formLogIn.addEventListener("submit", onSubmitLogin);
}

const formLogin = document.querySelector("form[action='/register']");
formLogin.addEventListener("submit", onSubmitRegister);

function onSubmitRegister(event){
  event.preventDefault();
  let formElements = event.currentTarget.elements;
  let arr = [];
  for (let i = 0; i < event.currentTarget.length-1; i++) {
      arr[i] = formElements[i].value;
  }
  const obj = {name: arr[0], username : arr[1], password : arr[2], academic_num: arr[3], specialization: arr[4]};
  let input = encodeURL(obj);

  const init = {
      method: 'post',
      headers: {
          "Content-Type": "application/x-www-form-urlencoded"
      },
      body: input
  };

  fetch('/register',init)
    .then(res => {
        console.log(res.status);
        return res.text();
    })
    .then(result => {
        // let notyf = new Notyf();
        // console.log(result.message);
        // console.log(result);
        // bootbox.init();
        // bootbox.alert("This is a simple alert message.");
        // notyf.success('Your changes have been successfully saved!');
    })
};

function encodeURL(data){
  const ret = [];
  for (let d in data){
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
  }
  return ret.join('&');
}