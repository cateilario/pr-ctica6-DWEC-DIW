export const switchDarkMode = () => {
  const switchStyle = document.getElementById("switch");

  switchStyle.addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });
};
