import { useEffect, useState } from 'react'
import { PlayerColor, SlotType } from '@/app/connect-four/types'
import cn from '@/lib/tw-cn'

interface DiscProps {
   player: number
   col: number
   row: number
   onDrop?: (col: number) => void
}

const initialState: SlotType = {
   row: -1,
   col: -1,
   color: PlayerColor.NONE,
}

export function Disc({ player, col, row }: DiscProps) {
   const [state, setState] = useState<SlotType>(initialState)

   useEffect(() => {
      setState(prev => ({
         ...prev,
         row: row,
         col: col,
         color: player == 1 ? PlayerColor.ONE : PlayerColor.TWO,
      }))
   }, [player, col, row])

   return (
      <div
         className={cn(
            'w-[45px] h-[45px] bg-transparent rounded-full',
            { 'bg-red': state.color === PlayerColor.ONE },
            { 'bg-yellow': state.color === PlayerColor.TWO },
         )}></div>
   )
}
