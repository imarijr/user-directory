const form=document.querySelector('#userForm')

const handleSubmit = function(ev){
    ev.preventDefault()
    
    const f = ev.target

    const user ={
        Name:f.userName.value,
        Age: f.age.value,
        Color: renderColor(f.favoriteColor.value),
    }

          

    const users =document.querySelector('#users')
    users.appendChild(renderList(user))
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
        
       const Item = document.createElement('li')
       Item.textContent = `${name}: `             
       try {
        Item.appendChild(item)
      } catch(e) {
        Item.textContent += item
      }
        return Item
        }
    

const renderList = function(data)
{
    const list = document.createElement('ul')
     const labels = Object.keys(data)
    labels.forEach(label =>
    {
       const item = renderListItem(label,data[label])
       list.appendChild(item)
    })

    return list
}
   

      
    
    

 form.addEventListener('submit', handleSubmit )




