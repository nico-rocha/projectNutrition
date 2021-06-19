let filtro = document.querySelector("#filtrar-tabela");

filtro.addEventListener("input", function () {
  console.log(filtro.value);
  let pacientes = document.querySelectorAll(".paciente");
  if (filtro.value.length > 0) {
    for (let i = 0; i < pacientes.length; i++) {
      let paciente = pacientes[i];
      let tdNome = paciente.querySelector(".info-nome");
      let nome = tdNome.textContent;
      let expressao = new RegExp(filtro.value, "i"); //O primeiro parâmetro é o padrão (o texto da expressão regular, o que deve ser buscado) e o segundo parâmetro são uma ou mais flags (representando como queremos que a expressão regular busque).// ]

      if (!expressao.test(nome)) {
        paciente.classList.add("hide");
      } else {
        paciente.classList.remove("hide");
      }
    }
  } else {
    for (let i = 0; i < pacientes.length; i++) {
      let paciente = pacientes[i];
      paciente.classList.remove("hide");
    }
  }
});
