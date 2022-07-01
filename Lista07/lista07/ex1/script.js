function send() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var formContent = {
        name: name,
        email: email,
        message: message
    };

    alert(JSON.stringify(formContent));
    
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

