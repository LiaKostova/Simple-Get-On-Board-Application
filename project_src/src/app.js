import {html, render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { logout } from './api/auth.js';
import { clearUserData, getUserData } from './utils.js';
import { showAbout } from './views/about.js';
import { showHome } from './views/homepage.js';
import { showLogin } from './views/login.js';
import { showRanking } from './views/ranking.js';
import { showRegister } from './views/register.js';

let headerTemplate = (user) => html`
  <div class="logo-container">
            <img src="resources/logo.jpg" alt="Logo" class="logo">
        </div>

        <nav>
            <ul class="navigation" role="list">
                <li class="navigation-li"><a href="/">Начало</a></li>
                <!-- <li class="navigation-li"><a href="/catalog">Настолни игри</a></li> -->
                <li class="navigation-li"><a href="/ranking">Класации</a></li>
                <li class="navigation-li"><a href="/about">За нас</a></li>
                ${user == undefined
                ? html` <li class="navigation-li"><a href="/login">Вход</a></li>
                <li class="navigation-li"><a href="/register">Регистрация</a></li>`

                :html`   
                <li class="navigation-li"><a href="" @click=${onLogout}>Изход</a></li>`
                }
            

            </ul>
        </nav>
`

function decorateCtx(ctx, next){
    ctx.render = function(content){
        render(content, document.querySelector('main'));
    }
    next();
}

function sessionUserUpdate(ctx, next){
    let user = getUserData();
    if(user){
        ctx.user = user;
    };
    next();
}

function updateHeader(ctx, next){
    render(headerTemplate(ctx.user), document.querySelector('header'));
    next();
}

function onLogout(){
    logout();
    clearUserData();
}

page(decorateCtx);
page(sessionUserUpdate);
page(updateHeader);


page('/login', showLogin);
page('/register', showRegister)
page('/', showHome);
page('/ranking', showRanking);
page('/about', showAbout)

page.start();