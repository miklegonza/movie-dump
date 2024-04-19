const forgot = document.getElementById('forgot');
const loginButton = document.getElementById('login-redirect');
const signupButton = document.getElementById('signup-redirect');
const login = document.getElementById('login');
const signup = document.getElementById('signup');
const signout = document.getElementById('signout');
const buttons = document.querySelector('.buttons');
const arrows = document.querySelectorAll('.arrow i');

let isDragging = false;
const mediaQuery = matchMedia('(max-width: 768px)');

const redirect = (element, path) => {
    element.addEventListener('click', () => (location.href = path));
};

const handleArrows = () => {
    let value = Math.round(buttons.scrollLeft);
    let maxValue = buttons.scrollWidth - buttons.clientWidth;
    arrows[0].parentElement.style.display = value > 0 ? 'flex' : 'none';
    arrows[1].parentElement.style.display = maxValue > value ? 'flex' : 'none';
};

if (forgot) {
    forgot.addEventListener('click', () => alert('Lo siento mucho :c'));
}

if (signupButton) redirect(signupButton, 'pages/register.html');

if (loginButton) redirect(loginButton, 'pages/login.html');

if (login) redirect(login, '../');

if (signup) redirect(signup, 'login.html');

if (signout) {
    signout.addEventListener('click', () =>
        alert('No hay una sesión iniciada')
    );
}

if (buttons && arrows) {
    buttons.addEventListener('mousemove', (event) => {
        if (!isDragging) return;
        buttons.classList.add('dragging');
        buttons.scrollLeft -= event.movementX;
    });

    arrows.forEach((arrow) => {
        arrow.addEventListener('click', () => {
            buttons.scrollLeft += arrow.id === 'left' ? -350 : 350;
            setTimeout(() => handleArrows(), 50);
        });
    });

    buttons.addEventListener('mousedown', () => (isDragging = true));
    document.addEventListener('mouseup', () => {
        isDragging = false;
        buttons.classList.remove('dragging');
    });
}

mediaQuery.addEventListener('change', () => {
    let images = document.querySelectorAll('.change .img');
    if (mediaQuery.matches) {
        images.forEach((image) => {
            image.classList.add('small');
            image.classList.remove('big');
        });
    } else {
        images.forEach((image) => {
            image.classList.remove('small');
            image.classList.add('big');
        });
    }
});
