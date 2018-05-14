const button = document.querySelector('button.greeting')


function changeText()
{
    const p = document.querySelector('h2.heading2')
    p.textContent ='WOAH!'
 }

button.addEventListener('click', changeText)