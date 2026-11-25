const btn = document.getElementById("btn");

btn.addEventListener('click', function(){

    const nota1 = document.querySelector("#nota1").value;
    const nota2 = document.querySelector("#nota2").value;
    const nota3 = document.querySelector("#nota3").value;

    if(nota1.trim() == "" || nota2.trim() == "" || nota3.trim() == ""){
        return alert("Campos vazios, preencha-os com dados corretos.");
    }

    const media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;

    console.log(nota1,nota2,nota3);

    document.querySelector("#media").textContent = media.toFixed(2).replace('.',',');

    if (media >= 7) {
        return document.querySelector("#situacao").textContent = "Aprovado";
    } else if (media >= 5) {
        return document.querySelector("#situacao").textContent = "Recuperação";
    } else {
        return document.querySelector("#situacao").textContent = "Reprovado";
    }

})

