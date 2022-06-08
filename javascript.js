

function mostraValor(){
    var data = sessionStorage.getItem('nome');
        document.getElementById('p').innerHTML= document.getElementById('p').innerHTML +data;
        console.log(data);
        //alert('Olá '+data);
        
}   



/////////////////////Valor dos Filmes///////

function calcularFinal(){

    let valor = document.getElementById('qt0').value;
    let resultado = valor*7;
    sessionStorage.setItem('total',resultado);
    alert('Compra adicionada o carrinho.');
    alert(sessionStorage.getItem('total'));
}
function calcularFinal2(){

    let valor = document.getElementById('qt1').value;
    let resultado = valor*7;
    sessionStorage.setItem('total2',resultado);
    alert('Compra adicionada o carrinho.');
    alert(sessionStorage.getItem('total2'));
}
function calcularFinal3(){

    let valor = document.getElementById('qt2').value;
    let resultado = valor*7;
    sessionStorage.setItem('total3',resultado);
    alert('Compra adicionada o carrinho.');
    alert(sessionStorage.getItem('total3'));
}
function calcularFinal4(){

    let valor = document.getElementById('qt3').value;
    let resultado = valor*7;
    sessionStorage.setItem('total4',resultado);
    alert('Compra adicionada o carrinho.');
    alert(sessionStorage.getItem('total4'));
}
function calcularFinal5(){

    let valor = document.getElementById('qt4').value;
    let resultado = valor*7;
    sessionStorage.setItem('total5',resultado);
    alert('Compra adicionada o carrinho.');
    alert(sessionStorage.getItem('total5'));
}



// function calcularFinal(){
// let preço=7;
// let soma= [];
// let posiçao=0;
// let total=0; 

// while(posiçao<1){
//     soma[posiçao] = document.getElementById("qt"+posiçao).value*preço;
//     console.log(soma[posiçao]);
//     posiçao +=1;
    
// }
// for(let i = 0; i < soma.length; i++){
//     total += soma[i];
// }
// if(total == ""){
//     alert("Selecione uma quantidade do seu interesse ou volte para o inicio.")

// }
// else{
//     sessionStorage.setItem('total2',total);
//     // window.location = "index.html"
//     alert("Compra adicionada ao carrinho.").value;
// }
// // document.getElementById("total2").value = "R$ " + total + ",00";    

// //"R$ " + total + ",00"
// // sessionStorage.setItem('nome',logir);

// }




// do{
//     soma[posiçao] = document.getElementById("qt"+posiçao).value;
//     posiçao +=1 ;
  
//     console.log(soma[posiçao])       
// }while(posiçao<3)


// console.log(soma[posiçao]);

// let total=0;
//     for(let i = 1; i < total.length; i++) {
//         total += soma[i];
//     }
    
   // document.getElementsById("total").value;



// function calcular(){
//     let preço=7.00;
       
//     let valor = document.querySelectorAll("qt").value * preço;
    
//         for(let i = 1; i < valor.length; i++) {
//             let posicao = parseFloat(valor[i].value)
//             let soma = (valor * posicao);  
//         }   
    
//         console.log(soma);
//     }
    
     
    // let soma=0;
    //     for(let i = 1; i < array.length; i++) {
    //         soma += array[i];
    //     }
      
    //     document.getElementsById("totalGeral").value = soma;
    //     alert(array)
    
    
    // function calcularFinal() {      
    //     var contas = document.querySelectorAll("#produ"); 
    //     var total = 0 ;
    //     for(var i= 0; i<contas.length; i++){
    //         var conta = parseFloat(contas[i].value.replace(',','.'));
    //         var valor = (conta+valor);
    //    }
    //    console.log(valor); 
    //  }
    





























// let t=0;
// do{
//     return(t);
//     numero++;
// }
// while(numero<18);
