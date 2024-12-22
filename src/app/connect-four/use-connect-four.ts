import { useStore } from 'zustand/react'
import { connectFourStore } from '@/app/connect-four/store'

export const useConnectFour = () => {
   const { makeMove, changePlayer, currentPlayer, board } = useStore(connectFourStore)

   const onPlay = (row: number, col: number) => {
      makeMove(row, col)
      changePlayer()
   }

   return {
      onPlay,
      player: currentPlayer,
      slots: board.slots,
   }
}
