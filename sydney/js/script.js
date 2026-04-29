const stage = document.querySelector(".xatspace");
const art = document.querySelector(".cinnamoroll");

function setPointerMotion(event) {
  const bounds = stage.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;

  art.style.setProperty("--tilt-x", `${x * 3}px`);
  art.style.setProperty("--tilt-y", `${y * 2}px`);
  art.style.setProperty("--eye-x", `${x * 6}px`);
  art.style.setProperty("--eye-y", `${y * 4}px`);
}

function clearPointerMotion() {
  art.style.setProperty("--tilt-x", "0px");
  art.style.setProperty("--tilt-y", "0px");
  art.style.setProperty("--eye-x", "0px");
  art.style.setProperty("--eye-y", "0px");
}

stage.addEventListener("pointermove", setPointerMotion);
stage.addEventListener("pointerleave", clearPointerMotion);
