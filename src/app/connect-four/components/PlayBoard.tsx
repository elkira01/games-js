'use client'

import { Slot } from './Slot'
import { useState } from 'react'
import { useConnectFour } from '../use-connect-four'
import { COLUMNS_COUNT, ROWS_COUNT } from '../config'

function PlayBoard() {
   const [state, setState] = useState<any>({ col: -1 })
   const { board } = useConnectFour()

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
