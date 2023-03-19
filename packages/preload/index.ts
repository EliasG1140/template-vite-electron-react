import { domReady } from "./utils"

(async () => {
  await domReady()
})()

console.log('Preload ready')