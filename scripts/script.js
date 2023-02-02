submit.addEventListener("click", button);

let mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

function button(x) {
  x.preventDefault();

  ifmail.classList.toggle(
    "color_change",
    ifmail.value.length == 0 || !mailformat.test(ifmail.value)
  );
  error.classList.toggle(
    "display",
    ifmail.value.length == 0 || !mailformat.test(ifmail.value)
  );
  errorMsg.classList.toggle(
    "display",
    ifmail.value.length == 0 || !mailformat.test(ifmail.value)
  );

  if (ifmail.value.length == 0 || !mailformat.test(ifmail.value)) {
    ifmail.value = " ";
    ifmail.focus();
  }
}
