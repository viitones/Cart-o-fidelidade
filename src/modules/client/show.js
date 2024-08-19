import { openModal } from "../modal/openModal"

const clientName = document.getElementById("client")
const since = document.getElementById("since")
const avatar = document.querySelector("#profile figure img")

const listOfHistory = document.getElementById("history-list")
const cuts = document.getElementById("cuts")

const profileID = document.getElementById("profile-ID")
const allCard = document.querySelectorAll("#cards-list li")

const cutsRemains = document.querySelector(".cutsRemains")
const progress = document.querySelector(".progress")
const counts = document.querySelector("#count")
const gift = document.querySelector(".gift")

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


    
    cutsRemains.innerHTML = `<span>${clientByID.loyaltyCard.cutsRemaining}</span> corte${clientByID.loyaltyCard.cutsRemaining === 1 ? "" : "s"} restante${clientByID.loyaltyCard.cutsRemaining === 1 ? "" : "s"}`
    

    progress.style.width = `${clientByID.loyaltyCard.totalCuts / clientByID.loyaltyCard.cutsNeeded * 100}%`

    counts.textContent = `${clientByID.loyaltyCard.totalCuts}`
    
    gift.classList.remove("finished")

    if(clientByID.loyaltyCard.totalCuts === 10) {
      gift.classList.add("finished")

      setTimeout(() => {
        openModal()
      }, 1000)
    }

  } catch (error) {
    console.log(error);
  }
}