const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#disname').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password1 = document.querySelector('#password1').value.trim();
    const password2 = document.querySelector('#password2').value.trim();
  
    if (name && email && (password1 === password2)) {
        console.log(`${name}${email}${password1}`)
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name:name, email:email, password:password1 }),
            headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
  };

  document
  .querySelector('#signup_form')
  .addEventListener('submit', signupFormHandler);