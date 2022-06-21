//grab contact form from html
// let contactUsForm = document.getElementById('contact-us-form');


// function printSubmittedForms(e){
//     //no print in url bar
//     e.preventDefault();
//     //create div we're gonna print in
//     let printHere = document.createElement('div');
//     //create new p element to put the info in
//     let newContent = document.createElement('p');
//     //attach p element to div
//     printHere.append(newContent);
//     //print content in p element
//     newContent.textContent =
//     `Name: ${document.getElementById('enter-name').value}
//     Email: ${document.getElementById('e-mail').value}
//     Message: ${document.getElementById('message').value}
//     `;
// }
// //adding an event listener to my form
// //event = form being submitted
// //function being called = registerAndPrint function
// document.querySelector('form').addEventListener('submit', printSubmittedForms);

function getData(){
    //get form values
    let name = document.getElementById("enter-name").value;
    let email= document.getElementById("e-mail").value; 
    let message= document.getElementById("message").value;

    //saving the values in local storage
    localStorage.setItem("nameValue", name);
    localStorage.setItem("emailValue", email);
    localStorage.setItem("messageValue", message);

    return;
}

// function printSubmittedForms(e){
//     //no print in url bar
//     e.preventDefault();
//     //create div we're gonna print in
//     let printHere = document.createElement('div');
//     //create new p element to put the info in
//     let newContent = document.createElement('p');
//     //giv p an id and id name
//     newContent.setAttribute("id", "print-data");
//     //attach p element to div
//     printHere.append(newContent);
//     //print content in p element
//     newContent.textContent=
//     `Name: ${localStorage.getItem("nameValue")} 
//     Email: ${localStorage.getItem("emailValue")} 
//     Message: ${localStorage.getItem("messageValue")}`;
//     console.log(newContent);
// }

// function hasBeenSubmitted(){
//     alert('Your form has been submitted. Thank you!');
//     contactUsForm.reset();
// }

// contactUsForm.addEventListener('submit', getData);
// contactUsForm.addEventListener('submit', printSubmittedForms);
// contactUsForm.addEventListener('submit', hasBeenSubmitted);

