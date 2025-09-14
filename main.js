document.addEventListener('DOMContentLoaded', () => {
  const deadline = new Date('2026-02-08T06:00:00');
  
  const elWeeks = document.querySelector('.weeks')
  const elDays = document.querySelector('.days');
  const elHours = document.querySelector('.hours');
  const elMinutes = document.querySelector('.minutes');
  const elSeconds = document.querySelector('.seconds');

  const updateTimer = () => {
    const now = new Date();
    const diff = Math.max(0, deadline - now);

    const weeks = Math.floor(diff / (1000* 60 * 60 * 24 * 7));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24) % 7);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    
    elWeeks.textContent = String(weeks).padStart(2, '0');
    elDays.textContent = String(days).padStart(2, '0');
    elHours.textContent = String(hours).padStart(2, '0');
    elMinutes.textContent = String(minutes).padStart(2, '0');
    elSeconds.textContent = String(seconds).padStart(2, '0');

    if (diff === 0) {
      clearInterval(timerId);
    }
  };

  updateTimer();
  const timerId = setInterval(updateTimer, 1000);
});
