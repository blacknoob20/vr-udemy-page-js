import './styles.css';
import "../node_modules/bxslider/dist/jquery.bxslider.css";

const selTheme = document.querySelector('#select-theme');

require("./css/green.css");

selTheme.addEventListener('click',(evt)=>{
    switch (evt.target.getAttribute('id')) {
        case 'to-red':
            require("./css/red.css");    
            break;
        case 'to-green':
            require("./css/green.css");
            break;
        case 'to-blue':
            require("./css/blue.css");
            break;
    }
});


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

const lnkSubir = document.querySelector('.subir');

lnkSubir.addEventListener('click',()=>{
    $('html, body').animate({
        scrollTop: 0,
    }, 500);
});

const frm = document.querySelector('#login form');
let userName;

frm.addEventListener('submit',()=>{
    userName = document.querySelector('#name').value;
    localStorage.setItem('name',userName);
});

userName = localStorage.getItem('name');

if(userName){
    const loginHtml = document.querySelector('#about p');

    loginHtml.innerHTML = `Bienvenido, ${userName}`;
    loginHtml.innerHTML += '<br><a href="#" id="logout">Cerrar sesion</a>';
    document.querySelector('#login').style = 'display: none;';
    document.querySelector('#logout').addEventListener('click',()=>{
        localStorage.clear();
        window.location.reload();
    });
}
