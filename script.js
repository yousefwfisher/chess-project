
  document.addEventListener("DOMContentLoaded", () => {
    const typingElements = document.querySelectorAll(".typing");
    typingElements.forEach((el) => {
      const text = el.getAttribute("data-text");
      el.innerHTML = "";
      let i = 0;
      const type = () => {
        if (i < text.length) {
          el.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, 50);
        }
      };
      setTimeout(type, el.classList.contains("point-p") ? 6500 : 500);
    });
  });


