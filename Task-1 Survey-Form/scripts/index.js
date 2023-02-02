document.querySelector('form').addEventListener('submit', formValidate)
let phoneInputField = document.querySelector('#phone')
let phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
})
function formValidate() {
  event.preventDefault()
  let arr = []
  let email = document.getElementById('email').value
  let mobile = document.getElementById('phone').value
  var user = {
    email: email,
    mobile: mobile,
    Dialcode: phoneInput,
  }
  arr.push(user)

  if (!email.includes('@') && email !== '') {
    document.getElementById('emailValidation').innerHTML =
      'You have entered an invalid email address'
  }
  if (email === '') {
    document.getElementById('emailError').innerHTML = 'required field'
    document.getElementById('mobileError').innerHTML = 'required field'
    return false
  } else if (mobile === '') {
    document.getElementById('mobileError').innerHTML = 'required field'
    return false
  } else if (mobile.length > 10 || mobile.length < 10) {
    document.getElementById('mobileLength').innerHTML =
      'You have entered an invalid Mobile number'
    return false
  } else {
    localStorage.setItem('userdata', JSON.stringify(arr))
    alert('Thank You For taking part in survey')
    location.href = 'Thankyou.html'
  }
}
