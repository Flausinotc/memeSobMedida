let button = document.getElementById('no') 
let yesButton = document.getElementById('yesButton');
let height = window.innerHeight - 50;
let width = window.innerWidth - 50;

button.addEventListener('mouseover', function(){
    button.style.position = "absolute";
    button.style.top = Math.random() * height + "px";
    button.style.left = Math.random() * width + "px";
});

yesButton.addEventListener('click', function() {
    const whatsappInput = document.getElementById('whatsappInput');
    const phoneNumber = encodeURIComponent(whatsappInput.value);
    const message = encodeURIComponent('Eu aceito, meu amor.');
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappURL, '_blank');
});
