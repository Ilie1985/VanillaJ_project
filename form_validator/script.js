const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("confirm");

//Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//Cheeck if email is valid in javascript
function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}
//Get field name function
//transform the first letter into upper case
const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

//Check required fields function
const checkRequired = (inputArr) => {
  inputArr.forEach((input) => {
    console.log(input.value);
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};

// Check  input length function
const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters `
    );
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must have ${max} characters `);
  } else {
    showSuccess(input);
  }
};

//Check password match function
const checkPasswordsMatch= (input1,input2)=>{
if (input1.value!==input2.value){
  showError(input2,"Passwords do not match")
}
}

// Event listeners
form.addEventListener("submit", function (e) {
  //prevents the form from submiting
  e.preventDefault();
  //gives us only the value of the input (whatever we type in the field)
  console.log(username.value);
  // if (username.value === "") {
  //   showError(username, "Username is required");
  // } else {
  //   showSuccess(username);
  // }

  // if (email.value === "") {
  //   showError(email, "Email is required");
  // } else if(!isValid(email.value)){
  //   showError(email, "Email is not valid");
  // } else {
  //   showSuccess(email);
  // }

  // if (password.value === "") {
  //   showError(password, "Password is required");
  // } else {
  //   showSuccess(password);
  // }

  // if (password2.value === "") {
  //   showError(password2, "Password 2 is required");
  // } else {
  //   showSuccess(password2);
  // }

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password,password2)
});
