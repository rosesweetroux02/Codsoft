document.addEventListener("DOMContentLoaded", function () {
  const userInput = document.querySelector(".user-input");
  const buttons = document.querySelectorAll(".buttons button");

  // Event listener for button clicks
  buttons.forEach((button) => {
    button.addEventListener("click", () => handleButtonClick(button.innerText));
  });

  // Event listener for Enter key press
  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      evaluateExpression();
    }
  });

  function handleButtonClick(value) {
    switch (value) {
      case "=":
        evaluateExpression();
        break;
      case "C":
        clearInput();
        break;
      case "AC":
        clearAll();
        break;
      case "DEL":
        deleteLastCharacter();
        break;
      default:
        appendToInput(value);
        break;
    }
  }

  function evaluateExpression() {
    try {
      userInput.value = eval(userInput.value);
    } catch (error) {
      userInput.value = "Error";
    }
  }

  function clearInput() {
    userInput.value = "";
  }

  function clearAll() {
    userInput.value = "";
  }

  function deleteLastCharacter() {
    userInput.value = userInput.value.slice(0, -1);
  }

  function appendToInput(value) {
    userInput.value += value;
  }

  const footer = document.querySelector("footer");

  footer.addEventListener("click", () => {
    alert("Thanks for using the calculator!😊");
  });

  const connectWithMeOnTwitter = document.querySelector(".connect-with-me-t");

  connectWithMeOnTwitter.addEventListener("click", () => {
    alert("Let's connect on Twitter!");
  });

  const connectWithMeOnLikedin = document.querySelector(".connect-with-me-l");

  connectWithMeOnLikedin.addEventListener("click", () => {
    alert("Let's connect on LinkedIn!");
  });
});
