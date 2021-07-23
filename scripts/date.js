let tela = document.querySelector(".showPassword");

    function showPassword() {

      let year = new Date().getFullYear();

      let month = new Date().getMonth();

      let day = new Date().getUTCDate();

      let hour = new Date().getHours();

      let result = (year + month + 1 + day + hour) - 75;

      tela.innerHTML = result;
    }
    function clearPassword() {
      tela.innerHTML = ""
    }