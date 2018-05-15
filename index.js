const button = document.querySelector('button.button1')


function changeText()
{
    const p = document.querySelector('h1.heading2')
    p.textContent ='WOAH'
}

button.addEventListener('click', changeText)

 