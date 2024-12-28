import { useStore } from 'zustand/react'
import { connectFourStore } from '@/app/connect-four/store'
import { useCallback, useEffect } from 'react'

export const useConnectFour = () => {
   const { makeMove, changePlayer, currentPlayer, board, resetBoard, freezeBoard } =
      useStore(connectFourStore)

   const onPlay = (row: number, col: number) => {
      makeMove(row, col)
      changePlayer()
   }

   const reset = useCallback(() => resetBoard(), [])

   const pause = useCallback(() => freezeBoard(), [])

   useEffect(() => {
      console.log(currentPlayer)
   }, [currentPlayer])

   return {
      onPlay,
      reset,
      pause,
      player: currentPlayer,
      slots: board.slots,
   }
}
