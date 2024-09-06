function pesquisar(){
    // Obter a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(section); // Para fins de depuração, verifica se a seção foi encontrada
  
    if(!campoPesquisa){
      section.innerHTML = "<p>DIGITE ALGO PRIMEIRO</p>";
      return;
    }

    campoPesquisa = campoPesquisa.toLowerCase(); //transforma todas as letras em minúscula

    // Inicializar uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let diretor = "";
    let lancamento = "";
    let tags = ""; 

    // Iterar sobre os dados e construir o HTML para cada resultado
    for(let dado of dados){
      titulo = dado.titulo.toLowerCase();
      diretor = dado.diretor.toLowerCase();
      lancamento = dado.lancamento.toLowerCase();
      tags = dado.tags.toLowerCase();

      if(titulo.includes(campoPesquisa) || diretor.includes(campoPesquisa) || lancamento.includes(campoPesquisa) || tags.includes(campoPesquisa)){ //Cria um novo elemento
        resultados += `
          <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">
              Diretor: ${dado.diretor}<br>
              Data de lançamento: ${dado.lancamento}<br><br>
              ${dado.resumo}<br>
            </p>
            <a href="${dado.link}" target="_blank">Saber mais</a>
          </div>
        `;
      }
    }

    if(!resultados){
      resultados = "<p>NENHUM FILME ENCONTRADO...</p>"
    }

    // Atualizar o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
}