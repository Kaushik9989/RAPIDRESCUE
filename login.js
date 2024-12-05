document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const mobileNumber = event.target[0].value.trim();
    const password = event.target[1].value.trim();
    
    if (!mobileNumber || !password) {
      alert("Please fill in all fields!");
      return;
    }
    
    alert("Login successful!");
  });
  