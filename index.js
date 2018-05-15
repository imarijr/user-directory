const form=document.querySelector('#userForm')

const handleSubmit = function(ev){
    ev.preventDefault()
    const users =document.querySelector('#users')
    const f = ev.target
    const userName = f.userName.value
    const age = f.age.value
    const color = f.favoriteColor.value
    
    const list = document.createElement('ul')
    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${userName}`

    const ageItem =  document.createElement('li')
    ageItem.textContent = `Age: ${age}`

    

    users.appendChild(list)
    list.appendChild(nameItem)
    list.appendChild(ageItem)

   
    f.reset()
    f.userName.focus()
}


 form.addEventListener('submit', handleSubmit )




