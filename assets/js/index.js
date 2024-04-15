const forgot = document.getElementById('forgot');
const loginButton = document.getElementById('login-redirect');
const signupButton = document.getElementById('signup-redirect');
const login = document.getElementById('login');
const signup = document.getElementById('signup');

const redirect = (element, path) => {
    element.addEventListener('click', () => (location.href = path));
};

if (forgot) {
    forgot.addEventListener('click', () => alert('Lo siento mucho :c'));
}

if (signupButton) redirect(signupButton, 'register.html');

if (loginButton) redirect(loginButton, 'login.html');

if (login) redirect(login, './');

if (signup) redirect(signup, 'login.html');
