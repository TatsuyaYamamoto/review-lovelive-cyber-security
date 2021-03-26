export const renderClickEffect = (e: MouseEvent) => {
  const x = e.pageX;
  const y = e.pageY;

  const effect = document.createElement("div");
  effect.style.top = y + "px";
  effect.style.left = x + "px";
  effect.className = "click-effect";

  effect.addEventListener("animationend", () => {
    effect.parentNode.removeChild(effect);
  });

  document.body.appendChild(effect);
};
