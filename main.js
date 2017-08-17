const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const url = require('url')
const mymod = require('./mymodule')

let mainWindow

function createWindow () {
  console.log(mymod.abc);
  mainWindow = new BrowserWindow({width: 800, height: 600})

  mainWindow.loadURL(url.format({
    pathname: require('./index.html'),
    protocol: 'file:',
    slashes: true
  }))
}

app.on('ready', createWindow)
