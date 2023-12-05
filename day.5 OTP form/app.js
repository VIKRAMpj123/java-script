const inputs = document.querySelectorAll("input");
const btn = document.querySelector("button");

inputs.forEach((inputs, index1) => {
  inputs.addEventListener("keyup", (e) => {
    const currentInput = inputs;
    const nextinput = currentInput.nextElementSibling;
    const prevInput = currentInput.previousElementSibling;

    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }

    if (
      nextinput &&
      nextinput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextinput.removeAttribute("disabled");
      nextinput.focus();
    }

    if (e.key === "backspace") {
      inputs.forEach((inputs, index2) => {
        if (index1 <= index2 && prevInput) {
          inputs.setAttribute("disabled", true);
          inputs.value = "";
          prevInput.focus();
        }
      });
    }

    if (!inputs[3].disabled && inputs[3].value !== "") {
      btn.classList.add("active");
      return;
    }
    btn.classList.remove("active");
  });
});

window.addEventListener("load", () => inputs[0].focus());
