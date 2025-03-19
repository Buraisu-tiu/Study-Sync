import { BrowserWindow, ipcMain } from 'electron'

let statsWindow: BrowserWindow | null = null

ipcMain.on('open-stats', () => {
  if (!statsWindow) {
    statsWindow = new BrowserWindow({
      width: 400,
      height: 300,
      webPreferences: { preload: __dirname + '/../preload/preload.js' }
    })
    statsWindow.loadURL('http://localhost:3000/stats') // Load stats page
    statsWindow.on('closed', () => (statsWindow = null))
  }
})
