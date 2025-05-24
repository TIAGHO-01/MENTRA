// Sélectionne le formulaire et les champs de mot de passe
const form = document.querySelector('form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');

// Lorsque le formulaire est soumis
form.addEventListener('submit', function(event) {
  // Vérifie si les deux mots de passe sont identiques
  if (password.value !== confirmPassword.value) {
    event.preventDefault(); // Empêche l'envoi du formulaire
    alert("Les mots de passe ne correspondent pas.");
  }
});
