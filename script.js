var numeroVitorias = 130
var numeroDerrotas = 13

var saldoVitorias = calcularSaldo(numeroVitorias, numeroDerrotas)
var nivel = rankearNivel(saldoVitorias)

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)

function calcularSaldo(numeroVitorias, numeroDerrotas){
    let saldoRankeadas
    return saldoRankeadas = numeroVitorias - numeroDerrotas
}

function rankearNivel(saldoVitorias){
    let nivelRanking
    if (saldoVitorias <= 10){
        nivelRanking = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20){
        nivelRanking = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50){
        nivelRanking = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80){
        nivelRanking = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90){
        nivelRanking = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100){
        nivelRanking = "Lendário";
    } else if (saldoVitorias >= 101){
        nivelRanking = "Imortal";
    }
    return nivelRanking
}