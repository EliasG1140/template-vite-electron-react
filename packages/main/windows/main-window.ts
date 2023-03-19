import { app, BrowserWindow } from "electron";
import { join } from 'path';

export class MainWindow {
  private readonly _win: BrowserWindow

  private constructor(){
    this._win = new BrowserWindow({
      title: 'nameApp',
      width: 800,
      height: 600,
      webPreferences: {
        preload: join(__dirname, '..', 'preload', 'index.cjs'),
        nodeIntegration: false
      }
    })

    if(app.isPackaged){
      this._win.loadURL(`file://${join(__dirname, '..', 'renderer', 'index.html')}`);
    } else {
      const url = `http://${process.env.VITE_DEV_SERVER_HOST}:${process.env.VITE_DEV_SERVER_PORT}`
      this._win.loadURL(url)
    }

    this._setupHandlersMain()
  }

  static async init(){
    return new MainWindow()
  }

  private _setupHandlersMain(){
    // Here handlers ipMain or events
  }
}