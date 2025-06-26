
let select = document.getElementById('option')

select.addEventListener('change', (event) => {
    const valor = event.target.value;

    console.log(valor);

    if(valor) {
        switch(valor){
            case 'Github':
                let url = "https://github.com/House-On"
                window.open(url, "_blank")
                break;
            case 'Ideia':
                window.location.href = "#Ideia"
                break;
            case 'Telas':
                window.location.href = "#Telas"
                break;
            default:
                console.log('Nada')
        }
    }
})

function secreto(){
    window.location.href = "./src/pages/teste.html"
}