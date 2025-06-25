
let select = document.getElementById('option')

select.addEventListener('change', (event) => {
    const valor = event.target.value;

    console.log(valor);

    if(valor) {
        switch(valor){
            case 'Github':
                window.location.href = "./src/pages/teste.html"
                break;
            case 'Ideia':
                console.log('Indo para ideia')
                break;
            case 'Telas':
                console.log('Indo para as telas')
                break;
            default:
                console.log('Nada')
        }
    }
})