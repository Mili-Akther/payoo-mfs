// add money the account

// step-1 : dd event handler to add button inside the form
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    // prevent page handler after form submit
    event.preventDefault();

    // step-2 : get money to be added to the account
    const addMoneyInput = document.getElementById("input-add-money").value;
    console.log(addMoneyInput);

    // get the pin number provided
    const pinNumberInput = document.getElementById("input-pin-number").value;
    console.log(pinNumberInput);
  });
