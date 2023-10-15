/*
    EXAMPLE
*/

// // const modeButton = document.querySelector("#mode");
// // const main = document.querySelector("main");

// // modeButton.addEventListener("click", () => {
// // 	if (modeButton.textContent.includes("🕶️")) {
// // 		main.style.background = "#000";
// // 		main.style.color = "#fff";
// // 		modeButton.textContent = "🔆";
// // 	} else {
// // 		main.style.background = "#eee";
// // 		main.style.color = "#000";
// // 		modeButton.textContent = "🕶️";
// // 	}
// // });

/*
    EXPERIMENTAL
*/

const toggle = document.getElementById("darkmode-toggle")
const cssRoot = document.querySelector(":root")

toggle.addEventListener("click", toggleDarkMode)

function toggleDarkMode() {
    if (toggle.checked)
         lightsoff()
    else
         lightson()
}

function lightson() {
    cssRoot.style.setProperty('--main-background-color', '#ff8200');
    cssRoot.style.setProperty('--panel-background-color', '#ffffff');
    cssRoot.style.setProperty('--body-text-color', '#58595b');
}

function lightsoff() {
    cssRoot.style.setProperty('--main-background-color', '#000');
    cssRoot.style.setProperty('--panel-background-color', '#000');
    cssRoot.style.setProperty('--body-text-color', '#fff');
}