const button = document.getElementById('button-convert')

const dolar = 5
const convertValues= () =>{

    const inputReal = document.getElementsByTagName('input').value

console.log(inputReal / dolar)

}


button.addEventListener('click',convertValues)


