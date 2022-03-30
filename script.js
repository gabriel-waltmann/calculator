var numbers = [],
select = document.getElementById("select")

function add(){
    var number_text = document.getElementById('number_text'),
        number = Number(number_text.value)

    if (number == "" || number > 100 || number < 0 ){
        alert("Insira um número valido!")
    }

    else{
        var check = numbers.indexOf(number)

        if (check == -1){
            var option = document.createElement('option')
            option.value = number
            option.innerHTML = `valor ${number} adicionado`
            list.appendChild(option)    
            numbers.push(number)
        }

        else{
            alert('Número já encontrado')
        }
        
        document.getElementById('result').innerText = ""
    }
}

function calcular(){
    var result = document.getElementById('result')
    var sum = 0
    for (c = 0; c < numbers.length; c++ ){
        sum = sum + numbers[c]
    }

    var average = sum / numbers.length


    if (numbers.length == 0){
        alert("Insira números a lista para obter o resultado!")
    }
    else{
        result.style.display = "block"
        result.innerHTML = `
            <h3>Ao todo, temos ${numbers.length} números cadastrados.</h3>
            <h3>O maior número encontrado foi ${Math.max(...numbers)}</h3>
            <h3>O menor número encontrado foi ${Math.min(...numbers)}</h3>
            <h3>somando todos os valores temos ${sum}</h3>
            <h3>A média dos valores digitados é ${average.toFixed(1)}
        `
    }


}
