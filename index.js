const form=document.querySelector('#userForm')



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
      
       const term = document.createElement('dt')
       term.textContent = name

       const description = document.createElement('dd')

                   
       try {
        description.appendChild(item)
      } catch(e) {
        description.textContent += item
      }
        Item.appendChild(term)
        Item.appendChild(description)
        return Item
        }
    

const renderList = function(data)
{
    const list = document.createElement('dl')
     const labels = Object.keys(data)
    labels.forEach(label =>
    {
       const item = renderListItem(label,data[label])
       list.appendChild(item)
    })

    return list
}
   
const handleSubmit = function(ev){
    ev.preventDefault()
    
    const f = ev.target

    const user ={
        Name:f.userName.value,
        Age: f.age.value,
        Color: renderColor(f.favoriteColor.value),
    }

          

    const users=document.querySelector('#users')
    users.appendChild(renderList(user))
    f.reset()
    f.userName.focus()
}
      
    
    

 form.addEventListener('submit', handleSubmit )




