import { useEffect, useState } from 'react'
import { SlotType, Player, PlayerColor } from '../types'

export interface SlotProps {
   row: number
   col: number
   color: Player['color']
   onClick: (row: number, col: number) => void
   isPlayable: boolean
}
export function Slot({ row, col, onClick, color, isPlayable }: SlotProps) {
   // const [state, setState] = useState<Pick<SlotType, 'color' | 'isPlayable'>>({
   //    color: color,
   //    isPlayable: isPlayable,
   // })
   //
   // useEffect(() => {
   //    setState(prev => ({ ...prev, isPlayable: isPlayable, color: color }))
   // }, [isPlayable, color])

   const handleClick = () => {
      if (isPlayable) {
         onClick(row, col)
         // setState({ ...state, color: color, isPlayable: isPlayable })
      }
   }

   return (
      <div className="w-[60px] h-[60px] bg-blue-800 flex justify-center items-center border border-blue-900">
         <div
            style={{ backgroundColor: color }}
            className="w-[45px] h-[45px] rounded-full border-2 border-blue-850 cursor-pointer text-black"
            onClick={handleClick}></div>
      </div>
   )
}
