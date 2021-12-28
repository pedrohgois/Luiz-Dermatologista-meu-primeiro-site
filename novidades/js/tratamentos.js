// executa a função que define a dimensão do carrousel
$(document).on('ready', carrouselResponsivo);

// executa a função "atualizaPagina" em caso de redimensionamento da página
$(window).on('resize', atualizaPagina);

// atualiza a página o redimensionamento
function atualizaPagina() {
  setTimeout(function() {
    window.location.reload(1);
  }, 100); 
}

// função define a dimensão do carrousel de acordo com o tamanho da janela
function carrouselResponsivo(){

    var w = window.outerWidth;

    if (w <= 700) {
        $(".regular").slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });

    } else {

        $(".regular").slick({
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
        });
    }
}

