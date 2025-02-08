const inputs = document.querySelectorAll('input');
const errorSpans = document.querySelectorAll('.error-message');
const form = document.querySelector('form');
const btn = document.querySelector('button');

const errorMesages = {
  errorMessage: 'cannot be empty',
  email : 'Looks like this is not an email',
  emailSample : 'email@example.com',
  pattern: /^(?=.*[a-zA-Z])[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
}

const {errorMessage,email, emailSample,pattern} = errorMesages;


form.addEventListener('submit', (e)=>{
  e.preventDefault();
})





inputs.forEach((input, index)=>{
  
  input.addEventListener('change', (e)=>{
        
    let value = input.value.trim();
    let errorSpan = errorSpans[index];

    if(value ===''){
      errorSpan.style.display = 'block';
      errorSpan.textContent = `${input.placeholder} ${errorMessage}`;
      input.classList.add('error-class');
    } 

// Specific validation for the email input

    else if(input.type === 'email'){
      if(value ===''){
        console.log('Empty Value')
      }
    }
    
    
    
    
    else{
      errorSpan.style.display = 'none';
      input.classList.remove('error-class');
    }
    
  })
})

