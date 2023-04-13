const updateBtn = document.querySelector("#update-btn");

updateBtn.addEventListener("click", () => {
  const nameInput = document.querySelector("#update-name-field");
  const addressInput = document.querySelector("#update-address-field");
  const mobileInput = document.querySelector("#update-mobile-field");
  const updatedName = document.querySelector("#updated-name");
  const updatedAddress = document.querySelector("#updated-address");
  const updatedMobile = document.querySelector("#updated-mobile");

  if (nameInput.value !== "") {
    updatedName.innerHTML = nameInput.value;
    nameInput.value = "";
  }

  if (addressInput.value !== "") {
    updatedAddress.innerHTML = addressInput.value;
    addressInput.value = "";
  }

  if (mobileInput.value !== "") {
    updatedMobile.innerHTML = mobileInput.value;
    mobileInput.value = "";
  }
});
