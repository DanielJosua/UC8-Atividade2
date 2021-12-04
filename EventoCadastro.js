//data de cadastro
let inserirData = new Date();
let date = new Date('2021-12-24');

if(inserirData < date) {
    console.log("Continuar cadastro")
}else{
    console.log("Evento indisponivel")
}

//idade da pessoa
let idadeDaPessoa = 30
if(idadeDaPessoa >= 18) {
    console.log("É possivel progredir com o cadastro")
} else {
    console.log("Idade insuficiente para realizar o cadastro")
}

//vagas 
let listaDeCadastrados = ["Carlos", "Maria", "João", "Carla", "Jennifer", "Pedro", "Juan", "Marcela"]
if(listaDeCadastrados.length <= 99) {
    console.log("É possível finalizar cadastro")
} else {
    console.log("Não há vagas disponiveis")
}