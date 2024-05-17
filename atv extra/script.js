function adicionarItem(){
    let todolist1 = document.getElementById("todolist1");
    let listaItens = document.getElementById("listaItens");
    let itemlista = document.createElement("li");
    itemlista.textContent = todolist1.value;


    listaItens.appendChild(itemlista);


}