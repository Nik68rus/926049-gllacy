var link = document.querySelector(".feedback-show");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".modal-close");
var yourName = popup.querySelector("[name=name]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");
var feedbackContent = popup.querySelector("[name=feedback]");
var isStorageSupport = true;
var storageName = "";
var storageMail = "";

try {
  storageName = localStorage.getItem("name");
  storageMail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storageName) {
    yourName.value = storageName;
    email.focus();
  } else {
    yourName.focus();
  }
  if (storageMail) {
    email.value = storageMail;
    feedbackContent.focus();
  } else {
    if (storageName) {
      email.focus
    } else {
      yourName.focus();
    }
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!yourName.value||!email.value||!feedbackContent.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", yourName.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
