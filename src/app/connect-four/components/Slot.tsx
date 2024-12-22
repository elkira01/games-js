import { useEffect, useState } from 'react'
import { SlotType, Player, PlayerColor } from '../types'

export interface SlotProps {
   row: number
   col: number
   playerColor?: Player['color']
   onClick?: (row: number, col: number) => void
   isPlayable: boolean
}
export function Slot({ row, col, onClick, playerColor, isPlayable }: SlotProps) {
   const [state, setState] = useState<Pick<SlotType, 'color' | 'isPlayable'>>({
      color: PlayerColor.NONE,
      isPlayable: isPlayable,
   })

   useEffect(() => {
      setState(prev => ({ ...prev, isPlayable: isPlayable }))
   }, [isPlayable])

   const handleClick = () => {
      if (onClick && state.isPlayable) {
         onClick(row, col)
         setState({ ...state, color: playerColor ?? PlayerColor.NONE, isPlayable: isPlayable })
      }
   }

   return (
      <div className="w-[60px] h-[60px] bg-blue-800 flex justify-center items-center border border-blue-900">
         <div
            style={{ backgroundColor: state.color }}
            className="w-[45px] h-[45px] rounded-full border-2 border-blue-850 cursor-pointer text-black"
            onClick={handleClick}></div>
      </div>
   )
}
