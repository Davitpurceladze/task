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



// submit button, wich will save information in local storage
submitButton.onclick = function () {
    
    //randomazire to get uniq number for key value
    let key = Math.random()*(Math.pow(10,17));


    const object = {
        firstName: firstName.value,
        lastName: lastName.value,
        address: address.value,
        dateOfBirth: dateOfBirth.value,
        gender: gender.value,
        notes: notes.value
    };

    const value = JSON.stringify(object);
    
    if(firstName.value && lastName.value && address.value){
        localStorage.setItem(key, value);
        location.reload();
    };  
};




// filling table with information took from local storage
for(let i= 0; i<localStorage.length; i++){
    const key = localStorage.key(i);
    const info =localStorage.getItem(key);
    
    
    tableBody.innerHTML += `<tr  ><th >${key}</td>
    <td>${JSON.parse(localStorage.getItem(key)).lastName}</td>
    <td>${JSON.parse(localStorage.getItem(key)).firstName}</td>
    <td>${JSON.parse(localStorage.getItem(key)).address}</td>
    <td>${JSON.parse(localStorage.getItem(key)).dateOfBirth}</td>
    <td>${JSON.parse(localStorage.getItem(key)).gender}</td>
    <td><button id='removeButton' value = [${key}]>remove</button></td>`
};

//remove button
let removeBtn = document.getElementById('removeButton');
    
removeBtn.onclick = function(){
    localStorage.removeItem(JSON.parse(removeBtn.value));
    location.reload();
};




    






















