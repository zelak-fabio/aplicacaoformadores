document.addEventListener('DOMContentLoaded', function () {
    let tamanhoAtualFonte = 1;

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const corpoDoSite = document.getElementById('body');
    const introducaoSite = document.getElementById('introducao');
    const atividadesSite = document.getElementById('atividades');
    
    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
    
    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

    botaoDeAcessibilidade.addEventListener('click',function(){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
    })    

    function keyPressed(evt){
        evt = evt || window.event;
        var key = evt.keyCode || evt.which;
        return String.fromCharCode(key); 
    }

    document.onkeypress = function(evt) {
        var str = keyPressed(evt);
        
        if(str == 'f' || str == 'F'){
                        corpoDoSite.classList.toggle('fundo-escuro');
            introducaoSite.classList.toggle('container-escuro');
            atividadesSite.classList.toggle('container-escuro');
        }
    };
})

