const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

if(loginForm){
    loginForm.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Login successful!");
    });
}

if(registerForm){
    registerForm.addEventListener("submit", function(e){
        e.preventDefault();

        const passwords = registerForm.querySelectorAll('input[type="password"]');

        if(passwords[0].value !== passwords[1].value){
            alert("Passwords do not match!");
            return;
        }

        alert("Registration successful!");
    });
}
