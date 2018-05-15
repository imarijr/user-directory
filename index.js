const form=document.querySelector('#userForm')

const handleSubmit = function(ev){
    ev.preventDefault()
    
    const f = ev.target
    const userName = f.userName.value
    const age = f.age.value
    
    const color = f.favoriteColor.value
    
    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${userName}`

    const ageItem =  document.createElement('li')
    ageItem.textContent = `Age: ${age}`

    const colorItem =  document.createElement('li')
    colorItem.appendChild(renderColor(color))
    

    const list = document.createElement('ul')
    list.appendChild(nameItem)
    list.appendChild(ageItem)
    list.appendChild(colorItem)


   const users =document.querySelector('#users')
    users.appendChild(list)
    f.reset()
    f.userName.focus()
}

const renderColor = function(color)
{
   
    const colorDiv = document.createElement('div')
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    colorDiv.style.backgroundColor = color

    return colorDiv
}


 form.addEventListener('submit', handleSubmit )




