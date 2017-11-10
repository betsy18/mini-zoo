// se ejecuta cuando el obj, este totalmente cargado la pag. web
window.onload = function() {
    var board = document.querySelector('.board-js');

    board.addEventListener('click', addX)
};
    var centinel = true;

    function addX(event){
        if(event.target.matches('td') && event.target.textContent === '') {
            if(centinel)
                event.target.textContent = 'X';
            else
                event.target.textContent = 'O';
            centinel = !centinel;
        }
        
    }





 /*// primero es un elemento, callback: funcion de llamada
    board.addEventListener('click', function(event){
        // el target, trae al elemento al que se le da click: td
        // cuando se usa style, se usa camelCase
        event.target.style.backgroundColor = 'red';
    });

    /*board.addEventListener('dblclick', function(event){
        event.target.style.backgroundColor = 'blue';
    });

    board.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = 'yellow';
    });

    // creando funcion de background
    function addBgc(event){
        event.target.style.backgroundColor='red';
    }

    // para quitar funciones pero no anonimas
    
     *  board.removeEventListener('click' , addBgc); 
     */