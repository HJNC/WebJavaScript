var nome;
var email;
var cpf;
var endereço;
var cidade;
var estado;
var cep;
var op1;
var op2;


function botao(){
    
    /*var nome = prompt("Digite Seu nome: ");
    var serviço = prompt("Qual serviço voce deseja: ");
    var telefone = prompt("Informe seu Telefone:");

    //escrever na pagina
    document.getElementById("O elemento").innerHTML = "Obrigado " + nome + " entraremos em contato";

    
*/
   // window.location.href("https://www.facebook.com/helio.junior.167");

    window.location.href = "cadastro.html";
    //window.open("cadastro.html");

}

/*
function redirecionar() {
    window.open("link");

    //abre na mesma janela
    window.location.href = "link";
}
*/


function trocar() {
    document.getElementById("mousemove").innerHTML = "Clique no botão cadastrar e obtenha os melhores serviços";
}
function voltar() {
    document.getElementById("mousemove").innerHTML = "Duvidas?";
}


function guarda() {
    nome = document.getElementById("formGroupExampleInput").value;
    email = document.getElementById("formGroupExampleInput2").value;
    cpf = document.getElementById("formGroupExampleInput3").value;
    endereço = document.getElementById("inputAddress").value;
    cidade = document.getElementById("inputCity").value;
    estado = document.getElementById("inputState").value;
    cep = document.getElementById("inputZip").value;
    
}


    


function ok() {
    /*
    alert(nome);
    alert(email);
    alert(cpf);
    alert(endereço);
    alert(cidade);
    alert(estado);
    alert(cep);
    */

    

    var radios = document.getElementsByName("exampleRadiosx");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            alert("Escolheu: " + radios[i].value);
            op1=radios[i].value;
        }
    }

    var radios = document.getElementsByName("exampleRadiosy");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            alert("Escolheu: " + radios[i].value);
            op2=radios[i].value;
        }
    }
    


    //var cliente = "pronto";
    var cliente = [{Nome: nome, email: email, CPF: cpf, endereço: endereço, cidade: cidade, UF: estado, CEP: cep, serviço: op1, porte: op2}]
    
    console.log(cliente[0]);
    alert("Pronto, os dados foram salvos! Obrigado!");
    window.location.href = "index.html";



}