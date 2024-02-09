$(document).ready(function(){
    // Função para adicionar uma nova tarefa
    function adicionarTarefa() {
        var tarefa = $('#inputTarefa').val(); // Obtém o valor do campo de texto
        if (tarefa !== '') {
            $('#listaTarefas').append('<li>' + tarefa + '</li>'); // Adiciona a tarefa à lista
            $('#inputTarefa').val(''); // Limpa o campo de texto
        }
    }

    // Evento de submissão do formulário
    $('#formTarefa').submit(function(event){
        event.preventDefault(); // Previne o comportamento padrão do formulário
        adicionarTarefa(); // Chama a função para adicionar a tarefa
    });

    // Evento de clique nos itens da lista para aplicar efeito de linha através de line-through
    $('#listaTarefas').on('click', 'li', function(){
        $(this).toggleClass('concluida');
    });
});
