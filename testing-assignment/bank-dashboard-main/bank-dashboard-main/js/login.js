// document.getElementById('submit-btn').addEventListener('click', function(){
//    let emailField = document.getElementById('user-email');
//    let email = emailField.value;
//    let passField = document.getElementById('user-pass');
//    let pass = passField.value;

//    // WARNING: this is not a proper way to verify user info!!!
//    if(email === 'user@gmail.com' && pass === '12345'){
//       location.href = 'dashboard.html'
//    }
//    else{
//       alert('Invalid User!\nPlease Enter this Email & Password:\n-user@gmail.com\n-12345')
//    }
// })

document.getElementById('submit-btn').addEventListener('click', function(){
   let emailField = document.getElementById('user-email');
   let email = emailField.value.trim();
   let passField = document.getElementById('user-pass');
   let pass = passField.value.trim();

   if(validateEmail(email) && validatePassword(pass)){
      location.href = 'dashboard.html'
   }
   else{
      alert('Invalid login credentials.\nPlease enter valid email and password.')
   }
});

function validateEmail(email) {
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return regex.test(email);
}

function validatePassword(password) {
   // Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character
   const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`|}{[\]:";'<>?,./-=])(?=.*[^\s]).{8,}$/;
   return regex.test(password);
}
