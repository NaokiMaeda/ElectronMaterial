const {app , BrowserWindow} = require("electron");
const path = require("path");

let mainWindow = null;

function createWindow(){
	mainWindow = new BrowserWindow({
		width : 800 , height : 600 ,
		// webPreferences : {
		// 	nodeIntegration : false
		// }
	});
	const modelPath = path.join("file://", __dirname,"main.html");
	mainWindow.loadURL(modelPath);
}

app.on("ready" , createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
	app.quit();
});
