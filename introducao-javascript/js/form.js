let buttonAdd = document.querySelector("#adicionar-paciente");
buttonAdd.addEventListener("click", function (event) {
  event.preventDefault();

  let form = document.querySelector("#form-adiciona");

  let paciente = obtemPacienteDoFormulario(form);

  let erros = validaPaciente(paciente);

  if (erros.length > 0) {
    exibeErro(erros);
    return;
  }
  addPacienteTabela(paciente);

  form.reset();
  let mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";
});

function addPacienteTabela(paciente) {
  let pacienteTr = Tr(paciente);
  let tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function exibeErro(erros) {
  let ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
  erros.forEach(function (erro) {
    let li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function obtemPacienteDoFormulario(form) {
  let paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculeImc(form.peso.value, form.altura.value),
  };
  return paciente;
}

function Tr(paciente) {
  let pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(Td(paciente.nome, "info-nome"));
  pacienteTr.appendChild(Td(paciente.peso, "info-peso"));
  pacienteTr.appendChild(Td(paciente.altura, "info-altura"));
  pacienteTr.appendChild(Td(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(Td(paciente.imc, "info-imc"));

  return pacienteTr;
}

function Td(dado, classe) {
  let td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente) {
  let erros = [];

  if (paciente.nome.length == 0) {
    erros.push("Campo de nome vazio!");
  }
  if (!validaPeso(paciente.peso)) {
    erros.push("Campo de peso inválido ou vazio!");
  }
  if (!validaAltura(paciente.altura)) {
    erros.push("Campo de altura inválido ou vazio!");
  }
  if (paciente.gordura.length == 0) {
    erros.push("Campo de gordura vazio!");
  }
  return erros;
}
