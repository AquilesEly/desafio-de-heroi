let nomeHeroi = "Giovanni"
let qntExp = 15000

if (qntExp <= 1000)
    console.log("Ferro")
else if (qntExp > 1000 && qntExp <= 2000)
    console.log("Bronze")
else if (qntExp > 2000 && qntExp <= 5000)
    console.log("Prata")
else if (qntExp > 5000 && qntExp <= 7000)
    console.log("Ouro")
else if (qntExp > 7000 && qntExp <= 8000)
    console.log("Platina")
else if (qntExp > 8000 && qntExp <= 9000)
    console.log("Ascendente")
else if (qntExp > 9000 && qntExp <= 10.000)
    console.log("Imortal")
else if (qntExp > 10000)
    console.log("Radiante")

    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + qntExp)