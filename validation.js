function validateForm() {
  let x = document.forms["myForm"]["booking"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
