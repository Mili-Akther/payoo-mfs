// add money to the account

// step-1 : add event handler to add button inside the form
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    // prevent page reload after form submission
    event.preventDefault();

    // step-2 : get the money to be added to the account
    const addMoneyInput = document.getElementById("input-add-money").value;
    console.log(addMoneyInput);

    // get the pin number provided
    const pinNumberInput = document.getElementById("input-pin-number").value;
    console.log(pinNumberInput);

    // step-3: verify pin number (basic validation)
    if (pinNumberInput === "1234") {
      console.log("Added money to your account");

      // step-4 : get the current balance
      const balance = document.getElementById("account-balance").innerText;
      console.log(balance);

      // step-5 : add money to the balance
      const addMoneyNumber = parseFloat(addMoneyInput);
      const balanceNumber = parseFloat(balance);

      if (!isNaN(addMoneyNumber) && !isNaN(balanceNumber)) {
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        // update the balance on the page
        document.getElementById("account-balance").innerText = newBalance;
      } else {
        alert("Invalid input, please enter a valid number.");
      }

      //   step-6: update the balance in the UI/DOM
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to add money! Please try again.");
    }
  });
