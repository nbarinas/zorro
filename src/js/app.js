document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');
    const searchButton = document.getElementById('searchButton');

    if (loginButton) {
        loginButton.addEventListener('click', function() {
            window.location.href = 'login.html';
        });
    }

    if (searchButton) {
        searchButton.addEventListener('click', function() {
            window.location.href = 'search.html';
        });
    }
});