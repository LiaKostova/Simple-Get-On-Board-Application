import {html, render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { getUserData } from './utils.js';

let headerTemplate = () => html`
  <div class="logo-container">
            <img src="resources/logo.jpg" alt="Logo" class="logo">
        </div>

        <nav>
            <ul class="navigation" role="list">
                <li class="navigation-li"><a href="/">Начало</a></li>
                <li class="navigation-li"><a href="/catalog">Настолни игри</a></li>
                <li class="navigation-li"><a href="/ranking">Класации</a></li>
                <li class="navigation-li"><a href="/about">За нас</a></li>
                <li class="navigation-li"><a href="/login">Вход</a></li>
                <li class="navigation-li"><a href="/register">Регистрация</a></li>
                <li class="navigation-li"><a href="/logout">Изход</a></li>

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

page(decorateCtx);
page(sessionUserUpdate);
page(updateHeader);

page.start();