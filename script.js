const circleAM = document.querySelector("#lightAM");
const circlePM = document.querySelector("#lightPM");
const btnAM = document.getElementById("btnAM");
const btnPM = document.getElementById("btnPM");


//duplicate for the buttons
const btnAMCSS = document.querySelector("#btnAM");
const btnPMCSS = document.querySelector("#btnPM");

function btnChangeAM()
{
  btnAMCSS.style.background = "red";
  localStorage.setItem("savedColorAM", "red");
  circleAM.style.fill = "red";
}

function btnChangePM()
{
  btnPMCSS.style.background = "red";
  localStorage.setItem("savedColorPM", "red");
  circlePM.style.fill = "red";
}

btnAM.onclick = btnChangeAM;
btnPM.onclick = btnChangePM;

//end duplicate for the buttons

// save the color of the lights
const savedColorAM = localStorage.getItem("btnColorAM");
if (savedColorAM)
  {
    btnPMCSS.style.background = "red";
  }

const savedColorPM = localStorage.getItem("btnColorPM");
if (savedColorPM)
  {
    btnPMCSS.style.background = "red";
  }

// clear the local storage with clear button

const clearStorageBtn = document.getElementById("clear-storage");

    clearStorageBtn.addEventListener("click", () => {
    localStorage.removeItem("btnColorAM");
    localStorage.removeItem("btnColorPM");
    alert("Local storage has been cleared!");
    location.reload(); // Optional: Reload the page to reset UI
  });

// show the date on the page

function displayDateTime () {

const d = new Date();
const date = d.toLocaleDateString("en-US", { day: "2-digit", month: "2-digit", year: "numeric" });
const time = d.toLocaleTimeString();

document.getElementById("dateTimeDisp").textContent = `${time}`;  
};

setInterval(displayDateTime, 1000);
displayDateTime();

// let dateText = d.toISOString().split("T")[0];
// document.getElementById("date").innerHTML = dateText;

// clear the storage the next day

/*
const getTodayDateString = () => 
{
  const d = new Date();
  let dateText = d.toISOString().split("T")[0];
};
*/

const clearStorageIfDateChanged = () => 
{
  const today = getTodayDateString();
  const savedDate = localStorage.getItem("lastClearedDate");
  
  if (savedDate !== today) 
  {
    localStorage.removeItem(btnColorAM);
    localStorage.removeItem(btnColorPM); // Clear local storage
    
    localStorage.setItem("lastClearedDate", today); // Update the stored date
  
  }
};

clearStorageIfDateChanged();
console.log(localStorage.getItem("lastClearedDate"));
