const dadosBrasil = {

    1958: {
        titulo: "BRASIL 1958",
        texto: "A Copa do Mundo de 1958, realizada na Suécia, marcou a conquista do primeiro título mundial do Brasil. A seleção brasileira encantou o mundo com um futebol ofensivo e venceu a anfitriã por 5 a 2 na grande final. Foi a competição que revelou o talento de Pelé, que, aos 17 anos, se tornou uma das maiores promessas do esporte. Essa conquista representou o início da tradição vencedora do futebol brasileiro."
    },

    1962: {
        titulo: "BRASIL 1962",
        texto: "Na Copa do Mundo de 1962, disputada no Chile, o Brasil conquistou o bicampeonato mundial. Mesmo com a lesão de Pelé durante a competição, a equipe contou com atuações brilhantes de Garrincha, que liderou a seleção até a vitória sobre a Tchecoslováquia por 3 a 1 na final. O título confirmou a força e a qualidade do futebol brasileiro."
    },

    1970: {
        titulo: "BRASIL 1970",
        texto: "A Copa do Mundo de 1970, realizada no México, é considerada uma das maiores exibições de futebol da história. Liderado por Pelé e contando com craques como Jairzinho, Rivelino e Carlos Alberto Torres, o Brasil derrotou a Itália por 4 a 1 na final e conquistou o tricampeonato. Com isso, o país ganhou definitivamente a Taça Jules Rimet."
    },

    1994: {
        titulo: "BRASIL 1994",
        texto: "Depois de 24 anos sem títulos, o Brasil voltou ao topo do futebol mundial na Copa de 1994, disputada nos Estados Unidos. A seleção, comandada por jogadores como Romário e Bebeto, chegou à final contra a Itália. Após um empate sem gols, o Brasil venceu nos pênaltis e conquistou o tetracampeonato, encerrando um longo período de espera dos torcedores."
    },

    2002: {
        titulo: "BRASIL 2002",
        texto: "A Copa do Mundo de 2002 foi realizada na Coreia do Sul e no Japão e marcou a conquista do pentacampeonato brasileiro. A seleção contou com um ataque histórico formado por Ronaldo Nazário, Rivaldo e Ronaldinho Gaúcho. Na final, o Brasil derrotou a Alemanha por 2 a 0, com dois gols de Ronaldo, conquistando seu quinto título mundial e consolidando-se como a maior seleção da história do futebol."
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