const form=document.querySelector('#userForm')

const handleSubmit = function(ev){
    ev.preventDefault()
    const users =document.querySelector('#users')
    const f = ev.target
    const userName = f.userName.value
    users.textContent += ' ' + userName;

}


 form.addEventListener('submit', handleSubmit )




