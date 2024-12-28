'use client'

import { Slot } from './Slot'
import { useConnectFour } from '../use-connect-four'
import { COLUMNS_COUNT, ROWS_COUNT } from '../config'

function PlayBoard() {
   const { onPlay, slots, reset, pause } = useConnectFour()

   return (
      <div className="flex-col">
         <div className="flex rounded-lg overflow-clip">
            {[...Array(COLUMNS_COUNT)].map((_, colIndex) => (
               <div key={colIndex} className="flex-col">
                  {[...Array(ROWS_COUNT)].map((_, rowIndex) => (
                     <Slot
                        isPlayable={slots[rowIndex * COLUMNS_COUNT + colIndex].isPlayable}
                        key={`${rowIndex}-${colIndex}`}
                        row={rowIndex}
                        col={colIndex}
                        color={slots[rowIndex * COLUMNS_COUNT + colIndex].color}
                        onClick={onPlay}
                     />
                  ))}
               </div>
            ))}
         </div>
         <div className="my-10 flex justify-between gap-x-2">
            <button className="btn btn-primary text-white" onClick={pause}>
               Pause
            </button>
            <button className="btn btn-error text-white" onClick={reset}>
               Reset
            </button>
         </div>
      </div>
   )
}

export default PlayBoard
