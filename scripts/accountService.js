const usernameInputFieldId = 'username';

const login = () => {
    const username = document.getElementById(usernameInputFieldId).value;

    if (username) {
        localStorage.setItem(username, null);
        localStorage.setItem(currentUserUsername, username);

        window.location.href = gamePage;
    } else {
        alert('Please enter your username');
    }
};

const initLoginPage = () => {
    if (isUserLoggedIn()) {
        alert(`${getCurrentUserUsername()}, you are already logged in. Please logout first`);
        window.location.href = gamePage;
    }
};

const logout = () => {
    localStorage.removeItem(currentUserUsername);

    window.location.href = loginPage;
};

const getCurrentUserUsername = () => {
    return localStorage.getItem(currentUserUsername);
};

const isUserLoggedIn = () => {
    return getCurrentUserUsername() !== null;
};
