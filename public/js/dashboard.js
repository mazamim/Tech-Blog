const add_new_handler=async(event)=>{
window.location.replace("/dashboard/newPost")
}




document
.querySelector('.add-new')
.addEventListener('click', add_new_handler);


