const button = document.getElementById('button-convert')
const resultOperationInput = document.querySelector('#converted_value')
const dropDownConverterTo = document.querySelector('#convertTo')
const imageConverterTo = document.querySelector('#imageTo')

const dolar = 5;
const euro = 6;

let currencyBaseValue = dolar;

const convertValues= () =>{
    const inputReal = document.getElementById('value-input').value

    let finalResult = (inputReal / currencyBaseValue);
    resultOperationInput.innerHTML = `R$ ${finalResult.toFixed(2)}`;
}

function changeImage(e) {
   let currencySelected = e.target.value;
   let formatedText = currencySelected.split(' ');
   const [ curSymbol, curName ] = formatedText;

   if(curName === 'Dolar' && curSymbol === 'US$') {
        imageConverterTo.setAttribute('src', './assets/estados-unidos (1) 1.svg')
        currencyBaseValue = dolar;
   }

   if(curName === 'Euro' && curSymbol === '€') {
        imageConverterTo.setAttribute('src', './assets/euro.svg')
        currencyBaseValue = euro;
    }
}

button.addEventListener('click',convertValues)
dropDownConverterTo.addEventListener('change', changeImage)

