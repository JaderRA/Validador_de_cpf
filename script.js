console.log("Javascript Carregado");

function validaCPF(cpf){

}

function validacao(){
    console.log("Iniciando validação de cpf");
    var cpf = document.getElementById('cpf_digitado').value;
    console.log(cpf);

    var resultadoValidacao = validaCPF(cpf);
    if(resultadoValidacao == true){
        document.getElementById('sucess').style.display = block;
    }else{
        document.getElementById('error').style.display = block;
    }
}