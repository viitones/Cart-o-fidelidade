const form = document.querySelector('form');

import { clientSelected } from "../client/clientLoad"

const idInput = document.querySelector("input")

form.onsubmit = async(e) => {
  e.preventDefault();
  
  try {
    const idClient = idInput.value;
    
    if(!idClient) {
      alert("Por favor, digite um ID válido")
      return idClient = "123"
    }

    clientSelected()
    
  } catch (error) {
    console.log(error);
    alert("Algo deu errado.");
  }
}
