

const resumbitPostHandle = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#description').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (title && description) {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const deleteHandle = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete post');
      }
    }
  };

  const add_new_handler=()=>{
    window.location.replace('/dashboard/newPost')
  }
  

  document
.querySelector('#deletepost')
.addEventListener('click', deleteHandle);

document
.querySelector('#sumbitform')
.addEventListener('submit', resumbitPostHandle);

document
.querySelector('#add-new')
.addEventListener('click', add_new_handler);

  
