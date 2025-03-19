import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electron', {
  getStudyTime: () => ipcRenderer.invoke('get-study-time'),
  saveStudyTime: (time: number) => ipcRenderer.send('save-study-time', time),
  openStats: () => ipcRenderer.send('open-stats')
})
