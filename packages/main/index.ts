import { app, BrowserWindow } from 'electron'

app.whenReady().then(()=>{
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })
})