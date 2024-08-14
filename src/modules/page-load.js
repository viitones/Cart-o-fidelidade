import { apiConfig } from "../services/api-config.js"
import { clientShow } from "./client/show.js"

document.addEventListener("DOMContentLoaded", async function() {
  try {
    const response = await fetch(`${apiConfig.baseURL}/clients`)
    
    const data = await response.json()

    const firstClient = data.find((client) => client.id === "124-537-835-230")

    clientShow(firstClient)
  } catch (err) {
    console.log(err);
    
  }
})