import { app, BrowserWindow } from 'electron'
import { Application } from './application'

app.whenReady().then(async ()=>{
  await Application.init()
  Application.instance.run()
})