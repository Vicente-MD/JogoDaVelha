var rodada = 1;
var caixasX = []
var caixasCirculo = []

function marcar(caixa) {
    var img = document.createElement("img");
    var vez = (rodada % 2 === 0);

    vez ? img.src = "imagens/circulo.png" : img.src = "imagens/x.png";

    var block = document.getElementById(caixa);
    const filho = block.querySelector("img");

    if (filho === null) {
        block.appendChild(img);
        vez ? caixasCirculo.push(caixa) : caixasX.push(caixa);
        vencX = verificaX();
        vencC = verificaCirculo();
        rodada += 1;
        if (rodada > 9) {
            if (!vencX && !vencC) {
                deuVelha();
                resultado();
            }
        }
    }
}

function verificaX() {
    if (caixasX.length >= 3) {
        if ((caixasX.includes('cx1') && caixasX.includes('cx2')) && caixasX.includes('cx3')) {
            vencedorX();
            resultado();
            return true;
        } else if ((caixasX.includes('cx1') && caixasX.includes('cx4')) && caixasX.includes('cx7')) {
            vencedorX();
            resultado();
            return true;
        } else if ((caixasX.includes('cx1') && caixasX.includes('cx5')) && caixasX.includes('cx9')) {
            vencedorX();
            resultado();
            return true;
        } else if ((caixasX.includes('cx4') && caixasX.includes('cx5')) && caixasX.includes('cx6')) {
            vencedorX();
            resultado();
            return true;
        } else if ((caixasX.includes('cx7') && caixasX.includes('cx8')) && caixasX.includes('cx9')) {
            vencedorX();
            resultado();
            return true;
        } else if ((caixasX.includes('cx7') && caixasX.includes('cx5')) && caixasX.includes('cx3')) {
            vencedorX();
            resultado();
            return true;
        } else if ((caixasX.includes('cx2') && caixasX.includes('cx5')) && caixasX.includes('cx8')) {
            vencedorX();
            resultado();
            return true;
        } else if ((caixasX.includes('cx3') && caixasX.includes('cx6')) && caixasX.includes('cx9')) {
            vencedorX();
            resultado();
            return true;
        } else {
            return false;
        }
    }
}

function vencedorX() {
    var e = document.createElement('h1');
    e.textContent = 'O JOGADOR 1 GANHOU!!!';
    document.getElementById('resultado').appendChild(e);
}

function deuVelha() {
    var e = document.createElement('h1');
    e.textContent = 'Deu velha!!!';
    document.getElementById('resultado').appendChild(e);
}

function verificaCirculo() {
    if (caixasCirculo.length >= 3) {
        if ((caixasCirculo.includes('cx1') && caixasCirculo.includes('cx2')) && caixasCirculo.includes('cx3')) {
            vencedorCirculo();
            resultado();
            return true;
        } else if ((caixasCirculo.includes('cx1') && caixasCirculo.includes('cx4')) && caixasCirculo.includes('cx7')) {
            vencedorCirculo();
            resultado();
            return true;
        } else if ((caixasCirculo.includes('cx1') && caixasCirculo.includes('cx5')) && caixasCirculo.includes('cx9')) {
            vencedorCirculo();
            resultado();
            return true;
        } else if ((caixasCirculo.includes('cx4') && caixasCirculo.includes('cx5')) && caixasCirculo.includes('cx6')) {
            vencedorCirculo();
            resultado();
            return true;
        } else if ((caixasCirculo.includes('cx7') && caixasCirculo.includes('cx8')) && caixasCirculo.includes('cx9')) {
            vencedorCirculo();
            resultado();
            return true;
        } else if ((caixasCirculo.includes('cx7') && caixasCirculo.includes('cx5')) && caixasCirculo.includes('cx3')) {
            vencedorCirculo();
            resultado();
            return true;
        } else if ((caixasCirculo.includes('cx2') && caixasCirculo.includes('cx5')) && caixasCirculo.includes('cx8')) {
            vencedorCirculo();
            resultado();
            return true;
        } else if ((caixasCirculo.includes('cx3') && caixasCirculo.includes('cx6')) && caixasCirculo.includes('cx9')) {
            vencedorCirculo();
            resultado();
            return true;
        } else {
            return false;
        }
    }
}

function vencedorCirculo() {
    var e = document.createElement('h1');
    e.textContent = 'O JOGADOR 2 GANHOU!!!';
    document.getElementById('resultado').appendChild(e);
}

function resultado() {
    document.getElementById('c').style.display = 'none';
    document.getElementById('janela').style.display = '';
}

function fechar(elemento) {
    elemento.style.display = 'none';
    document.getElementById('c').style.display = '';
}

function fecharResultado() {
    document.getElementById('janela').style.display = 'none';
}