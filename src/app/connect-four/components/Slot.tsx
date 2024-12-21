import { JSX, useState } from 'react'
import { SlotType, Player, PlayerColor } from '../types'

export interface SlotProps {
   children?: JSX.Element
   row: number
   col: number
   playerColor?: Player['color']
   onClick?: (row: number, col: number) => void
}
export function Slot({ row, col, onClick, playerColor }: SlotProps) {
   const [state, setState] = useState<SlotType>({
      col: col,
      row: row,
      color: PlayerColor.NONE,
      isPlayable: true,
   })

   const handleClick = () => {
      if (onClick && state.isPlayable) {
         onClick(row, col)
         setState({ ...state, color: playerColor ?? PlayerColor.NONE, isPlayable: false })
      }
   }

   return (
      <div className="w-[60px] h-[60px] bg-blue-800 flex justify-center items-center border border-blue-900">
         <div
            className={`w-[45px] h-[45px] bg-[${state.color}] rounded-full border-2 border-blue-850 cursor-pointer`}
            onClick={handleClick}></div>
      </div>
   )
}
