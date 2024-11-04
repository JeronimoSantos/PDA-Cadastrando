// CREATE
const dadosUsuario = {
    nome: document.getElementById("campo-name"),
    idade: document.getElementById("campo-idade"),
    vida: document.getElementById("campo-vida"),
    meta: document.getElementById("campo-meta")
}

const meuForm = document.getElementById("formulario");
const button = document.getElementById("butao-comecar");

meuForm.addEventListener('submit', function formCadastro (evento) {
    evento.preventDefault();

    const listaCampos = document.getElementById("listaCampos");
    listaCampos.insertAdjacentHTML('afterbegin', `<li> 
        ${dadosUsuario.nome.value} 
        ${dadosUsuario.idade.value} 
        ${dadosUsuario.vida.value} 
        ${dadosUsuario.meta.value} 
        </li>`);
    
    dadosUsuario.nome.value = "";
    dadosUsuario.idade.value = "";
    dadosUsuario.vida.value = "";
    dadosUsuario.meta.value = "";
})
// READ
// UPDATE
// DELETE