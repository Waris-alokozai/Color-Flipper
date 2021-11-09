const colors = ['#00ffff','#ff0000','#00ff00','#bf00ff','#0080ff','#40ff00','#ff00ff'];

const btn = document.querySelector("#btn");
const color = document.querySelector('.color');

const myRandomNumber = (random) => {
    return random;
}


btn.addEventListener('click', () => {
    const RandomNumber = myRandomNumber(Math.floor(Math.random()*colors.length));
    document.body.style.backgroundColor = colors[RandomNumber];
    color.textContent = colors[RandomNumber];
})