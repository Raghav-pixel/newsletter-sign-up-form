var button = document.querySelector('.submit-bt');
var input = document.querySelector('.input');
var container = document.querySelector('.container');
var successContainer = document.querySelector('.success-ctr');
var message = document.querySelector('.verification-msg');

function validateEmail(email) {
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

function submitForm() {
    if(input.value.length>0 && validateEmail(input.value)) {
        container.style.display = 'none';
        successContainer.style.display = 'flex';
        message.innerHTML = `A confirmation email has been sent to ${input.value}. Please open it and click the button inside to confirm the subscription.`
    } else {
        input.value = '';
        console.log('Invalid email')
    }
}

button.addEventListener('click', submitForm);