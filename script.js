const currentTime = document.querySelector('[data-testid="currentTimeUTC"]');
const currentDay = document.querySelector('[data-testid="currentDay"]');
const timeEl = document.querySelector(".time");

// The days of the weeks in an array
//prettier-ignore
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//

//Function to update the Time and Day
const updateTime = function () {
  const date = new Date();
  const day = date.getUTCDay();
  const hour = date.getUTCHours().toString().padStart(2, 0);
  const minute = date.getUTCMinutes().toString().padStart(2, 0);
  const seconds = date.getUTCSeconds().toString().padStart(2, 0);

  console.log(date.getUTCHours());
  timeEl.textContent = `${hour} : ${minute} : ${seconds}`;
  currentDay.textContent = days[day];
};

updateTime();
//Function to update the Time and Day every 1seconds
setInterval(updateTime, 1000);
