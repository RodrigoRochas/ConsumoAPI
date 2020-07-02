 <h1 align=center><b><i>Utilizando API ViaCep</i></b></h1>
 <h2 align=center>
    <img src="imagens/grafico.jpg" alt="CEP" width="100%" height="300px">
 </h2>

 ---

 ✔ **INTRODUÇÃO**
 <p>O exercício a seguir buscar endereços a partir do CEP, informado pelo usuário. A API utilizada foi a ViaCep, uma API relativamente simples pois não necessita de chave de acesso (**apikey**).

 ✔ **TECNOLOGIAS USADAS**
 <p>O formato escolhido para manipulção dos dados retornados da API foi o JSON. Neste exercício aprendi sobre:

 * Fetch()
 * Promises
 * Formato JSON
 * Funções Assíncronas e Síncronas
 * Async e Await

E uma função na qual achei muito útil e  interessante, para fazer um tratamento de erro. Nesse caso, tudo o que não for número, irá ser apagado de imediato.

```
    const maskCep = ( $el ) => {
    let aux =  $el.value;
    aux = aux.replace ( /[^0-9]/g, '' );
    aux = aux.replace ( /(.{5})(.)/,'$1-$2' )
    $el.value = aux;
}
```

