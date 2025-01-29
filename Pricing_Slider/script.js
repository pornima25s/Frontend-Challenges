const slider = document.getElementById('price-slider');
const tooltip = document.getElementById('tooltip');

slider.addEventListener('input', (event) => {
  const value = event.target.value;
  tooltip.textContent = value;
  const percent = (value / slider.max) * 100;
  tooltip.style.left = `calc(${percent}% - 20px)`; // Adjust for alignment
});
