const faqButtons = document.querySelectorAll(".faq__button");

function setFaqState(button, isOpen) {
  const item = button.closest(".faq__item");
  const answer = document.getElementById(button.getAttribute("aria-controls"));
  const symbol = button.querySelector(".faq__symbol");

  item.classList.toggle("is-open", isOpen);
  button.setAttribute("aria-expanded", String(isOpen));
  answer.setAttribute("aria-hidden", String(!isOpen));
  symbol.textContent = isOpen ? "−" : "＋";
}

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const shouldOpen = button.getAttribute("aria-expanded") !== "true";

    faqButtons.forEach((faqButton) => setFaqState(faqButton, false));

    if (shouldOpen) {
      setFaqState(button, true);
    }
  });
});
