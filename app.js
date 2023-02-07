function iniciarApp(){
    const valorAnterior = document.querySelector('.valor-anterior');
    const valorActual =  document.querySelector('.valor-actual');
    const botones = document.querySelectorAll('.boton');

    const btn  = Array.from(botones);

    btn.forEach( boton => {
        boton.addEventListener('click', guardarValor);
    })

    function guardarValor(e) {
    const valorBoton = e.target.value;


        imprimirValores(valorBoton);
    }

    function imprimirValores(valor) {
        valorAnterior.textContent += valor; 
    }

    

    


}

document.addEventListener('DOMContentLoaded', iniciarApp);