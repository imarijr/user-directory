const button = document.querySelector('button.button1')


function changeText()
{
    const p = document.querySelector('h2.heading2')
    p.textContent = document.getElementById("newTitle").value;
}

button.addEventListener('click', changeText)

