$(document).ready(function() { 
        $('header button').click(function() {
            $('form').slideDown();
        }) //selec o doc e adic. callback para o formulário deslizar para baixo.

        $('#botao-cancelar').click(function() { 
            $('form').slideUp();  
        }) //selec. o botão cancelar e inclui callback desliza para cima.

    $('form').on('submit', function(e) {
        e.preventDefault(); 
        const endereçoDaNovaImagem = $('#endereço-imagem-nova').val();
        const novoItem = $('<li style="display:none;"></li>'); 
        $(`<img src= "${endereçoDaNovaImagem}"/>`).appendTo(novoItem);
        $(`
            <div class= "overlay-image-link"/>
                <a href="${endereçoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
            `).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(1000);
            $('#endereço-imagem-nova').val('');
        //seleciona o form e a submissão a ñ ter event atípico.
    })
})