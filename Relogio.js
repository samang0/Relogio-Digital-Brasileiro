// Função para atualizar o relógio
function updateClock() {
  // Obtém o valor selecionado no elemento com o ID "city" (a cidade selecionada)
  const selectedCity = document.getElementById("city").value;

  // Cria um objeto "options" para formatar a hora
  const options = {
      timeZone: selectedCity, // Define a zona de tempo com base na cidade selecionada
      timeStyle: 'medium',    // Define o estilo de exibição da hora como 'medium' (exemplo: "15:30:45")
      hour12: false           // Define que o formato de 24 horas deve ser usado
  };

  // Obtém a hora atual formatada com base nas opções definidas
  const formattedTime = new Date().toLocaleTimeString(undefined, options);

  // Atualiza o conteúdo do elemento com o ID "clock" com a hora formatada
  document.getElementById("clock").textContent = formattedTime;
}

// Chama a função updateClock() inicialmente para exibir a hora correta ao carregar a página
updateClock();

// Adiciona um ouvinte de evento para o elemento "city" que chama updateClock() quando a cidade é alterada
document.getElementById("city").addEventListener("change", updateClock);

//// Atualize o relógio a cada segundo
setInterval(updateClock, 1000);

