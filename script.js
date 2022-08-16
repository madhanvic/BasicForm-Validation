const inputField = document.querySelectorAll(".input-same");
const userName = document.querySelector(".input-username");
const mail = document.querySelector(".input-mail");
const password = document.querySelector(".input-password");
const repassword = document.querySelector(".input-repassword");
const checkField = document.querySelector(".check-terms");
const checkFieldLabel = document.querySelector(".check-terms-label");
const submitBtn = document.querySelector(".form-btn");
const nameMatch = /^[a-zA-Z ]+$/;
const mailMatch = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const passwordMatch = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
let userNameCheck;
let mailCheck;
let passwordCheck;
let repasswordCheck;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  findWhere(inputField); 
  moveTo(userNameCheck, mailCheck, passwordCheck, repasswordCheck);    
});

function findWhere(where) {
  for (let textField of where) {
    if (!textField.value) {
      printFieldError(textField);
      userNameCheck = false;
      mailCheck =false;
      passwordCheck =false;
      repasswordCheck = false;     
      
    } else {
      findError(textField);
    }
  }
}

function printFieldError(where) {
  where.parentElement.classList.remove("success");
  where.parentElement.classList.add("error");
}

function findError(which) {
  if (which == userName) {
    if (which.value.match(nameMatch)) {
      showSuccess(which);
      userNameCheck = true;
    } else {
      userNameCheck = false;
      showInvalid(which);
    }
  } else if (which == mail) {
    if (which.value.match(mailMatch)) {
      showSuccess(which);
      mailCheck = true;
    } else {
      mailCheck = false;
      showInvalid(which);
    }
  } else if (which == password) {
    if (which.value.match(passwordMatch)) {
      showSuccess(which);
      passwordCheck = true;
    } else {
      passwordCheck = false;
      showInvalid(which);
    }
  } else if (which == repassword) {
    if (which.value == password.value) {
      showSuccess(which);
      repasswordCheck = true;
    } else {
      repasswordCheck = false;
      showInvalid(which);
    }
  }
}

function showSuccess(where) {
  where.parentElement.classList.remove("error");
  where.parentElement.classList.add("success");
}

function showInvalid(where) {
  where.parentElement.classList.remove("success");
  where.parentElement.classList.add("error");
}

function throwCheckboxError() {
  
}

function moveTo(username, mail, password, repassword) {
  if (username && mail && password && repassword) {
    if (checkField.checked) {
      document.body.style.display = "none";
    } else {
      checkFieldLabel.style.color = "red";
    }
  } else {
    return;
  }
}
