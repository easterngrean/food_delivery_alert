const circleAM = document.querySelector("#lightAM");
const circlePM = document.querySelector("#lightPM");
const btnPM = document.getElementById("btnPM");


const getTodayDateString = () => 
{
  const d = new Date();
  let dateText = d.toISOString().split("T")[0];
  return dateText;
};

//change color for the buttons
const btnPMCSS = document.querySelector("#btnPM");

function btnChangePM()
{
  btnPMCSS.style.background = "#141414";
  localStorage.setItem("savedColorPM", "#141414");
}

btnPM.onclick = btnChangePM;

// save the color of the lights
const savedColorPM = localStorage.getItem("savedColorPM");
if (savedColorPM)
  {
    btnPMCSS.style.background = "#141414";
  }

// clear the local storage with clear button
const clearStorageBtn = document.getElementById("clear-storage");

clearStorageBtn.addEventListener("click", () => 
  {                            
      localStorage.removeItem("savedColorPM");
      alert("Local storage has been cleared!");
      location.reload(); // Optional: Reload the page to reset UI
      localStorage.setItem("lastClearedDate", getTodayDateString);
  });

// show the time on the page
function displayDateTime () {

const d = new Date();
  
const formattedTime = d.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false, // Use 12-hour clock but suppress the AM/PM marker
}).replace(/\s?(AM|PM)/, ""); // Remove AM/PM if present

document.getElementById("dateTimeDisp").textContent = `${formattedTime}`;  
};

setInterval(displayDateTime, 1000);
displayDateTime();

// clear the storage the next day

if (!localStorage.getItem("lastClearedDate")) {
  localStorage.setItem("lastClearedDate", getTodayDateString());
}

const clearStorageIfDateChanged = () => 
{
  const todayDate = getTodayDateString();
  const savedDate = localStorage.getItem("lastClearedDate");
  if (savedDate !== todayDate) 
  {
    localStorage.removeItem("savedColorPM"); // Clear local storage
    localStorage.setItem("lastClearedDate", todayDate); // Update the stored date
  }
  else
    {
      console.log("hump");
    }
};
clearStorageIfDateChanged();

// force refresh the browser at 1am

function getMillisecondsUntilTarget (targetHour, targetMinute, targetSecond) {
  const target = new Date();
  const now = new Date();
  
  target.setHours(targetHour, targetMinute, targetSecond, 0);
  
  if (target <= now)
    {
      target.setDate(target.getDate() + 1);
    }
  return target - now;
};

const scheduleRefreshAtMidnight = () => {
const millisecondsUntilOneAm = getMillisecondsUntilTarget(1, 0, 0); // 1am

  console.log(
    `Browser will refresh in ${millisecondsUntilOneAm / 1000} seconds.`
  );
  
  // Set a timer to refresh at the calculated time
  setTimeout(() => {
    localStorage.clear(); // Clear local storage (optional)
    location.reload(); // Refresh the page
  }, millisecondsUntilOneAm);
};

// Call the function to schedule the refresh
scheduleRefreshAtMidnight();
