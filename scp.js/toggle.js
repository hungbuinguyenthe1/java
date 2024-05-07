function toggleSwitch() {
    var toggle = document.getElementById("toggleSwitch");
    if (toggle.checked) {
      toggle.checked = false;
      toggle.parentElement.classList.remove("on");
    } else {
      toggle.checked = true;
      toggle.parentElement.classList.add("on");
    }
  }

