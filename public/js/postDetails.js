
const sumbitForm = async (event) => {
    event.preventDefault();

    const description = document.querySelector('#comments').value.trim();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (description) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                description,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};


document
    .querySelector('#submitcomment')
    .addEventListener('submit', sumbitForm);

