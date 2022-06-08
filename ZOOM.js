const card1 = document.getElementById("card1");
const img = document.querySelector("img");

card1.addEventListener("mousemove", (e) => {
    const x = e.clientX - e.target.offsetLeft;
    //propriedade retornar a posição esquerda (em pixels)
    const y = e.clientY - e.target.offsetTop;
    //propriedade retornar a posição superior (em pixels)

    console.log(x, y)//se der erro

    img.style.transformOrigin = `${x}px ${y}px`;
    //permite alterar a posição dos elementos transformador
    img.style.transform = "scale(2)";
    //Esta propriedade permite girar, dimensionar, mover, inclinar, etc., elementos.
})
card1.addEventListener("mouseleave", () => {
    img.style.transformOrigin ="center center";
    img.style.transform = "scale(1)"
})  