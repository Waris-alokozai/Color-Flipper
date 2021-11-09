const btn = document.querySelector('#btn');
const color = document.querySelector('.color');
const colors = ['red','green', 'blue', 'yellow']



const myRandomNumber = () =>{
    return Math.floor(Math.random()*colors.length);
}



const changeColor = () => {
    const randomNumber = myRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
}

btn.addEventListener('click', changeColor);