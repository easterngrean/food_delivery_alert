const circleAM = document.querySelector("#lightAM");
const circlePM = document.querySelector("#lightPM");
const btnAM = document.getElementById("btnAM");
const btnPM = document.getElementById("btnPM");

// change the color of the lights on button press
function lightChangeAM()
{
  circleAM.style.fill = "green";
  localStorage.setItem("lightColorAM", "green");
}

function lightChangePM()
{
  circlePM.style.fill = "green";
  localStorage.setItem("lightColorPM", "green");
}

btnAM.onclick = lightChangeAM;
btnPM.onclick = lightChangePM;

// save the color of the lights
const savedColorAM = localStorage.getItem("lightColorAM");
if (savedColorAM)
  {
    circleAM.style.fill = "green";
  }

const savedColorPM = localStorage.getItem("lightColorPM");
if (savedColorPM)
  {
    circlePM.style.fill = "green";
  }


// clear the local storage with clear button

const clearStorageBtn = document.getElementById("clear-storage");

clearStorageBtn.addEventListener("click", () => {
    localStorage.removeItem("lightColorAM");
    localStorage.removeItem("lightColorPM");
    alert("Local storage has been cleared!");
    location.reload(); // Optional: Reload the page to reset UI
  });

// show the date on the page

const d = new Date();
let dateText = d.toISOString().split("T")[0];
document.getElementById("date").innerHTML = dateText;

// clear the storage the next day

const getTodayDateString = () => 
{
  const d = new Date();
  let dateText = d.toISOString().split("T")[0];
};

const clearStorageIfDateChanged = () => 
{
  const today = getTodayDateString();
  const savedDate = localStorage.getItem("lastClearedDate");
  
  if (savedDate !== today) 
  {
    localStorage.removeItem(lightColorAM);
    localStorage.removeItem(lightColorPM); // Clear local storage
    
    localStorage.setItem("lastClearedDate", today); // Update the stored date
  
  }
};

clearStorageIfDateChanged();
console.log(localStorage.getItem("lastClearedDate"));
