const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstnField = document.querySelector("#firstnField");
  const lastnField = document.querySelector("#lastnField");
  const emailField = document.querySelector("#emailField");
  const passField = document.querySelector("#passField");

  if (firstnField.value === "") {
    error("firstnField");
  } else {
    noerror("firstnField");
  }
  if (lastnField.value === "") {
    error("lastnField");
  } else {
    noerror("lastnField");
  }
  if (emailField.value === "") {
    error("emailField");
  } else if (!isValid(emailField.value)) {
    error("emailField");
  } else {
    noerror("emailField");
  }
  if (passField.value === "") {
    error("passField");
  } else {
    noerror("passField");
  }
  if (
    !(
      firstnField.value === "" ||
      lastnField.value === "" ||
      emailField.value === "" ||
      passField.value === ""
    ) &&
    isValid(emailField.value)
  ) {
    setTimeout(() => {
      alert("Submitted!");
      firstnField.value = "";
      lastnField.value = "";
      emailField.value = "";
      passField.value = "";
    }, 0);
  }
});

const noerror = (field) => {
  const formTargets = document.querySelector(`#${field}`).parentNode;
  formTargets.querySelector("#img").classList.add("hidden");
  formTargets.querySelector(`#${field}`).classList.add("focus:outline-Blue");
  formTargets
    .querySelector(`#${field}`)
    .classList.remove("border-[hsl(0_100%_74%)]");
  formTargets.querySelector(`#${field}`).classList.remove("outline-none");
  formTargets.parentNode.querySelector("#p").classList.add("hidden");
  formTargets
    .querySelector(`#${field}`)
    .classList.add("border-[hsl(249_10%_26%/.3)]");
};

const error = (field) => {
  const formTargets = document.querySelector(`#${field}`).parentNode;
  formTargets.querySelector("#img").classList.remove("hidden");
  formTargets.querySelector(`#${field}`).classList.remove("focus:outline-Blue");

  formTargets.querySelector(`#${field}`).classList.add("outline-none");
  formTargets
    .querySelector(`#${field}`)
    .classList.remove("border-[hsl(249_10%_26%/.3)]");
  formTargets
    .querySelector(`#${field}`)
    .classList.add("border-[hsl(0_100%_74%)]");
  formTargets.parentNode.querySelector("#p").classList.remove("hidden");
};

const isValid = (email) => {
  let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (regex.test(email)) {
    return true;
  } else {
    return false;
  }
};
