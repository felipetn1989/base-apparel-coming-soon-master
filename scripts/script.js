function button() {
  if (ifmail.value.length == 0) {
    ifmail.style.borderColor = "var(--Soft-Red)";
    error.style.display = "block";
    error_msg.style.display = "block";
    ifmail.focus();
  }
}
