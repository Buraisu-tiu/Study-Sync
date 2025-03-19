import { app, BrowserWindow, ipcMain } from 'electron'
import Datastore from 'nedb-promises' // Use the promises version

let mainWindow: BrowserWindow | null = null
const db = Datastore.create({ filename: 'study.db', autoload: true })

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
    preload: __dirname + '/../preload/preload.js',
    contextIsolation: true,  // Ensure the renderer can't access Node APIs directly
    nodeIntegration: false,   // Keep security high
  },
  })

  mainWindow.loadURL('http://localhost:3000')
  
})

ipcMain.on('save-study-time', async (_, time) => {
  await db.update({ key: 'studyTime' }, { key: 'studyTime', value: time }, { upsert: true })
})

ipcMain.handle('get-study-time', async () => {
  const doc = await db.findOne<{ key: string; value: number }>({ key: 'studyTime' })
  return doc?.value ?? 0  // If doc exists, return value; otherwise, return 0
})

