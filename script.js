const inputs = document.querySelectorAll('input');

const errorMesages = [{
  firstName : 'First Name cannot be empty',
  lastName : 'Last Name cannot be empty',
  email : 'Looks like this is not an email',
  emailSample : 'emai@example.com',
  password : 'Password cannot be empty',
  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
}]

const validateInput = ()=>{
  console.log();
}


inputs.forEach((input)=>{
  input.addEventListener('input', validateInput)
})