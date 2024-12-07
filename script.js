function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value); 
    const altura = parseFloat(document.getElementById("altura").value); 
    
    
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos.";
        return;
    }

    
    const imc = (peso / (altura * altura)).toFixed(2);

    
    let classificacao = "";
    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 25) classificacao = "Peso normal";
    else if (imc < 30) classificacao = "Sobrepeso";
    else classificacao = "Obesidade";

    
    document.getElementById("resultado").innerHTML = `Seu IMC é <strong>${imc}</strong> (${classificacao})`;
}
