import {html} from '../../node_modules/lit-html/lit-html.js';

const aboutTemplate = () => html`
 <div class="contacts">
                <ul class="contacts-ul card-section" role="list">
                    <li class="contacts-li">Контакти</li>
                    <li class="contacts-li">Доставка</li>
                    <li class="contacts-li">Връщане и право на замяна</li>
                    <li class="contacts-li">Плащане</li>
                    <li class="contacts-li">Събития</li>
                    <li class="contacts-li">Най-често задаваните въпроси</li>   
                    <li class="contacts-li">Блог</li>
                    <li class="contacts-li">Социални мрежи</li>                       
                    <li class="contacts-li">Защита на личните данни</li>
                                
                
                </ul>
 </div>
`

export async function showAbout(ctx){
    ctx.render(aboutTemplate())
}