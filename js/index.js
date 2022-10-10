const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const audioJump = document.querySelector('.audiojump');
const gameOver = document.querySelector('.gameover');
const gameStart = document.querySelector('.ini');

const jump = () => {
    mario.classList.add('jump');

    audioJump.currentTime = 0.1;
    audioJump.volume = 0.2;
    audioJump.play();

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        gameOver.currentTime = 0.1;
        gameOver.volume = 0.4;
        gameOver.play();

        gameStart.src = 'images/gameover.png';

        clearInterval(loop);

        document.addEventListener('keyup', () => {
            location.reload();
        })
    }

}, 10);

document.addEventListener('keydown', jump);