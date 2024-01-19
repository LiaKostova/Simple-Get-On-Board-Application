import {html} from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/auth.js';

const registerTemplate = (onRegister) => html`
<div class="register">
                 <section class="register-section card-section">
                    <h2 class="register-title">Създай своя профил</h2>
                    <form class="register-form" @submit=${onRegister}>
                        <input type="text" name="email" id="register-email" placeholder="email">
                        <input type="password" name="password" id="register-password" placeholder="парола">
                        <input type="password" name="re-password" id="re-password" placeholder="повтори паролата">
                         <button type="submit" class="login-button profile-button">Регистрация</button>
                     </form>
                     <p class="form-message"><a href="/login">Влез в своя профил</a></p>
                  </section>
            </div>
`;

export async function showRegister(ctx){

    ctx.render(registerTemplate(onRegister));

    async function onRegister(e){
        e.preventDefault();

        let formData = new FormData(e.target);
        let email = formData.get('email');
        let password = formData.get('password');
        let repassword = formData.get('re-password');


        if(!email|| email.length ==0 || !password || password.length ==0 || !repassword || repassword.length ==0){
            alert("Please, fill out all required fields")
        }

        if(password != repassword){
            alert("Both passwords must match!")
        }

        try{
            await register(email, password);
            ctx.page.redirect('/');

        }catch(err){
            alert(err.message);
            throw err;
        }
    }
}