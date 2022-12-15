const button = document.getElementById('button-convert')
const select = document.getElementById('options-convert')


const convertValues = async () => {

    const inputReal = document.getElementById('value-input').value
    const number = document.getElementById('real-value')
    const number2 = document.getElementById('convert-value')
    
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high

    number.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReal);
    if (select.value === 'US$ Dolar Americano') {

        number2.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReal / dolar);
    }
    if (select.value === '€ Euro') {

        number2.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReal / euro);
    }
    if (select.value === '₿ Bitcoin') {

        number2.innerHTML = ((inputReal / bitcoin).toFixed(5))
    }
}
const exchangeCoins = () => {
    const coin = document.getElementById('coin')
    const coinImage = document.getElementById('image-coin')
    if (select.value === 'US$ Dolar Americano') {
        coin.innerHTML = 'Dólar Americano'
        coinImage.src = "./assets/estados-unidos (1) 1.svg"
    }
    if (select.value === '€ Euro') {
        coin.innerHTML = 'Euro'
        coinImage.src = "./assets/euro.svg"
    }
    if (select.value === '₿ Bitcoin') {
        coin.innerHTML = 'BitCoin'
        coinImage.src = "./assets/bitcoin.png"
    }
    convertValues()
}



button.addEventListener('click', convertValues)
select.addEventListener('change', exchangeCoins)

