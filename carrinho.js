function carrinho(){
    let resu = parseFloat(sessionStorage.getItem('total')) + parseFloat(sessionStorage.getItem('total2')) + parseFloat(sessionStorage.getItem('total3')) + parseFloat(sessionStorage.getItem('total4')) + parseFloat(sessionStorage.getItem('total5'));
    
    // document.getElementById('totalGeral').value =  resu;
    document.getElementById('totalGeral').innerHTML = "R$ " + resu + ",00";
    document.getElementById('vista').value = "R$ " +  resu + ",00";

    let parcela = document.querySelector('#parcela');
    parcela.addEventListener("click", (e) => {
        switch(parcela.value){
            case "1":
            document.getElementById("cartao").value = "parcelas";
            break;

            case "2":
            document.getElementById("cartao").value = "R$ " +(resu/2).toFixed(2);
            break;

            case "3":
            document.getElementById("cartao").value = "R$ " +(resu/3).toFixed(2);
            break;

            case "4":
            document.getElementById("cartao").value = "R$ " +(resu/4).toFixed(2);
            break;
        }
  }
  )
}      