function carregar() {
    
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let texto = document.querySelector("p#nome")
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas. `
    if (hora >= 4 && hora < 12){
        //Bom dia 
        img.src = 'imagens/manha.png'
        document.body.style.background = '#fadeb9'
    }
        else if (hora >= 12 && hora < 18){
            //Boa tarde
            img.src = 'imagens/tarde.png'
            document.body.style.background = '#cda253'
        }
            else if(hora >= 18 || hora < 4){
                img.src = 'imagens/noite.png'
                document.body.style.background = '#122546'
                texto.style.color = "white"
              //Boa noite
            }
}

