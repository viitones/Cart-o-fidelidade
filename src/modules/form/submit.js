const form = document.querySelector('form');

import { clientSelected } from "../client/clientLoad"

const clientName = document.getElementById("client")
const idInput = document.querySelector("input")

form.onsubmit = async(e) => {
  e.preventDefault();
  
  try {
    const idClient = idInput.value.trim();
    console.log(idClient);
    
    if(!idClient) {
      return alert("Por favor, digite um ID válido")
    }

    clientSelected()
    
  } catch (error) {
    console.log(error);
    alert(error);
  }
  
}