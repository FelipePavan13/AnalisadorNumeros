let addedNumbers = [];

function getNumber () {
    let input = document.getElementById('number').value;
    let number = parseInt(input);
    let selectList = document.getElementById('addedNum');
    
    if (number < 1 || number > 100 || input.length == 0) {
        alert('Número inválido! Por favor, digite um número entre 1 e 100.');
    } else {
        if (addedNumbers.indexOf(number) >= 0) {
            alert('Número já adicionado! Por favor, digite outro valor.');
        } else {
            addedNumbers.push(number);
            let item = document.createElement('option');
            item.text = `Valor ${number} adicionado.`;
            selectList.appendChild(item);
        }
    }
}

function addDescription() {
    let description = document.querySelector('.description');
    
    addedNumbers.sort((a,b) => a - b);
    let sum = addedNumbers.reduce((previous, current) => previous + current, 0);

    description.innerHTML = 
    `<p>Ao todo, temos ${addedNumbers.length} número(s) adicionados.</p>
    <p>O maior valor informado foi ${addedNumbers[addedNumbers.length - 1]}.</p>
    <p>O menor valor informado foi ${addedNumbers[0]}.</p>
    <p>Somando todos os valores, temos ${sum}.</p>
    <p>A média dos valores digitados é ${sum / addedNumbers.length}.`
}