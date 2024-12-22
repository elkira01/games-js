import { useStore } from 'zustand/react'
import { connectFourStore } from '@/app/connect-four/store'

export const useConnectFour = () => {
   const state = useStore(connectFourStore)

   return {
      board: state.board,
      currentPlayer: state.currentPlayer,
      turnCount: state.turnCount,
   }
}
