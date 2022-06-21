//can only print one submission at a time on the submitted forms html page, but at least it works

window.addEventListener('load', () => {
    const name = localStorage.getItem('nameValue');
    const email = localStorage.getItem('emailValue');
    const message = localStorage.getItem('messageValue');

    document.getElementById('result-name').textContent = name;
    document.getElementById('result-email').textContent = email;
    document.getElementById('result-message').textContent = message;

});