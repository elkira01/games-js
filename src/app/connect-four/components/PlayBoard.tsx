'use client'

import { Slot } from './Slot'
import { useState } from 'react'

const COLUMNS_COUNT = 7
const ROWS_COUNT = 6
function PlayBoard() {
   const [state, setState] = useState<any>({ col: -1 })

   return (
      <div className="flex">
         <div className="flex w-[30%]"></div>
         <div className="flex rounded-lg overflow-clip">
            {[...Array(COLUMNS_COUNT)].map((_, rowIndex) => (
               <div key={rowIndex} className="flex-col">
                  {[...Array(ROWS_COUNT)].map((_, colIndex) => (
                     <Slot key={`${rowIndex}-${colIndex}`} row={rowIndex} col={colIndex} />
                  ))}
               </div>
            ))}
         </div>
         <div className="flex w-[30%]"></div>
      </div>
   )
}

export default PlayBoard
