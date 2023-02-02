let user = JSON.parse(localStorage.getItem('userdata'))
user.map((el) => {
  let email = document.getElementById('email')
  email.innerText = 'Email :- ' + el.email
  let mobile = document.getElementById('mobile')
  mobile.innerText =
    'Mobile :- ' + '  ' + '+' + el.Dialcode.s.dialCode + ' ' + el.mobile
})
