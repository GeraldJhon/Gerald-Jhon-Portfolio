function updateClock(){
    const now = new Date(); 
    const datetimeAttr = now.toISOString();

    const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };


 const displayText = now.toLocaleDateString('en-US', options);
  
  const timeElement = document.querySelector('.time-clock time');
  if (timeElement) {
    timeElement.setAttribute('datetime', datetimeAttr);
    timeElement.textContent = displayText;
  }
}
updateClock();

setInterval(updateClock, 1000);

