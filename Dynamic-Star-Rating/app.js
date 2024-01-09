const stars = document.querySelectorAll(".star");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});
