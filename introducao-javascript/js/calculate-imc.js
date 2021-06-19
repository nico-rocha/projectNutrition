let title = document.querySelector(".title");
title.textContent = "Clínica de Nutrição";

let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  let paciente = pacientes[i];

  let tdPeso = paciente.querySelector(".info-peso");
  let peso = tdPeso.textContent;

  let tdAltura = paciente.querySelector(".info-altura");
  let altura = tdAltura.textContent;

  let tdImc = paciente.querySelector(".info-imc");

  let pesoValido = validaPeso(peso);
  let alturaValida = validaAltura(altura);

  if (!pesoValido) {
    console.log("Digite um peso válido");
    pesoValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaValida) {
    console.log("Digite uma altura válida");
    alturaValida = false;
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido");
  }

  if (alturaValida && pesoValido) {
    let imc = calculeImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function validaPeso(peso) {
  if (peso > 2 && peso < 406) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura > 0.454 && altura <= 2.2) {
    return true;
  } else {
    return false;
  }
}

function calculeImc(peso, altura) {
  let imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}
