document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    var numeroVitorias = parseInt(document.getElementById("numeroVitorias").value);
    var numeroDerrotas = parseInt(document.getElementById("numeroDerrotas").value);

    if (isNaN(numeroVitorias) || isNaN(numeroVitorias)) {
        document.getElementById("resultado").textContent = "Por favor, preencha ambos os campos corretamente.";
        return;
    }

    var saldoVitorias = calcularSaldo(numeroVitorias, numeroDerrotas);
    var nivel = rankearNivel(saldoVitorias);

    document.getElementById("resultado").textContent = `O Herói tem ${saldoVitorias} de saldo está no nível ${nivel}`;

    function calcularSaldo(numeroVitorias, numeroDerrotas){
        let saldoRankeadas;
        return saldoRankeadas = numeroVitorias - numeroDerrotas;
    }

    function rankearNivel(saldoVitorias){
        let nivelRanking;

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
        
        return nivelRanking;
    }

    setTimeout(function() {
        document.getElementById("form").reset();
    }, 500);

});