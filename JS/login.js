// step-1 set eve handler
document.getElementById("button-login").addEventListener("click", function () {
  //   step: 3 - get the phone number and pin number
  const phoneNumber = document.getElementById("phone-number").value;
  const pinNumber = document.getElementById("pin-number").value;

  console.log(phoneNumber, pinNumber);

  //   step-4: validate phone and pin-->
  // This is temporary
  if (phoneNumber === "5" && pinNumber === "1234") {
    console.log("you are logged in");
    window.location.href = "/home.html";
  }
  //   step-5: allow user to use the website
  else {
    alert("wrong phone or pin");
  }
});
