const inputs = document.querySelectorAll('input');
const errorSpans = document.querySelectorAll('.error-message');
const form = document.querySelector('form');
const btn = document.querySelector('button');

const errorMesages = {
  firstName : 'First Name cannot be empty',
  lastName : 'Last Name cannot be empty',
  email : 'Looks like this is not an email',
  emailSample : 'email@example.com',
  password : 'Password cannot be empty',
  pattern: /^(?=.*[a-zA-Z])[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
}

const {firstName, lastName,email, emailSample, password,pattern} = errorMesages;


form.addEventListener('submit', (e)=>{
  e.preventDefault();
})





inputs.forEach((input, index)=>{
  
  input.addEventListener('change', (e)=>{
        
    let value = input.value.trim();
    let errorSpan = errorSpans[index];

    console.log(value)

    if(value ===''){
      errorSpan.style.display = 'block'
      errorSpan.textContent = firstName;
      input.classList.add('error-class')
    } else if (input.type ==='email' && !pattern.test(value)){
      input.placeholder = emailSample ;
      errorSpan.textContent = email;
      errorSpan.style.display = 'block';
      input.classList.add('input-error');
    } else{
      errorSpan.style.display = 'none';
      input.classList.remove('error-class');
    }
    
  })
})

