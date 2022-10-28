const button = document.getElementById('button-convert')

const dolar = 5
const convertValues= () =>{

    const inputReal = document.getElementsById('value-input').value

console.log(parseInt(inputReal) / dolar)

}


button.addEventListener('click',convertValues)


