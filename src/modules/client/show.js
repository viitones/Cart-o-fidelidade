const clientName = document.getElementById("client")
const since = document.getElementById("since")
const avatar = document.querySelector("#profile figure img")

export function clientShow(clientByID) {
  try {
    //limpa os status
    clientName.innerHTML = ""
    since.innerHTML = ""
    avatar.setAttribute("src", "")
    avatar.setAttribute("alt", `foto de perfil de ${clientByID.name}`)
    

    clientName.innerHTML = clientByID.name
    since.innerHTML = `Cliente desde ${clientByID.clientSince}`
    avatar.setAttribute("src", clientByID.avatar)
    avatar.setAttribute("alt", `Foto de perfil de ${clientByID.name}`)
    
    
    

  } catch (error) {
    console.log(error);
  }
}