document.querySelector('.navbar-toggler-icon').addEventListener('click', function() {
    this.classList.toggle('cross');
});

document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('.form');
    form.addEventListener('submit', function (event) {
        let nameInput = document.getElementById('name');
        let nameValue = nameInput.value.trim();
        if (nameValue === '') {
            nameInput.placeholder = 'This field is required';
            nameInput.style.borderColor = 'red';
            nameInput.style.boxShadow = '0 0 5px red';
            event.preventDefault();
            return false;
        } else if (!/^[A-Z][a-z]*$/.test(nameValue)) {
            nameInput.placeholder = 'Enter a valid name';
            nameInput.style.borderColor = 'red';
            nameInput.style.boxShadow = '0 0 5px red';
            event.preventDefault();
            return false;
        } else {
            nameInput.style.borderColor = '';
            nameInput.style.boxShadow = '';
        }

        let emailInput = document.getElementById('email');
        let emailValue = emailInput.value.trim();
        if (emailValue === '') {
            emailInput.placeholder = 'This field is required';
            emailInput.style.borderColor = 'red';
            emailInput.style.boxShadow = '0 0 5px red';
            event.preventDefault();
            return false;
        } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailValue)) {
            emailInput.placeholder = 'Enter a valid email address';
            emailInput.style.borderColor = 'red';
            emailInput.style.boxShadow = '0 0 5px red';
            event.preventDefault();
            return false;
        } else {
            emailInput.style.borderColor = '';
            emailInput.style.boxShadow = '';
        }

        let subjectInput = document.getElementById('subject');
        let subjectValue = subjectInput.value.trim();
        if (subjectValue === '') {
            subjectInput.placeholder = 'This field is required';
            subjectInput.style.borderColor = 'red';
            subjectInput.style.boxShadow = '0 0 5px red';
            event.preventDefault();
            return false;
        } else {
            subjectInput.style.borderColor = '';
            subjectInput.style.boxShadow = '';
        }

        let messageInput = document.getElementById('message');
        let messageValue = messageInput.value.trim();
        if (messageValue === '') {
            messageInput.placeholder = 'This field is required';
            messageInput.style.borderColor = 'red';
            messageInput.style.boxShadow = '0 0 5px red';
            event.preventDefault();
            return false;
        } else {
            messageInput.style.borderColor = '';
            messageInput.style.boxShadow = '';
        }
        return true;
    });
});

