import './styles.css';
import "../node_modules/bxslider/dist/jquery.bxslider.css";

// Initialize the slider
$('.bxslider').bxSlider();

const posts = [
    {
        title: 'Titulo del post 1',
        date: `Publicado el: ${new Date().toLocaleDateString()}`,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, repellendus. Deleniti magnam, ut delectus asperiores mollitia totam quaerat voluptates, blanditiis iusto vero quas! Officia at nihil provident enim quod voluptatem!',
    },
    {
        title: 'Titulo del post 2',
        date: `Publicado el: ${new Date().toLocaleDateString()}`,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, repellendus. Deleniti magnam, ut delectus asperiores mollitia totam quaerat voluptates, blanditiis iusto vero quas! Officia at nihil provident enim quod voluptatem!',
    },
    {
        title: 'Titulo del post 3',
        date: `Publicado el: ${new Date().toLocaleDateString()}`,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, repellendus. Deleniti magnam, ut delectus asperiores mollitia totam quaerat voluptates, blanditiis iusto vero quas! Officia at nihil provident enim quod voluptatem!',
    }
];

const div = document.createElement('div');

posts.forEach(post => {
    div.innerHTML += `
    <article class="post">
    <h2>${post.title}</h2>
    <span class="date">${post.date}</span>
    <p>${post.content}</p>
    <a href="#" class="button-more">Leer mas</a>
    </article>
    `;
});

document.querySelector('#posts').append(div);