


firstInput.value = "26ponirosa@oceanschools.org"
secondInput.value = "OTISa" + format(i) + "p"

function format(integer) {
  let value = "00000" + integer
  return value.slice(-5)
}
