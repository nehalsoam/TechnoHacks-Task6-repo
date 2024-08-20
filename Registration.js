function validateForm() {
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
    // Reset previous error messages
    resetErrors();
  
    var isValid = true;
  
    // Validate username (minimum 3 characters)
    if (username.length < 3) {
      isValid = false;
      showError("username", "Username must be at least 3 characters");
    }
  
    // Validate email format
    if (!isValidEmail(email)) {
      isValid = false;
      showError("email", "Invalid email address");
    }
  
    // Validate password (minimum 6 characters)
    if (password.length < 6) {
      isValid = false;
      showError("password", "Password must be at least 6 characters");
    }
  
    // Confirm password match
    if (password !== confirmPassword) {
      isValid = false;
      showError("confirmPassword", "Passwords do not match");
    }
  
    return isValid;
  }
  
  function isValidEmail(email) {
    // Very basic email validation
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  function showError(inputId, errorMessage) {
    var errorElement = document.getElementById(inputId + "Error");
    errorElement.innerText = errorMessage;
  }
  
  function resetErrors() {
    var errorElements = document.querySelectorAll(".error");
    errorElements.forEach(function(error) {
      error.innerText = "";
    });
  }