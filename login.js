function checkLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
// forgot that js is nothing like Java!
    if (username === 'iris' && password === '1234') {
        window.location.href = 'artistdash.html';
    } else {
        alert('invalid user or pass, please try again!');
    }
}
