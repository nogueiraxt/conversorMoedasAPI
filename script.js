const coinApiUrl = 'https://rest.coinapi.io/v1/assets';  // URL para obter a lista de criptomoedas
const apiKey = 'SUA_CHAVE_DE_API';  // Sua chave de API

const criptoSelect = document.getElementById('criptomoedaSelect');
const criptoCard = document.getElementById('criptomoedaCard');
const nomeCripto = document.getElementById('nomeCriptomoeda');
const siglaCripto = document.getElementById('siglaCriptomoeda');
const valorCripto = document.getElementById('valorCriptomoeda');
const quantidadeInput = document.getElementById('quantidadeInput');
const converterButton = document.getElementById('converterButton');
const resultadoConversao = document.getElementById('resultadoConversao');

let criptoData = [];

function formatarValor(valor) {
    return valor.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
}

function atualizarCard() {
    const selectedId = criptoSelect.value;
    const selectedCripto = criptoData.find(cripto => cripto.asset_id === selectedId);

    if (selectedCripto) {
        nomeCripto.textContent = `Nome: ${selectedCripto.name}`;
        siglaCripto.textContent = `Sigla: ${selectedCripto.asset_id}`;
        valorCripto.textContent = `Valor Atual: ${formatarValor(selectedCripto.price_usd)}`;
        criptoCard.classList.remove('left', 'right');
        criptoCard.classList.add('rotate');
        criptoCard.style.display = 'block';

        const dataAtual = new Date().toLocaleDateString('pt-BR');
        dataAtual.textContent = `Data Atual: ${dataAtual}`;
    } else {
        criptoCard.classList.remove('rotate');
        criptoCard.classList.add('left');
        setTimeout(() => criptoCard.style.display = 'none', 500);
    }
}

converterButton.addEventListener('click', function () {
    const selectedId = criptoSelect.value;
    const selectedCripto = criptoData.find(cripto => cripto.asset_id === selectedId);

    if (selectedCripto) {
        const quantidadeUSD = parseFloat(quantidadeInput.value);

        if (!isNaN(quantidadeUSD)) {
            const valorEmCripto = quantidadeUSD / selectedCripto.price_usd;

            const resultadoParagraph = document.createElement('p');
            resultadoParagraph.innerHTML = `
                Valor convertido para ${selectedCripto.name}: ${valorEmCripto.toFixed(8)} ${selectedCripto.asset_id}
            `;

            resultadoConversao.innerHTML = '';
            resultadoConversao.appendChild(resultadoParagraph);
        } else {
            alert('Por favor, insira um valor válido em dólares.');
        }
    }
});

fetch(coinApiUrl, {
    headers: {
        'X-CoinAPI-Key': apiKey
    }
})
    .then(response => response.json())
    .then(data => {
        criptoData = data;
        data.forEach(cripto => {
            criptoSelect.add(new Option(cripto.name, cripto.asset_id));
        });
    })
    .catch(error => console.error('Erro ao obter dados da API CoinAPI:', error));
