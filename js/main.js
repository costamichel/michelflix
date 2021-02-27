/*Função criada para tornar dinâmico a navegação*/

var lista = [];

class Filme{
    constructor(nome, descricao, link_tmdb, youtube_embed){
        this.nome = nome;
        this.descricao = descricao;
        this.link_tmdb = link_tmdb;
        this.youtube_embed = youtube_embed;
    }
}

/*Insere novos filmes na lista*/
nome = "Game of Thrones";
descricao = "Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, sete nobres famílias lutam pelo controle da mítica terra de Westeros, dividida depois de uma guerra. Num cenário que lembra a Europa medieval, reis, rainhas, cavaleiros e renegados usam todos os meios possíveis em um jogo político pela disputa do Trono de Ferro, o símbolo do poder absoluto.";
link_tmdb = "https://www.themoviedb.org/tv/1399-game-of-thrones?language=pt-BR";
youtube_embed = "https://www.youtube.com/embed/ugpn9NBNcpE";
lista[lista.length] = new Filme(nome, descricao, link_tmdb, youtube_embed);

nome = "Gladiador";
descricao = "Nos dias finais do reinado de Marcus Aurelius (Richard Harris), o imperador desperta a ira de seu filho Commodus (Joaquin Phoenix) ao tornar pública sua predileção em deixar o trono para Maximus (Russell Crowe), o comandante do exército romano. Sedento pelo poder, Commodus mata seu pai, assume a coroa e ordena a morte de Maximus, que consegue fugir antes de ser pego e passa a se esconder sob a identidade de um escravo e gladiador do Império Romano.";
link_tmdb = "https://www.themoviedb.org/movie/98-gladiator";
youtube_embed = "https://www.youtube.com/embed/cXg62-t8BWs";
lista[lista.length] = new Filme(nome, descricao, link_tmdb, youtube_embed);

nome = "La casa de papel";
descricao = "Um homem misterioso que atende pelo nome de El Profesor, está planejando o maior assalto do século. A fim de realizar o ambicioso plano ele recruta uma gangue de oito pessoas com certas habilidades que não tem nada a perder. O objetivo é infiltrar na Casa da Moeda, de modo que eles possam imprimir 2,4 bilhões de euros. Para fazer isso eles precisam de onze dias de reclusão, durante o qual eles vão ter que lidar com sessenta e sete reféns e as forças da Polícia de Elite, com cenas de muita ação e planos brilhantes de El Profesor.";
link_tmdb = "https://www.themoviedb.org/tv/71446-la-casa-de-papel";
youtube_embed = "https://www.youtube.com/embed/YrJH5SNR-ik";
lista[lista.length] = new Filme(nome, descricao, link_tmdb, youtube_embed);

nome = "Vingadores: Ultimato";
descricao = "Após os eventos devastadores de 'Vingadores: Guerra Infinita', o universo está em ruínas devido aos esforços do Titã Louco, Thanos. Com a ajuda de aliados remanescentes, os Vingadores devem se reunir mais uma vez a fim de desfazer as ações de Thanos e restaurar a ordem no universo de uma vez por todas, não importando as consequências.";
link_tmdb = "https://www.themoviedb.org/movie/299534-avengers-endgame";
youtube_embed = "https://www.youtube.com/embed/g6ng8iy-l0U";
lista[lista.length] = new Filme(nome, descricao, link_tmdb, youtube_embed);

nome = "As branquelas";
descricao = "Os irmãos Marcus (Marlon Wayans) e Kevin Copeland (Shawn Wayans) são detetives do FBI que estão com problemas no trabalho. A última investigação da dupla foi um grande fracasso e eles estão sob a ameaça de serem demitidos. Quando um plano para sequestrar as mimadas irmãs Brittany (Maitland Ward) e Tiffany Wilson (Anne Dudek) é descoberto, o caso é entregue aos principais rivais dos irmãos Copeland, os agentes Vincent Gomez (Eddie Velez) e Jack Harper (Lochlyn Munro). Para aumentar ainda mais a humilhação da dupla, eles são escalados para escoltar as jovens mimadas do aeroporto até o local de um evento pelo qual elas esperaram por meses. Porém no trajeto um acidente de carro provoca um verdadeiro desastre: enquanto uma das irmãs arranha o nariz, a outra corta o lábio. Desesperadas, elas se recusam a ir ao evento. É quando,para salvar o emprego, Marcus e Kevin decidem por assumir as identidades das irmãs.";
link_tmdb = "https://www.themoviedb.org/movie/12153-white-chicks";
youtube_embed = "https://www.youtube.com/embed/cjnmsoJavj0";
lista[lista.length] = new Filme(nome, descricao, link_tmdb, youtube_embed);

/*carrega filme inicial*/
    document.getElementById("filme-titulo").innerHTML = lista[0].nome.toUpperCase();
    document.getElementById("filme-descricao").innerHTML = lista[0].descricao;
    document.getElementById("botao-mais").value = "0";
    let fprin = document.getElementsByClassName("filme-principal");
    fprin[0].style.background = `linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('img/cover${(0+1)}.jpg')`;

    /*Insere elementos no carrosel*/
    var tam_lista = lista.length;
    document.getElementById("filmes-carrossel").innerHTML = "";
    for(let i = 0; i<tam_lista; i++){
        let elemento = document.getElementById("filmes-carrossel");
        let str = `<div class="item">
            <img class="box-filme" src="img/mini${(i+1)}.jpg" alt="${i}" srcset="" onclick="alteraFilme(this)">
        </div>`;
        elemento.innerHTML = elemento.innerHTML + str;
    }

/*Ao clicar no botão "Mais Informações"*/
    function abreInfo(elemento){
        window.open(lista[elemento.value].link_tmdb);

    }

/*Ao clicar em um item da lista*/
    function alteraFilme(elemento){
        let n_elemento = elemento.alt;
        document.getElementById("filme-titulo").innerHTML = lista[n_elemento].nome.toUpperCase();
        document.getElementById("filme-descricao").innerHTML = lista[n_elemento].descricao;
        document.getElementById("botao-mais").value = n_elemento;
        document.getElementById("botao-assista").value = n_elemento;
        let fprin = document.getElementsByClassName("filme-principal");
        n_elemento = parseInt(n_elemento) + 1;
        fprin[0].style.background = `linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('img/cover${n_elemento}.jpg')`;
        fprin[0].style.transition = "background 3s ease-in-out";
    }

/*Função para abrir o popup com o trailer do Youtube*/
function abreTrailer(elemento){
    //define as dimensões do popup
    let largura = (screen.width)/1.5;
    let altura = (screen.height)/1.5;
    let cima = ((screen.height)/2) - (altura/2);
    let esquerda = ((screen.width)/2) - (largura/2);
    //processa popup a gerar
    let n_elemento = elemento.value;
    n_elemento = parseInt(n_elemento);
    let youtube_incorpore = `<iframe width="${largura}" height="${altura}" src="${lista[n_elemento].youtube_embed}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    var janela_popup = window.open('', 'popup', `width=${(largura)}px, height=${(altura)}px, top=${cima}px, left=${esquerda}px`);
    //abre popup e ajusta margens
    janela_popup.document.write(youtube_incorpore);
    janela_popup.document.getElementsByTagName("BODY")[0].style.margin = 0;
    janela_popup.document.getElementsByTagName("BODY")[0].style.padding = 0;
    janela_popup.document.getElementsByTagName("iframe")[0].style.margin = 0;
    janela_popup.document.getElementsByTagName("iframe")[0].style.margin = 0;

}