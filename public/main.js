const elemento = document.getElementById('html');
const boton = document.getElementById('darkandlight');

boton.addEventListener('click', () => {
    elemento.classList.toggle('dark');

    if (boton.classList.contains('type1')) {
        boton.classList.remove('type1');
        boton.classList.add('type2');
    } else {
        boton.classList.remove('type2');
        boton.classList.add('type1');
    }
});
