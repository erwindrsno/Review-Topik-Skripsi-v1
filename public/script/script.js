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

const formLogin = document.querySelector("form[action='/login']");
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

  const init = {
      method: 'post',
      headers: {
          "Content-Type": "application/x-www-form-urlencoded"
      },
      body: input
  };

  fetch('login',init)
    .then(res => {
        // console.log(res.status);
        // if(res.status == 200){
        //   const Toast = Swal.mixin({
        //     toast: true,
        //     position: 'top-right',
        //     iconColor: 'white',
        //     customClass: {
        //       popup: 'colored-toast'
        //     },
        //     showConfirmButton: false,
        //     timer: 1500,
        //     timerProgressBar: true
        //   })
        //   Toast.fire({
        //     icon: 'success',
        //     title: 'Success'
        //   })
        // }
        // else if(res.)
        // console.log(res);
        return res.json();
    })
    .then(result => {
        console.log(result.message);
        console.log(result);
    })
};

function encodeURL(data){
  const ret = [];
  for (let d in data){
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
  }
  return ret.join('&');
}