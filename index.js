const form=document.querySelector('#userForm')

const handleSubmit = function(ev){
    ev.preventDefault()
    
    const f = ev.target
    const userName = f.userName.value
    const age = f.age.value    
    const color = f.favoriteColor.value     

    const users =document.querySelector('#users')
    users.appendChild(renderList(userName,age,color))
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

const renderListItem = function(name,item)
    {
        if(name == 'Color')
        {
            const colorItem = document.createElement('li')
            colorItem.textContent = 'Favorite Color: '   
            colorItem.appendChild(renderColor(item))        
            return colorItem
            
        
        }
        else
        {
       const Item = document.createElement('li')
       Item.textContent = `${name}: ${item}`             
        
        return Item
        }
    }

const renderList = function(userName, age, color)
{
    const list = document.createElement('ul')
    list.appendChild(renderListItem('Name',userName))
    list.appendChild(renderListItem('Age',age))
    list.appendChild(renderListItem('Color',color))

    return list
}
   

      
    
    

 form.addEventListener('submit', handleSubmit )




