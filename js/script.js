const fullNameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const fullNameOutput = document.getElementById("fullName");
const phoneNumberOutput = document.getElementById("phoneNumber");
const emailAddressOutput = document.getElementById("emailAddress");
const messageOutput = document.getElementById("outputMessage");

document
  .querySelector(".sectionTwo-contact-input")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (
      !fullNameInput.value ||
      !phoneInput.value ||
      !emailInput.value ||
      !messageInput.value
    ) {
      alert("Data tidak boleh kosong!");
      return;
    }

    fullNameOutput.textContent = `Full Name : ${fullNameInput.value}`;
    phoneNumberOutput.textContent = `Phone Number : ${phoneInput.value}`;
    emailAddressOutput.textContent = `Email Address : ${emailInput.value}`;
    messageOutput.textContent = `Message : ${messageInput.value}`;
  });

// ALERT
document.addEventListener("DOMContentLoaded", function () {
  var userName = prompt("Masukkan nama Anda:");
  if (userName !== null && userName !== "") {
    document.getElementById("userName").textContent = userName;
  }
});
