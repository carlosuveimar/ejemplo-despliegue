// Archivo: script.js

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Simulación de validación básica
    if (username === "goku" && password === "kamehameha") {
        document.getElementById("message").textContent = "Inicio de sesión exitoso";
        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").textContent = "Usuario o contraseña incorrectos";
        document.getElementById("message").style.color = "red";
    }
});
