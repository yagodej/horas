

function carregar() {
    let titulo = document.getElementById("titulo");
    let foto = document.getElementById("foto");
    let data = new Date();
    let hora = data.getHours();
    
    if (hora >= 6 && hora < 12) {  // Corrige a comparação
        titulo.innerHTML = `Agora são ${hora} horas, bom dia!`;
        
    } else if (hora >= 12 && hora < 18) {  // Corrige a comparação
        titulo.innerHTML = `Agora são ${hora} horas, boa tarde!`;
        foto.src = "fim-de-tarde.jpg";
        document.body.style.backgroundColor =  "#b9846f";
    } else {
        titulo.innerHTML = `Agora são ${hora} horas, boa noite!`;
        foto.src = "8440112-paisagem-noite-em-fprest-com-lua-cheia-e-nuvens-foto.jpg";  // Substitua por uma imagem adequada
        document.body.style.background = "#515154";
    }
}
