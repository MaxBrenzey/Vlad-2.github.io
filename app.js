const btnClear = document.querySelector('#myInput');
const inputs = document.querySelectorAll('.clearInput');

function sendEmail() {
  var tempParams = {
    from_name: document.querySelector('#fromName').value,
    to_name: document.querySelector('#toName').value,
    message: document.querySelector('#msg').value,
  };
  emailjs.send('service_770dz1r', 'template_zp6xg1g', tempParams)
    .then(function (res) {
      console.log('sucsess', res.status);
      console.log(tempParams)
    })
}

// for send mail
(function () {
  emailjs.init("user_bhw0PJPx6k0ROBoHmLOf6");
})();

// clear intut after click
btnClear.addEventListener('click', () => {
  inputs.forEach(input => input.value = '');
});


// scroll
var scroll = new SmoothScroll('a[href*="#welcome"]');