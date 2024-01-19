import {html} from '../../node_modules/lit-html/lit-html.js';

const homeTemplate = () => html`
 <div class="homePage">
            <div class="thumbnail-section">
                <img src="resources/homePage.jpg" alt="Get on Board" class="thumbnail">
            </div>

            <h2 class="homepage-h2 h2" >Защо да изберем настолните игри?</h2>

            <ul class="homepage-grid" role="list">
                <li class="homepage-grid-li">
                    <div class="homepage-grid-title-section">
                        <div class="homepage-li-iconContainer">
                            <i class="fas fa-check" style="color: #fea407;"></i>
                        </div>
                        <h3 class="homepage-titles h3">Разнообразие</h3>
                    </div>
                   
                    <div class="homepage-li-divider"></div>
                    <p class="homepage-li-content">Всяка игра се отличава със своята механика, цел, стил и времетраене. Това е гаранция, че има поне една идеална игра за всеки потребител, а защо не и за цялата компания? Чудиш се как да я откриеш? Започни като си отговориш на въпроса – Индивидуалист или отборен играч си?</p>
                </li>
                <li class="homepage-grid-li">
                    <div class="homepage-grid-title-section">
                        <div class="homepage-li-iconContainer">
                            <i class="fas fa-check" style="color: #fea407;"></i>
                        </div>
                        <h3 class="homepage-titles h3">Различен повод – различна игра</h3>
                    </div>

                    <div class="homepage-li-divider"></div>
                    <p class="homepage-li-content">Парти, време със приятелите, време със семейството, време сам или време с любимия човек? Различните игри са идеални за различен брой играчи и предоставят подходящи цели и изпитания пред играчите.</p>
                </li>
                <li class="homepage-grid-li">
                    <div class="homepage-grid-title-section">
                        <div class="homepage-li-iconContainer">
                            <i class="fas fa-check" style="color: #fea407;"></i>
                        </div>
                        <h3 class="homepage-titles h3">Развитие</h3>
                    </div>
                    <div class="homepage-li-divider"></div>
                    <p class="homepage-li-content">В света на настолните игри ще откриеш голямо разнообразие от игри, чрез които не само ще се забавляваш, но ще научаваш и много нови неща.</p>
                </li>        
              
            </ul>


            <div class="call-to-action-section">
                <p class="cta-text">В нашата колекция има над 400 бордови игри – забавни, мистерии, приключенски, стратегически, кооперативни и много други. За твое удобство сме ги разпределили в различни категории. Веднага ще познаеш своята категория ако знаеш какъв играч си.</p>
                <button class="cta-button">Открий идеалната игра</button>
            </div>

        </div>

`

export async function showHome(ctx){
    ctx.render(homeTemplate())
}