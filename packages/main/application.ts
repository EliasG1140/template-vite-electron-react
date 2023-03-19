import { MainWindow } from "./windows/main-window"

export class Application {
  private static _instance: Application

  static async init(){
    if(Application._instance) throw new Error("La aplicación ya ha sido inicializada.")
    Application._instance = new Application()
  }

  static get instance(): Application {
    if(!Application._instance) throw new Error("La aplicación no ha sido inicializada")
    return Application._instance
  }

  async run(){
    await MainWindow.init()
  }
}