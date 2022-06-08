const cep = document.querySelector("#cep")
// aqui o evento perde o foco e busco os valores do cep e prepara o envio

cep.addEventListener("blur",(e)=>
{
    //arrow function
        let search = cep.value.replace("-", "")
        let options ={
            method: 'GET', //solicitação
            mode: 'cors', // acesso externo
            Cache: 'default'
        }
    

    //aqui envia o cep digitado para o via cep e retorna
    fetch(`https://viacep.com.br/ws/${search}/json`, options)
    //quando se acessa um URL com fatch API retorna se uma promessa
    // se der certo .the()
    //se der erradi .catch()
    .then(Response => {Response.json()
        .then(data => mostrarDados(data))
    })
    .catch(e => console.log('Erro Inesperado ' + e, message))

})
//alimentar todos os campos do formulário
const mostrarDados = (result) => {//aqui busco o retorno
    for(const campo in result){//aqui armazeno todo o retorno na variavel
        if (document.querySelector("#" + campo)){//verifico se o campo existe
            document.querySelector("#" + campo).value = result[campo]
        }
    }

}