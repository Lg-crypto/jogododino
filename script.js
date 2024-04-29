const dino = document.getElementById('dino');
const enemy = document.getElementById('inimigo');
const body = document.querySelector('body');

//quando o site for clicado:
document.addEventListener('click', function(){
    //dinossauro pula
    dino.classList.add('pular');
    setTimeout(function (){
        dino.classList.remove('pular');
    },500)
})

//quando uma tecla for teclada
document.addEventListener('keydown', function(key){
    //se a tecla for espaço
    if (key.code === 'Space') {
        //dinossauro pula
        dino.classList.add('pular');
        setTimeout(function (){
            dino.classList.remove('pular');
        },500)
    }
    
})

var gameover = setInterval(function () {
    
    var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    var leftEnemy = parseInt(window.getComputedStyle(enemy).getPropertyValue('left'));

    if(leftEnemy < 99 && leftEnemy > 49 && dinoTop >= 50){
        dino.style.display = 'none';
        enemy.style.display = 'none';
        alert('voce morreu!')
    }



},10)