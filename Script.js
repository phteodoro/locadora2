function logim(){
    let logir = document.getElementById("usuario").value;
    if(logir == ""){
        alert('Informe seu nome');
    }
    else{
        sessionStorage.setItem('nome',logir);
        window.location.replace ("pagina2.html")
        alert(logir +' você esta logado.');
        
    }
}

function storage(){
    sessionStorage.setItem('total2',0);
    sessionStorage.setItem('total3',0);
    sessionStorage.setItem('total4',0);
    sessionStorage.setItem('total5',0);
    sessionStorage.setItem('total6',0);
}