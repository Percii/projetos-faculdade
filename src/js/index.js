const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video")
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto"); //"toggle" método alterna entre adicionar e remover um ou mais nomes de classes a partir dos elementos selecionados. Este método verifica cada elemento para os nomes de classe especificados. Os nomes de classe são adicionados se ausente, e removido se já definido"
}

botaoTrailer.addEventListener("click", () => {
    /*modal.classList.add("aberto");  //Com "add" foi possivel criar uma classe no "modal" utilizando JS e foi possivel estilizar no CSS, sendo assim o JS pode alterar a estrutura do HTML*/
    alternarModal()
    video.setAttribute("src", linkDoVideo);

}); //"addEventListener" efetua uma ação de acordo com os paramêtros   

botaoFecharModal.addEventListener("click", () => {
    /*modal.classList.remove("aberto"); // "remove" é um método para remover uma classe"*/
    alternarModal()
    video.setAttribute("src", "")
});
