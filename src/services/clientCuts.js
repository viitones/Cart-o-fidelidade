import { apiConfig } from "./api-config.js"

export async function clientCuts({id}) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/clients`)

    const data = await response.json();

    const clientByID = data.find((client) => id === client.id)
    
    return clientByID

  } catch (error) {
    console.log(error);
    alert("Insira um ID válido")
  }
}