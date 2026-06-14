const dadosBrasil = {

    1958: {
        titulo: "BRASIL 1958",
        texto: "Primeiro título mundial da Seleção Brasileira. Com Pelé aos 17 anos e Garrincha brilhando, o Brasil venceu a Suécia por 5 a 2 na final."
    },

    1962: {
        titulo: "BRASIL 1962",
        texto: "Bicampeão mundial. Mesmo sem Pelé em boa parte da competição, Garrincha liderou a equipe rumo ao segundo título consecutivo."
    },

    1970: {
        titulo: "BRASIL 1970",
        texto: "Primeiro tricampeão da história das Copas. Considerada por muitos a melhor seleção de todos os tempos."
    },

    1994: {
        titulo: "BRASIL 1994",
        texto: "Após 24 anos sem conquistar a Copa, o Brasil tornou-se o primeiro tetracampeão mundial vencendo a Itália nos pênaltis."
    },

    2002: {
        titulo: "BRASIL 2002",
        texto: "Pentacampeão mundial. Ronaldo marcou dois gols na final contra a Alemanha e terminou como artilheiro da competição."
    }

};

function trocarTitulo(ano) {

    document.getElementById("titulo").textContent =
        dadosBrasil[ano].titulo;

    document.getElementById("descricao").textContent =
        dadosBrasil[ano].texto;

    document.querySelectorAll(".estrela")
        .forEach(estrela => estrela.classList.remove("ativa"));

    event.target.classList.add("ativa");
}