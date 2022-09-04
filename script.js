// Находим на странице кнопку
const btn = document.querySelector("a");

// Навешиваем на кнопку обработчик клика
btn.onclick = function () {
  let str = document.querySelector("p");
  let textReplace = str.innerText.replace(/^'|(\s)'|'(\s)|'(\W)/g, '$1"$2$3');
  str.innerText = textReplace;
};

const submitBtn = document.querySelector('input[type="submit"]');

submitBtn.onclick = function (event) {
  event.preventDefault();
  validName();
  validPhone();
  validEmail();
};

function validPhone() {
  let re = /(\+7)[(]\d{3}[)]\d{3}[\s-]\d{4}$/g;
  let myPhone = document.getElementById("phone").value;
  console.log(myPhone);
  let valid = re.test(myPhone);
  if (valid) {
    document.getElementById("phone").style.border = "none";
    document.querySelector(".err.phone").style.color = "green";
    output = "Номер телефона введен правильно!";
  } else {
    document.getElementById("phone").style.border = "1px solid red";
    document.querySelector(".err.phone").style.color = "red";
    output = "Формат телефона +7(000)000-0000";
  }
  document.querySelector(".err.phone").innerHTML = output;
  return valid;
}

function validName() {
  let re = /^[a-zа-яё]+$/i;
  let name = document.getElementById("username").value;
  let valid = re.test(name);
  if (valid) {
    document.getElementById("username").style.border = "none";
    document.querySelector(".err.name").style.color = "green";
    output = "Имя введено верно!";
  } else {
    document.getElementById("username").style.border = "1px solid red";
    document.querySelector(".err.name").style.color = "red";
    output = "Имя должно содержать только буквы";
  }
  document.querySelector(".err.name").innerHTML = output;
  return valid;
}

function validEmail() {
  let re = /[a-z0-9]+@[a-z]+\.[a-z]{2}$/i;
  let email = document.getElementById("email").value;
  let valid = re.test(email);
  if (valid) {
    document.getElementById("email").style.border = "none";
    document.querySelector(".err.email").style.color = "green";
    output = "email верный";
  } else {
    document.getElementById("email").style.border = "1px solid red";
    document.querySelector(".err.email").style.color = "red";
    output = "Формат email не верный";
  }
  document.querySelector(".err.email").innerHTML = output;
  return valid;
}
