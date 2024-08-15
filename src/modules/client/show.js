const clientName = document.getElementById("client")
const since = document.getElementById("since")
const avatar = document.querySelector("#profile figure img")

const listOfHistory = document.getElementById("history-list")
const cuts = document.getElementById("cuts")

const profileID = document.getElementById("profile-ID")
const allCard = document.querySelectorAll("#cards-list li")

export function clientShow(clientByID) {
  try {
    //limpa os status
    clientName.innerHTML = ""
    since.innerHTML = ""
    avatar.setAttribute("src", "")
    avatar.setAttribute("alt", `foto de perfil de ${clientByID.name}`)
    listOfHistory.innerHTML = ""

    

    clientName.innerHTML = clientByID.name
    since.innerHTML = `Cliente desde ${clientByID.clientSince}`
    avatar.setAttribute("src", clientByID.avatar)
    avatar.setAttribute("alt", `Foto de perfil de ${clientByID.name}`)

    cuts.innerHTML = ""
    const cutsFromAPI = clientByID.appointmentHistory
    cuts.textContent = `${cutsFromAPI.length} ${cutsFromAPI.length === 1 ? "corte" : "cortes"}`
    
    
    if(cutsFromAPI.length >= 1) {
      cutsFromAPI.map((cut) => {

        const list = document.createElement("li")
        const div = document.createElement("div")
        const spanDate = document.createElement("span")
        const spanHour = document.createElement("span")
        const icon = document.createElement("i")
    
        spanDate.textContent = cut.date
        spanHour.textContent = cut.time
        div.append(spanDate, spanHour)
        
        icon.classList.add("ph", "ph-seal-check")
        list.append(div, icon)
        listOfHistory.append(list)
      });
    }

    profileID.textContent = ""
    profileID.textContent = `ID: ${clientByID.id}`
    
    allCard.forEach((card) => {
      card.classList.remove("pinned");
    })

    let count = 0
    allCard.forEach((card) => {
      if (count < cutsFromAPI.length) {
        card.classList.add("pinned");
        count++;
      }
    })


    

  } catch (error) {
    console.log(error);
  }
}