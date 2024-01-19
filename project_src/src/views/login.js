import {html} from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/auth.js';

const loginTemplate = (onLogin) => html`
<div class="login">
     <section class="login-section card-section">
            <h2 class="login-title">Влез в своя профил</h2>
             <form class="login-form" @submit=${onLogin}>
                <input type="text" name="email" id="email" placeholder="email">
                <input type="password" name="password" id="password" placeholder="парола">
                <button type="submit" class="login-button profile-button">Вход</button>
            </form>
            <p class="form-message"><a href="/register">Създай своя профил</a></p>
    </section>
</div>
`;

export async function showLogin(ctx){

    ctx.render(loginTemplate(onLogin));

    async function onLogin(e){
        e.preventDefault();

        let formData = new FormData(e.target);
        let email = formData.get('email');
        let password = formData.get('password');


        if(!email|| email.length ==0 || !password || password.length ==0){
            alert("Please, fill out all required fields")
        }

        try{
            await login(email, password);
            ctx.page.redirect('/');

        }catch(err){
            alert(err.message);
            throw err;
        }
    }
}