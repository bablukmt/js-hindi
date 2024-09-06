const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
const getThemeColor = localStorage.getItem("themeColor");

if(getThemeColor) {
  body.style.backgroundColor = getThemeColor
}

buttons.forEach((button) => {
  button.addEventListener('click', function(e) {
    if(e.target.id) {
      var saveThemeColor = body.style.backgroundColor = e.target.id
      localStorage.setItem("themeColor", saveThemeColor);
    }
  })
})