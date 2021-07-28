let tela = document.querySelector(".showPassword");
let song = document.querySelector(".song");

    function showPassword() {
      song.play();

      let year = new Date().getFullYear();

      let month = new Date().getMonth();

      let day = new Date().getDate();

      let hour = new Date().getHours();

      let result = (year + month + 1 + day + hour) - 75;

      tela.innerHTML = result;
    }
    function clearPassword() {
      tela.innerHTML = ""
    }