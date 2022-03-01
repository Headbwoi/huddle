const form = document.getElementById('form')
const email = document.getElementById('email');
const errorTxt = document.getElementById("error-txt");


form.addEventListener('submit', e => {
    e.preventDefault();
    
    checkEmail();
  });
  
const isValidEmail = email => {
    const re = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return re.test(String(email).toLowerCase());
  }

  function checkEmail(){
    const emailValue = email.value.trim();
    
    if (emailValue === '') {
      email.classList.add('error');
      email.classList.remove('success');
      errorTxt.innerHTML = "please enter email";
      
    }
    else if(!isValidEmail(emailValue)){
        email.classList.add('error');
        email.classList.remove('success');
        errorTxt.innerText = "check your email please"
    }
    else{
        email.classList.add('success');
      email.classList.remove('error');
      errorTxt.innerText = "";
    }
  }