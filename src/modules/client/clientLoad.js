import { clientCuts } from "../../services/clientCuts.js"
import { clientShow } from "./show.js"

const idInput = document.querySelector("input")


export async function clientSelected() {

  const id = idInput.value;

  const clientSelectedOnDB = await clientCuts({ id })

  
  clientShow(clientSelectedOnDB)
}