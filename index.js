const {app , BrowserWindow} = require("electron");

let mainWindow = null;

function createWindow(){
	mainWindow = new BrowserWindow({width : 800 , height : 600});
	mainWindow.loadURL("file://" + __dirname + "/main.html");
}

app.on("ready" , createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
	app.quit();
});
