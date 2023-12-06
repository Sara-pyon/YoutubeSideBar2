// sidebarMenu
import { youtubeMenu__Home,youtubeMenu__General,youtubeMenu__Library,youtubeMenu } from "./youtubeMenu.js";

const sidebarMenu = document.querySelector('.sidebarMenu');
let homeHTML = '',
    generalHTML = '',
    libraryHTML = '';

youtubeMenu__Home.forEach(item => {
    homeHTML += `
        <li class="sidebar__item">
            ${item.icon}
            <h3 class="sidebar__item-title">${item.title}</h3>
        </li>
    `
});

youtubeMenu__Library.forEach(item => {
    libraryHTML += `
        <li class="sidebar__item">
            ${item.icon}
            <h3 class="sidebar__item-title">${item.title}</h3>
        </li>
    `
});

youtubeMenu__General.forEach(item => {
    generalHTML += `
        <li class="sidebar__item">
            ${item.icon}
            <h3 class="sidebar__item-title">${item.title}</h3>
        </li>
    `
});

const youtubesidebarHTML = [homeHTML,libraryHTML,generalHTML];

youtubeMenu.forEach((item,index) => {
   item.HTML = youtubesidebarHTML[index];
})

console.log(youtubeMenu);

let HTML = '';

youtubeMenu.forEach(item => {
    
    HTML += `
    
    <div class="sidebar__menu">
                <h2 class="sidebar__title">${item.title}</h2>
                <ul class="sidebar__list">
                    ${item.HTML}
                </ul>
            </div>
    `
})

document.querySelector('.sidebar__menu-all').innerHTML = HTML;


//sidebar show
const sidebar = document.getElementById('sidebar'),
    sidebarToggle = document.getElementById('sidebar-toggle');

if(sidebar && sidebarToggle){
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-show');
    })
}

// LinkActive
const sidebarLink = document.querySelectorAll('.sidebar__item');

function activeLink(){
    sidebarLink.forEach(item => item.classList.remove('active'))
    this.classList.add('active')
}

sidebarLink.forEach(item => item.addEventListener('click', activeLink))

