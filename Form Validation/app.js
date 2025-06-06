const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone');
const password = document.querySelector('#password');
const submitButton = document.querySelector('button');


submitButton.addEventListener('click', (e) => {
    // check name 
    if(firstName.value.trim() !== "" 
        && lastName.value.trim() !== ""
        && email.value.trim() !=="") {

        }
})