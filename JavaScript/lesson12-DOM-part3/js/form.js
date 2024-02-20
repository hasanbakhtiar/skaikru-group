const defaultUsr = {
   email: "h@h",
   pass: "admin123"
}

const form = document.querySelector('form');
const email = document.querySelectorAll('.form-control')[0];
const pass = document.querySelectorAll('.form-control')[1];

const alertInfo = document.querySelector('#alert');
form.onsubmit = (e) => {
   e.preventDefault();
   if (!email.value || !pass.value) {
      alertInfo.innerHTML = "Please fill input";
      alertInfo.className = "alert alert-warning";
   } else {
      if (email.value === defaultUsr.email && pass.value === defaultUsr.pass) {
         alertInfo.innerHTML = "Login successfully";
         alertInfo.className = "alert alert-success";
      } else {
         alertInfo.innerHTML = "Email or password is wrong";
         alertInfo.className = "alert alert-danger";
      }
   }

}