import { Player } from '../types'

export function PlayerPad(props: Player) {
   const player = props

   return (
      <div>
         <section>
            <h2></h2>
            <p>Score: {player.score}</p>
         </section>
         <section></section>
      </div>
   )
}
