<h1>Web Service</h1>
<blockquote>Status do Projeto: Em desenvolvimento :warning: </blockquote>
Realizado durante a disciplina de Sistemas distribuidos.<br>
O projeto acessa a PokeAPI, para encontrar o pokemon pesquisado, <br>
e você pode adicionar ele, em cima do pokemon tem o status atual.

<h1>Frontend </h1>


<h1>Backend </h1>
Criei duas rotas: <br>
<h2>GET http://localhost:3333/poke </h2>
    Request:{
	    "id": "3"
    }  
    Response: Status do pokemon(Já Obtido ou Não Obtido)
<br>
<h2> POST http://localhost:3333/poke <h2>
    Request: {                  
        "name": "venossauro",   
        "id": "3"
    }
    Response:  Cria o registro no BD, ou retorna um error


<h1>Execução</h1>
Caso todas as dependecias estejam devidamente instaladas, basta rodar o comando: <br>
Para executar o backend (dentro da pasta backend):
<blockquote>	yarn dev   </blockquote>

Para executar o frontend (dentro da pasta frontend):
<blockquote>    ng serve  </blockquote>

Caso queira já abrir no navegador:
<blockquote>    ng serve --open </blockquote>

<br>

<h1>Finalizações</h1>
O insomnia envia respostas diferentes com a mesma requisição do sistema, 
estou tentando consertar esse bug atualmente. além disso faltam os teste.
Estou com algumas outras tarefas atrasadas, então estou momentaneamente 
deixando essa de lado.