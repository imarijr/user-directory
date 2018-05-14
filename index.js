const button = document.querySelector('button.greeting')


function changeText()
{
    const p = document.querySelector('p.greeting')
    p.textContent ='you done clicked!'
}

button.addEventListener('click', changeText)