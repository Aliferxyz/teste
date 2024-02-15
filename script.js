function moveNoButton() {
    const button = document.getElementById('noBtn');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    const newX = Math.floor(Math.random() * (screenWidth - buttonWidth));
    const newY = Math.floor(Math.random() * (screenHeight - buttonHeight));
    button.style.position = 'absolute';
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
}

function reply(answer) {
    if (answer === 'yes') {
        alert('Que ótimo! 🥰');
    } else {
        moveNoButton();
    }
}
