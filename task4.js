document.getElementById('fetchPosts').addEventListener('click', fetchPosts);

function fetchPosts() {
    const loadingIndicator = document.getElementById('loading');
    const postsList = document.getElementById('posts');

    loadingIndicator.style.display = 'block';
    postsList.innerHTML = "";

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Помилка завантаження даних!');
            }
            return response.json();
        })
        .then(posts => {
            loadingIndicator.style.display = 'none';
            posts.forEach(post => {
                const li = document.createElement('li');
                li.textContent = post.title;
                li.addEventListener('click', () => showDetails(post));
                postsList.appendChild(li);
            });
        })
        .catch(error => {
            loadingIndicator.style.display = 'none';
            alert(error.message);
        });
}

function showDetails(post) {
    alert(`Деталі поста:\n\nЗаголовок: ${post.title}\n\nТекст: ${post.body}`);
}
