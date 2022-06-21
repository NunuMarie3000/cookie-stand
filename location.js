//location modal js
let locationButton = document.getElementById('locations-button');
let myModal = document.getElementById('modal-container');
let closeButton = document.getElementById('close');
function openLocations(){
    myModal.style.display = 'block';
    console.log('working');
}

function closeLocations(){
    myModal.style.display = 'none';
}

locationButton.addEventListener('click', openLocations);
closeButton.addEventListener('click', closeLocations);