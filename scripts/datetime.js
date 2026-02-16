// Cache DOM element for better performance
const timeElement = document.querySelector('.time-clock time');

function updateClock() {
  const now = new Date(); 
  
  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };

  if (timeElement) {
    timeElement.setAttribute('datetime', now.toISOString());
    timeElement.textContent = now.toLocaleDateString(undefined, options);
  }
}

// Initialize and update every second
updateClock();
setInterval(updateClock, 1000);