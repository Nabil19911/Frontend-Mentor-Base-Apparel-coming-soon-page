const btn = document.querySelector("button");
const error_message_div = document.querySelector(".error-messaage");
const input = document.querySelector("input");

const validEmail = emailInput => {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailInput.match(mailformat) || emailInput === "") {
    input.classList.add("error");
    error_message_div.classList.add("active");
    return false;
  }
  return true;
};

btn.addEventListener("click", () => {
  let userInput = input.value;
  if (validEmail(userInput)) {
    input.value = "";
  }
  validEmail(userInput);
});
input.addEventListener("keydown", () => {
  input.classList.remove("error");
  error_message_div.classList.remove("active");
});
