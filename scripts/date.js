const passwordPosto = document.querySelector(".passwordPosto");
const passwordLoja = document.querySelector(".passwordLoja");
const passwordConfig = document.querySelector(".passwordConfig");
const passworCbc = document.querySelector(".passworCbc");
const divPassword = document.querySelector(".divPassword");

let date = new Date();
let hour = date.getHours();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();


  function showPasswordLive() {
    let calculatePasswordPosto = (day + month + year) - 2000;
    passwordPosto.innerHTML = `Senha do acesso ao Live Posto: <strong>${calculatePasswordPosto}</strong>`;
    let calculaPasswordLoja = (hour + day + month + year) - 2000;
    passwordLoja.innerHTML = `Senha do acesso ao Live loja: <strong>${calculaPasswordLoja}</strong>`;

    let calculatePasswordConfig = (hour + day + month + 1 + year) - 75;
    passwordConfig.innerHTML = `Senha do config do PDV e Concentrador: <strong>${calculatePasswordConfig}</strong>`;

    let calculatePasswordCbc = (year - (month + 1) - day - hour);
    passworCbc.innerHTML = `Senha do config CBC Manager 2k9: <strong>${calculatePasswordCbc}</strong>`;
    
    divPassword.classList.remove("ocultText");
    divPassword.classList.add("btn-show");
  }
  // showPasswordLive();

  // setInterval(showPasswordLive, 0700);
      // tela.classList.remove("ocultText");
      // tela.classList.add("btn-show");


    function clearPassword() {
      divPassword.classList.remove("btn-show");
      divPassword.classList.add("ocultText");
    }