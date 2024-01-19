import {html} from '../../node_modules/lit-html/lit-html.js';

const rankingTemplate = () => html`
 <div class="ranking">
            <div class="ranking-grid card-section">
               <ul class="ranking-ul" role="list">
                        <li class="ranking-li-title">Rank</li>
                        <li class="ranking-li-title">Title</li>
                 
                        <li class="ranking-number ranking-row">1</li>
                        <li class="ranking-game ranking-row">Ark Nova (2021)</li>

                        <li class="ranking-number ranking-row">2</li>
                        <li class="ranking-game ranking-row">Everdell (2018)</li>

                        <li class="ranking-number ranking-row">3</li>
                        <li class="ranking-game ranking-row">Brass: Birmingham (2018)</li>

                        <li class="ranking-number ranking-row">4</li>
                        <li class="ranking-game ranking-row">7 Wonders Duel (2015)</li>

                        <li class="ranking-number ranking-row">5</li>
                        <li class="ranking-game ranking-row">Terraforming Mars (2016)</li>

                        <li class="ranking-number ranking-row">6</li>
                        <li class="ranking-game ranking-row">Wingspan (2019)</li>

                        <li class="ranking-number ranking-row">7</li>
                        <li class="ranking-game ranking-row">ASpirit Island (2017)</li>

                        <li class="ranking-number ranking-row">8</li>
                        <li class="ranking-game ranking-row">Dixit (2008)</li>

                        <li class="ranking-number ranking-row">9</li>
                        <li class="ranking-game ranking-row">Secret Hitler (2016)</li>

                        <li class="ranking-number ranking-row">10</li>
                        <li class="ranking-game ranking-row">Codenames(2015)</li>

               </ul>
            </div>
        </div>


`

export async function showRanking(ctx){
    ctx.render(rankingTemplate())
}