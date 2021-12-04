//data de cadastro
let date1=new Date();
let date2=new Date('2021-12-24');

if(date1 > date2) {
    console.log("Evento indisponivel")
}else{
    console.log("Continuar cadastro")
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