'use strict'
const Form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const address = document.getElementById('address');
const dateOfBirth = document.getElementById('dateOfBirth');
const gender = document.getElementById('gender');
const notes = document.getElementById('notes');
const submitButton = document.getElementById('submitButton');
const lsstorage = document.getElementById('lsstorage');
const output = document.getElementById('output');

const nameError = document.getElementById('name_error');
const surnameError = document.getElementById('surname_error');

let key = localStorage.length;

let indicator = 1;
let popUp = document.getElementById('tableBody');
let pop = document.getElementsByTagName('h4');





function validateName() {
    let name = firstName.value;
    if (name.match(/^[A-Za-z ]+$/)) {
        nameError.innerHTML = '✔'

    } else {
        nameError.innerHTML = '❌ '
    }
}

function validateSurname() {
    let surname = lastName.value;

    if (surname.match(/^[A-Za-z ]+$/)) {
        surnameError.innerHTML = '✔'

        // submit button, wich will save information in local storage

    } else {
        surnameError.innerHTML = '❌'
    }
}



submitButton.onclick = function () {



    const object = {
        firstName: firstName.value,
        lastName: lastName.value,
        address: address.value,
        dateOfBirth: dateOfBirth.value,
        gender: gender.value,
        notes: notes.value
    };

    const value = JSON.stringify(object);

    if (firstName.value && lastName.value && address.value) {
        if (lastName.value.match(/^[A-Za-z ]+$/) && (firstName.value.match(/^[A-Za-z ]+$/))) {
            localStorage.setItem(key, value);
            location.reload();
        } else {
            alert('Invalid input value. FirstName and LastName requires only letters.')
        }
    };


};











// filling table with information took from local storage
for (let i = 0; i < localStorage.length; i++) {
    const keyV = localStorage.key(i);
    // const info = localStorage.getItem(key);


    tableBody.innerHTML += `<tr  ><td data-label='S. No.' >${keyV}</td>
    <td data-label='Last name'>${JSON.parse(localStorage.getItem(keyV)).lastName}</td>
    <td data-label='First name'>${JSON.parse(localStorage.getItem(keyV)).firstName}</td>
    <td data-label='Address'>${JSON.parse(localStorage.getItem(keyV)).address}</td>
    <td data-label='Date'>${JSON.parse(localStorage.getItem(keyV)).dateOfBirth}</td>
    <td data-label='Gender'>${JSON.parse(localStorage.getItem(keyV)).gender}</td>
    <td ><button id='removeButton' value = [${keyV}]>remove</button></td>
    <h4>${JSON.parse(localStorage.getItem(keyV)).notes}<br><button id='closeButton' >ok</button></h4>`
};

//remove button
let removeBtn = document.getElementById('removeButton');
if (localStorage.length > 0) {
    removeBtn.onclick = function () {
        localStorage.removeItem(JSON.parse(removeBtn.value));
        location.reload();
    };
};






// popup function
popUp.onclick = function () {
    if (indicator > 0) {
        indicator *= -1;
        pop[0].classList.add('openPopUp');
    } else {
        pop[0].classList.remove('openPopUp');
        indicator *= -1;
    };
};





























