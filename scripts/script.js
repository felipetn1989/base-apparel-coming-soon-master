submit.addEventListener("click", button);

function validate(email) {
  var mailformat =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (email.value.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}

function button(a) {
  a.preventDefault();

  if (ifmail.value.length == 0 || validate(ifmail) == false) {
    ifmail.style.borderColor = "var(--Soft-Red)";
    error.style.display = "block";
    error_msg.style.display = "block";
    ifmail.focus();
  }
}
