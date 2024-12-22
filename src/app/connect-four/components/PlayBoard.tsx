'use client'

import { Slot } from './Slot'
import { useConnectFour } from '../use-connect-four'
import { COLUMNS_COUNT, ROWS_COUNT } from '../config'

function PlayBoard() {
   const { onPlay, player, slots } = useConnectFour()

   return (
      <div className="flex">
         <div className="flex w-[30%]"></div>
         <div className="flex rounded-lg overflow-clip">
            {[...Array(COLUMNS_COUNT)].map((_, colIndex) => (
               <div key={colIndex} className="flex-col">
                  {[...Array(ROWS_COUNT)].map((_, rowIndex) => (
                     <Slot
                        isPlayable={slots[rowIndex * COLUMNS_COUNT + colIndex].isPlayable}
                        key={`${rowIndex}-${colIndex}`}
                        row={rowIndex}
                        col={colIndex}
                        playerColor={player.color}
                        onClick={onPlay}
                     />
                  ))}
               </div>
            ))}
         </div>
         <div className="flex w-[30%]"></div>
      </div>
   )
}

export default PlayBoard
