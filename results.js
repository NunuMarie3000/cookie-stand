window.addEventListener('load', () => {
    const name = localStorage.getItem('nameValue');
    const email = localStorage.getItem('emailValue');
    const message = localStorage.getItem('messageValue');

    document.getElementById('result-name').textContent = name;
    document.getElementById('result-email').textContent = email;
    document.getElementById('result-message').textContent = message;

});