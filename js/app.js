const displayValorAnterior = document.querySelector('.valor-anterior');
const displayValorActual = document.querySelector('.valor-actual');
const botones = document.querySelectorAll('.boton');

const btn = Array.from(botones);


btn.forEach( boton => {
    boton.addEventListener('click', () => agregarNumero(boton.value));
});

function agregarNumero(boton) {
    const valorAnterior = displayValorAnterior.innerHTML;

    if(boton=== '.' && valorAnterior.includes('.')){
        return;
    }

    if( boton === 'CE'){
        borrarTodo();
        return;
    }

    if( boton === 'C'){
        borrar();
        return;
    }

    imprimirDisplay(boton);

    
}

function imprimirDisplay(numero) {
    displayValorAnterior.innerHTML += numero;
}

function borrarTodo() {
    displayValorActual.textContent = '';
    displayValorAnterior.textContent = '';
}

function borrar() {
    displayValorAnterior.textContent = displayValorAnterior.textContent.slice(0, -1);
}

