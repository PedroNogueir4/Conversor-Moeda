const button = document.getElementById('button-convert')
const select = document.getElementById('options-convert')
const dolar = 5.17
const euro = 6

const convertValues = () => {

    const inputReal = document.getElementById('value-input').value
    const number = document.getElementById('real-value')
    const number2 = document.getElementById('convert-value')
    const dolarValue = inputReal / dolar
    const euroValue = inputReal / euro

    number.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReal);
    if (select.value === 'US$ Dolar Americano') {

        number2.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(dolarValue);
    }
    if (select.value === ' € Euro') {

        number2.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(euroValue);
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
    
}



button.addEventListener('click', convertValues)
select.addEventListener('change', exchangeCoins)

