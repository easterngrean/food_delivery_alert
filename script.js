const circleAM = document.querySelector("#lightAM");
const circlePM = document.querySelector("#lightPM");
const btnAM = document.getElementById("btnAM");
const btnPM = document.getElementById("btnPM");

function lightChangeAM()
{
  circleAM.style.fill = "green";
  localStorage.setItem("lightColor", "green");
}

const savedColorAM = localStorage.getItem("lightColor");
if (savedColorAM)
  {
    circleAM.style.fill = "green";
  }

function lightChangePM()
{
  circlePM.style.fill = "green";
}

const savedColorPM = localStorage.getItem("lightColor");
if (savedColorPM)
  {
    circlePM.style.fill = "green";
  }

function lightChangePM()
{
  circlePM.style.fill = "green";
}

btnAM.onclick = lightChangeAM;
btnPM.onclick = lightChangePM;

const clearStorageBtn = document.getElementById("clear-storage");

clearStorageBtn.addEventListener("click", () => {
    localStorage.clear();
    alert("Local storage has been cleared!");
    location.reload(); // Optional: Reload the page to reset UI
  });
