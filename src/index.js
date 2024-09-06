import './style.css';
import initHome from './home.js';
import initMenu from './menu.js';
import initAbout from './about.js';
import logo from './assets/img/restaurant-rounded.svg';

const Page = {
    init: function () {
        this.render();
        initHome(this.content);
        this.bindEventListeners();
    },

    bindEventListeners: function () {
        this.navButtons.forEach((btn) => btn.addEventListener('click', (e) => this.handleClick(e)));
    },

    handleClick: function (e) {
        content.textContent = '';
        this.navButtons.forEach((btn) => btn.classList.remove('active'));
        e.target.classList.add('active');

        if (e.target.id === 'home-btn') {
            initHome(this.content);
        } else if (e.target.id === 'menu-btn') {
            initMenu(this.content);
        } else if (e.target.id === 'about-btn') {
            initAbout(this.content);
        }
    },

    render: function () {
        this.content = document.querySelector('#content');
        this.navButtons = document.querySelectorAll('.header-menu button');
        this.logo = document.querySelector('.logo img');
        this.logo.src = logo;
    },
};
document.addEventListener('DOMContentLoaded', () => Page.init());
